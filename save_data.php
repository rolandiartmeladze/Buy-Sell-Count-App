<?php

$data = file_get_contents('stmdata.json');
$items = json_decode($data, true);

$element = json_decode(file_get_contents('php://input'), true);

$items['sabrunavi_sashualebeis_sia'][] = $element;

$json_data = json_encode($items, JSON_PRETTY_PRINT);

file_put_contents('stmdata.json', $json_data);
?>

