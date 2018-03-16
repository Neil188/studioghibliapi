const URL = 'https://ghibliapi.herokuapp.com/films';
const app = document.querySelector('#root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const buildCard = ({title, description}) => {
    // create a div with card class
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    // Create an h1 and set text content to film titel
    const h1 = document.createElement('h1');
    h1.textContent = title;

    card.appendChild(h1);

    // Create a p and set the text content to the film's description
    const p = document.createElement('p');
    p.textContent = `${description.substring(0, 300)}..`;

    card.appendChild(p);

    // Append the card to the container element
    container.appendChild(card);

};

// Get studio data using Fetch api
fetch(URL)
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(new Error (
            `Network response was not ok - Status ${res.status}-${res.statusText}`
        )
        );
    })
    .then(data => data.forEach( buildCard ))
    .catch(error => {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `It broke! ${error}`;
        app.appendChild(errorMessage);
    }
    );

