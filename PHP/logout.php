<?php
session_start();
session_destroy(); // Détruit toutes les sessions
header('Location: index.html'); // Redirige vers la page d'accueil
?>
