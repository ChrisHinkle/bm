const items = [
    { name: "AWM 338", price:12,150 },
    { name: "Banana", price: 0.50 },
    { name: "Cherry", price: 2.00 },
    { name: "Date", price: 3.00 },
];

function renderItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = ''; // Clear existing items

    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <label>${item.name} ($${item.price.toFixed(2)}): </label>
            <input type="number" id="quantity-${index}" value="0" min="0">
        `;
        itemList.appendChild(itemDiv);
    });
}

function calculateTotal() {
    let total = 0;

    items.forEach((item, index) => {
        const quantity = document.getElementById(`quantity-${index}`).value;
        total += item.price * quantity;
    });

    document.getElementById('total-amount').innerText = total.toFixed(2);
}

document.getElementById('calculate-btn').addEventListener('click', calculateTotal);

// Initial render of items
renderItems();
