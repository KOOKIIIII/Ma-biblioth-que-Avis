<?php
session_start();
header('Content-Type: application/json');

// Lire les données POST (attendues sous forme de JSON)
$data = json_decode(file_get_contents('php://input'), true);

$response = array();

if (isset($data['admin'])) {
    // Simuler la connexion d'un admin en stockant le nom dans la session
    $_SESSION['admin'] = $data['admin'];
    $response['status'] = 'success';
    $response['admin'] = $_SESSION['admin'];
} else {
    $response['status'] = 'error';
}

echo json_encode($response);
?>
