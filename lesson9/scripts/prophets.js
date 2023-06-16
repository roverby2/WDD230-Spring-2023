const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
     displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');
  
    prophets.forEach(prophet => {
      const card = `
        <section>
          <h2>${prophet.name} ${prophet.lastname}</h2>
          <img src="${prophet.imageurl}" alt="Portrait of Prophet #${prophet.order} ${prophet.name} ${prophet.lastname}" loading="lazy" width="340" height="440">
          <h3>Date of Birth: <strong>${prophet.birthdate}</strong></h3>
          <h4>Place of Birth: ${prophet.birthplace}</h4>
          <h4># ${prophet.order}</h4>
        </section>
      `;
      cards.insertAdjacentHTML('beforeend', card);
    });
  };

getProphetData();
