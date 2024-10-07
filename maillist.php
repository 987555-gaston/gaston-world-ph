<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['success' => false, 'error' => 'Missing required fields']);
        exit;
    }
    
    $timestamp = date('Y-m-d H:i:s');
    $filename = 'messages/message_' . time() . '.txt';
    
    $content = "Date: $timestamp\n";
    $content .= "Name: $name\n";
    $content .= "Email: $email\n";
    $content .= "Message:\n$message\n";
    
    if (!is_dir('messages')) {
        if (!mkdir('messages', 0777, true)) {
            echo json_encode(['success' => false, 'error' => 'Failed to create messages directory']);
            exit;
        }
    }
    
    if (file_put_contents($filename, $content) === false) {
        echo json_encode(['success' => false, 'error' => 'Failed to write message to file']);
    } else {
        echo json_encode(['success' => true]);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}
?>
