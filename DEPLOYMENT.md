# Deployment Guide — AWS S3 + CloudFront

## Prerequisites

- AWS CLI installed and configured (`aws configure`)
- An S3 bucket and CloudFront distribution created
- Domain pointed to CloudFront distribution (via Route 53 or external DNS)

---

## Build

```bash
npm run build
```

Output is in `./out/` (static HTML, CSS, JS, images).

---

## S3 Setup

### 1. Create the S3 bucket

```bash
aws s3api create-bucket \
  --bucket www.goldensparkelectrical.com \
  --region us-east-1
```

### 2. Block public access (CloudFront handles this)

```bash
aws s3api put-public-access-block \
  --bucket www.goldensparkelectrical.com \
  --public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"
```

### 3. Disable static website hosting (not needed with CloudFront OAC)

---

## CloudFront Setup

### 1. Create Origin Access Control (OAC)

In the AWS Console → CloudFront → Origin access → Create control setting:
- Name: `goldensparkelectrical-oac`
- Signing behaviour: Always sign
- Origin type: S3

### 2. Create distribution

- Origin: your S3 bucket
- Use OAC created above
- Default root object: `index.html`
- Viewer protocol policy: Redirect HTTP to HTTPS
- Cache policy: CachingOptimized
- Compress objects automatically: Yes

### 3. Custom error pages (for clean SPA routing)

Add custom error responses:
- 403 → `/404/index.html` with status 404
- 404 → `/404/index.html` with status 404

### 4. Update S3 bucket policy

After creating the distribution, add the OAC bucket policy (CloudFront will show you the exact policy to copy).

---

## Deploy Script

Create a `deploy.sh` file:

```bash
#!/bin/bash
set -e

BUCKET="www.goldensparkelectrical.com"
CF_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID"

echo "Building..."
npm run build

echo "Syncing to S3..."
aws s3 sync ./out s3://$BUCKET \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "sitemap.xml" \
  --exclude "robots.txt"

# HTML files — short cache, no immutable
aws s3 sync ./out s3://$BUCKET \
  --delete \
  --cache-control "public, max-age=0, must-revalidate" \
  --include "*.html"

# sitemap and robots — very short cache
aws s3 cp ./out/sitemap.xml s3://$BUCKET/sitemap.xml \
  --cache-control "public, max-age=3600"
aws s3 cp ./out/robots.txt s3://$BUCKET/robots.txt \
  --cache-control "public, max-age=3600"

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id $CF_DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## Domain Setup (Route 53)

1. Create a hosted zone for `goldensparkelectrical.com`
2. Add an A record (alias) pointing to your CloudFront distribution
3. Add a CNAME or A alias for `www.goldensparkelectrical.com`
4. Request an SSL certificate in AWS Certificate Manager (us-east-1 region, required for CloudFront)
5. Add the certificate to your CloudFront distribution

---

## Environment Variables

None required — this is a fully static site.

The site URL (`SITE_URL`) in `lib/constants.ts` should be updated to your production domain before building.

---

## Post-Deployment Checklist

- [ ] Homepage loads correctly
- [ ] All service pages accessible
- [ ] LP pages accessible (e.g., `/lp/electrician-toronto/`)
- [ ] `/sitemap.xml` returns valid XML
- [ ] `/robots.txt` accessible
- [ ] HTTPS redirect working
- [ ] Mobile responsive check
- [ ] Google Search Console → Submit sitemap
- [ ] Google Business Profile → Add website URL
