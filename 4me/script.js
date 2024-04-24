"use strict";
// Array-Datenstruktur für die Einkaufsliste
/*let shoppingList: { name: string, quantity: number, lastPurchasedDate: string, comment: string, nextPurchase: boolean }[] = [
    {
        name: "Milk",
        quantity: 1,
        lastPurchasedDate: "2024-04-25",
        comment: "Brand: ABC",
        nextPurchase: true
    },
    {
        name: "Bread",
        quantity: 2,
        lastPurchasedDate: "2024-04-24",
        comment: "Whole wheat",
        nextPurchase: false
    }
    // Weitere Artikel hier hinzufügen...
];

// Funktion zum Anzeigen der Einkaufsliste
function displayShoppingList(): void {
    let shoppingListContainer: HTMLElement | null = document.querySelector('.shopping-list');
    if (shoppingListContainer) {
        shoppingListContainer.innerHTML = ''; // Einkaufsliste zurücksetzen

        shoppingList.forEach(item => {
            let listItem = document.createElement('div');
            listItem.classList.add('item');
            listItem.innerHTML = `
                <div class="info">
                    <span class="name">${item.name}</span>
                    <span class="quantity">${item.quantity}</span>
                    <span class="last-purchased-date">Last Purchased: ${item.lastPurchasedDate}</span>
                    <span class="comment">${item.comment}</span>
                    <span class="next-purchase">${item.nextPurchase ? 'Next Purchase: Yes' : 'Next Purchase: No'}</span>
                </div>
                <button class="bought-btn">Bought</button>
                <button class="delete-btn">Delete</button>
            `;
            if (shoppingListContainer) {
                shoppingListContainer.appendChild(listItem);
            }
        });
    }
}

// Beispielhafte Verwendung der displayShoppingList-Funktion
displayShoppingList();*/
// Array-Datenstruktur für die Einkaufsliste
let shoppingList = [
    {
        name: "Milk",
        quantity: 1,
        lastPurchasedDate: "2024-04-25",
        comment: "Brand: ABC",
        nextPurchase: true
    },
    {
        name: "Bread",
        quantity: 2,
        lastPurchasedDate: "2024-04-24",
        comment: "Whole wheat",
        nextPurchase: false
    }
    // Weitere Artikel hier hinzufügen...
];
// Funktion zum Anzeigen der Einkaufsliste
function displayShoppingList() {
    let shoppingListContainer = document.querySelector('.shopping-list');
    if (shoppingListContainer) {
        shoppingListContainer.innerHTML = ''; // Einkaufsliste zurücksetzen
        shoppingList.forEach(item => {
            let listItem = document.createElement('div');
            listItem.classList.add('item');
            listItem.innerHTML = `
                <div class="info">
                    <span class="name">${item.name}</span>
                    <span class="quantity">${item.quantity}</span>
                    <span class="last-purchased-date">Last Purchased: ${item.lastPurchasedDate}</span>
                    <span class="comment">${item.comment}</span>
                    <span class="next-purchase">${item.nextPurchase ? 'Next Purchase: Yes' : 'Next Purchase: No'}</span>
                </div>
                <button class="bought-btn">Bought</button>
                <button class="delete-btn">Delete</button>
            `;
            if (shoppingListContainer) {
                shoppingListContainer.appendChild(listItem);
            }
        });
    }
}
// Beispielhafte Verwendung der displayShoppingList-Funktion
displayShoppingList();
//# sourceMappingURL=script.js.map