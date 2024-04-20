"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const liste = document.getElementById("liste");
    const neuerEintragButton = document.getElementById("neuerEintrag");
    const ausgewähltesElementDetails = document.getElementById("ausgewähltes-element-details");
    if (liste && neuerEintragButton && ausgewähltesElementDetails) {
        neuerEintragButton.addEventListener("click", function () {
            const neueZeile = document.createElement("li");
            neueZeile.innerHTML = '<input type="checkbox"> neues Element <span class="menge">0</span> <button class="plus">+</button> <button class="minus">-</button> <div class="einheiten">Einheit: <span>Stück</span> <button class="ausklappen">▼</button></div>';
            if (liste) {
                liste.appendChild(neueZeile);
            }
            const plusButton = neueZeile.querySelector(".plus");
            const minusButton = neueZeile.querySelector(".minus");
            const mengeElement = neueZeile.querySelector(".menge");
            if (plusButton && minusButton && mengeElement) {
                plusButton.addEventListener("click", function () {
                    let menge = parseInt(mengeElement.textContent);
                    menge++;
                    mengeElement.textContent = menge.toString();
                });
                minusButton.addEventListener("click", function () {
                    let menge = parseInt(mengeElement.textContent);
                    if (menge > 0) {
                        menge--;
                        mengeElement.textContent = menge.toString();
                    }
                });
            }
        });
        // Eventlistener für Klick auf Listenelement hinzufügen
        if (liste) {
            liste.addEventListener("click", function (event) {
                const geklicktesElement = event.target?.closest("li");
                if (geklicktesElement) {
                    // Ausgewähltes Element in das item-Div kopieren
                    if (ausgewähltesElementDetails) {
                        ausgewähltesElementDetails.innerHTML = geklicktesElement.innerHTML;
                    }
                }
            });
        }
    }
});
//# sourceMappingURL=script.js.map