// ==UserScript==
// @name         [ONCHE] IconBlackListed
// @version      0.1.1
// @description  Script pour https://onche.org, efface un message en fonction de son badge
// @author       Lauteur
// @match        https://onche.org/forum/*
// @match        https://onche.org/topic/*
// @icon         https://risibank.fr/cache/medias/0/4/455/45582/thumb.png
// @grant        GM_addStyle
// ==/UserScript==

const drapeauCouleurs = "https://onche.org/img/badges/maxigay.svg";

window.addEventListener("load", (e)=>{
    let imgClassIcon = document.getElementsByClassName("icon");
    for (let i=0; i<imgClassIcon.length; i++){
        let el = imgClassIcon[i];
        if (el.getAttribute("src") == drapeauCouleurs){
            el.closest("message").style.display = "none";
        }
    }
})


