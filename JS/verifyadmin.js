// Fonction pour vérifier si l'utilisateur est un admin
        function checkAdmin() {
            fetch('check_admin.php', { 
                method: 'GET' 
            })
            .then(response => response.json())
            .then(data => {
                const resultDiv = document.getElementById('result');

                if (data.status === 'success') {
                    resultDiv.innerHTML = `<p>Bienvenue Admin, ${data.admin} !</p>`;
                } else {
                    resultDiv.innerHTML = '<p>Erreur : Vous n\'êtes pas connecté en tant qu\'administrateur.</p>';
                }
            })
            .catch(error => {
                console.error('Erreur lors de la requête:', error);
            });
        }

        // Fonction pour simuler la connexion de l'administrateur
        function loginAdmin() {
            const username = document.getElementById('username').value;

            fetch('login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ admin: username })
            })
            .then(response => response.json())
            .then(data => {
                const loginStatusDiv = document.getElementById('loginStatus');

                if (data.status === 'success') {
                    loginStatusDiv.innerHTML = `<p>Connecté en tant que ${data.admin}.</p>`;
                } else {
                    loginStatusDiv.innerHTML = '<p>Erreur lors de la connexion.</p>';
                }
            })
            .catch(error => {
                console.error('Erreur lors de la requête:', error);
            });
        }
        