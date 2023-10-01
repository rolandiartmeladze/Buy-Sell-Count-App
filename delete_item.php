<?php
$jsonData = file_get_contents('stmdata.json');

$data = json_decode($jsonData, true);

$updatedData = json_decode(file_get_contents('php://input'), true);

$data['sabrunavi_sashualebeis_sia'] = $updatedData['sabrunavi_sashualebeis_sia'];

$updatedJsonData = json_encode($data, JSON_PRETTY_PRINT);

file_put_contents('stmdata.json', $updatedJsonData);

echo json_encode(['success' => true]);
?>
