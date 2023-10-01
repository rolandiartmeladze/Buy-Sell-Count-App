<?php
// Retrieve the incoming JSON data
$inputJSON = file_get_contents('php://input');
$inputData = json_decode($inputJSON, true);

// Check if data is valid
if ($inputData && is_array($inputData)) {
    // Load existing data from fasi.json
    $existingData = [];
    if (file_exists('fasi.json')) {
        $existingJSON = file_get_contents('fasi.json');
        $existingData = json_decode($existingJSON, true);
    }

    // Add the new data to the existing data
    $existingData[] = $inputData;

    // Save the combined data back to fasi.json
    file_put_contents('fasi.json', json_encode($existingData, JSON_PRETTY_PRINT));

    // Return a success response
    http_response_code(200);
    echo json_encode(['message' => 'Data saved successfully']);
} else {
    // Return an error response
    http_response_code(400);
    echo json_encode(['message' => 'Invalid data']);
}
?>
