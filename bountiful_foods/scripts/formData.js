const elements = {
    firstName: document.querySelector('.first-name'),
    emailAddress: document.querySelector('.email-address'),
    phoneNumber: document.querySelector('.phone-number'),
    fruitChoices: [
      document.querySelector('.fruit-choice-1'),
      document.querySelector('.fruit-choice-2'),
      document.querySelector('.fruit-choice-3')
    ],
    specialInstructions: document.querySelector('.special-instructions'),
    submitButton: document.querySelector('.submit-button'),
    freshForm: document.querySelector('.fresh-form'),
    formInfo: document.querySelector('.form-info')
  };
  
  elements.formInfo.style.display = 'none';
  
  elements.submitButton.addEventListener("click", async () => {
    elements.freshForm.style.display = 'none';
    elements.formInfo.style.display = 'block';
    const fruitTexts = elements.fruitChoices.map(choice => choice.options[choice.selectedIndex].text);
  
    const response = await fetch(url);
    const data = await response.json();
    const nutritionData = fruitTexts.map(fruitName => data.find(fruit => fruit.name === fruitName).nutritions);
  
    const nutritionTotals = nutritionData.reduce((totals, curr) => {
      Object.keys(totals).forEach(key => {
        totals[key] += curr[key];
      });
      return totals;
    }, { calories: 0, carbohydrates: 0, fat: 0, protein: 0, sugar: 0 });
  
    const orderInfo = `
      Thank you ${elements.firstName.value} for your order! <br>We will contact you at ${elements.emailAddress.value} or ${elements.phoneNumber.value} <br>when your drink is ready.<br><br>
      We will make sure to follow these instructions: <br>${elements.specialInstructions.value}.
    `;
    
    const juiceDetails = `
      Your smoothie includes: <br>${fruitTexts.join(', ')}. <br><br>These are the nutrinional elements: <br>${Math.ceil(nutritionTotals.calories)} calories <br>${Math.ceil(nutritionTotals.carbohydrates)}g carbohydrates <br>${Math.ceil(nutritionTotals.fat)}g fats <br>${Math.ceil(nutritionTotals.protein)}g protein, <br>${Math.ceil(nutritionTotals.sugar)}g sugar.
    `;
    
    const displayInfo = (parent, content) => {
      const elem = document.createElement('p');
      elem.innerHTML = content;
      parent.appendChild(elem);
      return elem;
    };
  
    const orderElem = displayInfo(elements.formInfo, orderInfo);
    const smoothieElem = displayInfo(elements.formInfo, juiceDetails);
  
    const newButton = document.createElement('button');
    newButton.textContent = 'Create Another';
    elements.formInfo.appendChild(newButton);
  
    newButton.addEventListener('click', () => {
      [orderElem, smoothieElem].forEach(elem => elem.remove());
      newButton.remove();
      elements.freshForm.style.display = 'block';
      elements.formInfo.style.display = 'none';
      elements.firstName.value = "";
      elements.emailAddress.value = "";
      elements.phoneNumber.value = "";
      elements.fruitChoices.forEach(choice => choice.value = "");
      elements.specialInstructions.value = "";
    });
  
    if (localStorage.getItem('formSubmissions') === null) {
      localStorage.setItem('formSubmissions', 0);
    }
    localStorage.setItem('formSubmissions', parseInt(localStorage.getItem('formSubmissions')) + 1);
  });
  