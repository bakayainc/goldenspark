<?php
/**
 * Contact form mailer for Golden Spark Electrical Contractors
 * Place this file at: /forms/mail.php on GoDaddy cPanel hosting
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.goldensparkelectrical.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Reject non-POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Configuration ---
define('TO_EMAIL',   'info@goldensparkelectrical.com');
define('TO_NAME',    'Golden Spark Electrical');
define('FROM_EMAIL', 'noreply@goldensparkelectrical.com');
define('SITE_ORIGIN', 'https://www.goldensparkelectrical.com');

// --- Helpers ---

function sanitize(string $value): string {
    // Strip newlines to prevent header injection, trim whitespace
    return trim(str_replace(["\r", "\n"], ' ', strip_tags($value)));
}

function validate_email(string $email): bool {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// --- Parse input ---
$raw = json_decode(file_get_contents('php://input'), true);

// Support both JSON body and form-encoded POST
$input = is_array($raw) ? $raw : $_POST;

$name    = sanitize($input['name']    ?? '');
$phone   = sanitize($input['phone']   ?? '');
$email   = sanitize($input['email']   ?? '');
$service = sanitize($input['service'] ?? '');
$message = sanitize($input['message'] ?? '');
$honeypot = $input['website'] ?? ''; // Spam trap — must be empty

// --- Honeypot check ---
if (!empty($honeypot)) {
    // Silently succeed to confuse bots
    echo json_encode(['success' => true]);
    exit;
}

// --- Validation ---
$errors = [];

if (empty($name) || mb_strlen($name) < 2) {
    $errors[] = 'Full name is required.';
}

if (empty($phone)) {
    $errors[] = 'Phone number is required.';
}

if (!empty($email) && !validate_email($email)) {
    $errors[] = 'Please enter a valid email address.';
}

if (empty($message) || mb_strlen($message) < 10) {
    $errors[] = 'Message must be at least 10 characters.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// --- Build email ---
$service_label = !empty($service) ? $service : 'General Inquiry';
$subject = "Quote Request — {$service_label} — {$name}";

$body  = "New quote request from goldensparkelectrical.com\n";
$body .= str_repeat('-', 50) . "\n\n";
$body .= "Name:    {$name}\n";
$body .= "Phone:   {$phone}\n";
$body .= "Email:   " . (!empty($email) ? $email : 'Not provided') . "\n";
$body .= "Service: {$service_label}\n\n";
$body .= "Message:\n{$message}\n";
$body .= str_repeat('-', 50) . "\n";
$body .= "Submitted: " . date('Y-m-d H:i:s T') . "\n";

// Reply-To the sender if they provided an email
$reply_to = !empty($email) && validate_email($email) ? $email : FROM_EMAIL;

$headers  = "From: " . TO_NAME . " <" . FROM_EMAIL . ">\r\n";
$headers .= "Reply-To: {$reply_to}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// --- Send ---
$sent = mail(TO_EMAIL, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send message. Please call us directly at (647) 466-1986.']);
}
