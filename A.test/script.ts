document.addEventListener("DOMContentLoaded", () => {
    const liste: HTMLElement | null = document.getElementById("liste");
    const neuerEintragButton: HTMLElement | null = document.getElementById("neuerEintrag");
    const ausgewähltesElementDetails: HTMLElement | null = document.getElementById("ausgewähltes-element-details");

    if (liste && neuerEintragButton && ausgewähltesElementDetails) {
        neuerEintragButton.addEventListener("click", function() {
            const neueZeile: HTMLLIElement = document.createElement("li");
            neueZeile.innerHTML = '<input type="checkbox"> neues Element <span class="menge">0</span> <button class="plus">+</button> <button class="minus">-</button> <div class="einheiten">Einheit: <span>Stück</span> <button class="ausklappen">▼</button></div>';
            if (liste) {
                liste.appendChild(neueZeile);
            }

            const plusButton: HTMLButtonElement | null = neueZeile.querySelector(".plus");
            const minusButton: HTMLButtonElement | null = neueZeile.querySelector(".minus");
            const mengeElement: HTMLSpanElement | null = neueZeile.querySelector(".menge");

            if (plusButton && minusButton && mengeElement) {
                plusButton.addEventListener("click", function() {
                    let menge: number = parseInt(mengeElement.textContent!);
                    menge++;
                    mengeElement.textContent = menge.toString();
                });

                minusButton.addEventListener("click", function() {
                    let menge: number = parseInt(mengeElement.textContent!);
                    if (menge > 0) {
                        menge--;
                        mengeElement.textContent = menge.toString();
                    }
                });
            }
        });

        // Eventlistener für Klick auf Listenelement hinzufügen
        if (liste) {
            liste.addEventListener("click", function(event) {
                const geklicktesElement: HTMLElement | null = (event.target as HTMLElement)?.closest("li");
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
