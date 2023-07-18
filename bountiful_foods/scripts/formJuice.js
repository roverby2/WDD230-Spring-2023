const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    displayFruitsInDropdown(data, '.fruit-choice-1');
    displayFruitsInDropdown(data, '.fruit-choice-2');
    displayFruitsInDropdown(data, '.fruit-choice-3');
}

getFruitData();

function displayFruitsInDropdown(fruits, dropdownSelector) {
    const dropdown = document.querySelector(dropdownSelector);

    fruits.forEach((fruit) => {
        let option = document.createElement('option');
        let value = fruit.genus;
        option.setAttribute('value', `${value}`);
        option.textContent = `${fruit.name}`;
        dropdown.appendChild(option);
    });
}