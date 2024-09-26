<?php
session_start();
header('Content-Type: application/json');

$response = array();

if (isset($_SESSION['admin'])) {
    // L'utilisateur est connecté en tant qu'admin
    $response['status'] = 'success';
    $response['admin'] = $_SESSION['admin']; // Nom d'utilisateur de l'admin stocké dans la session
} else {
    // L'utilisateur n'est pas un admin
    $response['status'] = 'error';
}

echo json_encode($response);
?>
