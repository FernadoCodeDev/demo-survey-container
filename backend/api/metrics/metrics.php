<?php
require_once('../../config.php');

header('Content-Type: application/json');

$surveyId = $_GET['surveyId'] ?? null;

if (!$surveyId) {
    http_response_code(400);
    echo json_encode(['error' => 'Falta el parámetro surveyId']);
    exit;
}

try {
    $stmt = $pdo->prepare('SELECT id, text FROM Question WHERE surveyId = :surveyId');
    $stmt->execute(['surveyId' => $surveyId]);
    $questions = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $metrics = [];

    foreach ($questions as $question) {
        $stmt = $pdo->prepare('
            SELECT content, COUNT(*) as count
            FROM Response
            WHERE questionId = :questionId
            GROUP BY content
        ');
        $stmt->execute(['questionId' => $question['id']]);
        $responses = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $metrics[] = [
            'questionId' => $question['id'],
            'text' => $question['text'],
            'responses' => $responses
        ];
    }

    echo json_encode($metrics);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de base de datos: ' . $e->getMessage()]);
}
