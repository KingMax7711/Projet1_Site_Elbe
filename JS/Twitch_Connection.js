document
    .querySelector("#Twitch_Verification")
    .addEventListener("click", function (event) {
        // TODO: Ajouter la vérification de la connexion Twitch
        let condition = true;

        if (!condition) {
            event.preventDefault();
            // ! ATTENTION: Le localStorage est utilisé pour la démonstration, il faudra le remplacer par une vérification serveur
            localStorage.setItem("twitchConnected", "false");
            window.location.href = "../HTML/Twitch_Connection_Unvalid.html";
        } else {
            // ! ATTENTION: Le localStorage est utilisé pour la démonstration, il faudra le remplacer par une vérification serveur
            localStorage.setItem("twitchConnected", "true");
        }
    });
