// ==UserScript==
// @name         [ONCHE] IconBlackListed
// @version      0.1.1
// @description  Script pour https://onche.org, efface un message en fonction de son badge
// @author       Niourim
// @match        https://onche.org/forum/*
// @match        https://onche.org/topic/*
// @icon         https://risibank.fr/cache/medias/0/4/455/45582/thumb.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    const drapeauCouleurs = "https://onche.org/img/badges/maxigay.svg";
    const drapeauCuck = "https://onche.org/img/badges/cuck.svg";
    //pour trouver le nom d'un drapeau : clic droit sur le drapeau > copier l'adresse de l'image
    const liste = [drapeauCouleurs]; //pour plusieurs drapeaux, mettre une virgule : [drapeauCouleurs, drapeauCuck]

    window.addEventListener("load", (e)=>{
        let imgClassIcon = document.getElementsByClassName("icon");
        for (let i=0; i<imgClassIcon.length; i++){
            let el = imgClassIcon[i];
            for (let j=0; j<liste.length; j++){
                if (el.getAttribute("src") == liste[j]){
                    el.closest(".message").style.display = "none";
                }
            }
        }
    })

})();
