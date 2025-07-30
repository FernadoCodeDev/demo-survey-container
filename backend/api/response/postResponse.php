<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

require_once __DIR__ . '/../../config.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['responses']) || !is_array($data['responses'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Se espera un arreglo de respuestas bajo la llave "responses".']);
    exit;
}

$stmt = $db->prepare("INSERT INTO Response (id, content, questionId) VALUES (?, ?, ?)");
$success = true;

foreach ($data['responses'] as $response) {
    $responseId = uniqid();
    $content = $response['content'] ?? '';
    $questionId = $response['questionId'] ?? '';

    if (!$content || !$questionId) {
        continue; 
    }

    $stmt->bind_param("sss", $responseId, $content, $questionId);
    if (!$stmt->execute()) {
        $success = false;
        break;
    }
}