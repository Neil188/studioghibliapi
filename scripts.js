( () => {
    const font = document.createElement('link');
    const marquee =  document.createElement('link');
    const style =  document.createElement('link');
    font.type = 'text/css';
    marquee.type = 'text/css';
    style.type = 'text/css';
    font.rel = 'stylesheet';
    marquee.rel = 'stylesheet';
    style.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Dosis';
    marquee.href = 'marquee.min.css';
    style.href = 'style.min.css';
    const firstLink = document.getElementsByTagName('link')[0];
    firstLink.parentNode.insertBefore(font, firstLink);
    firstLink.parentNode.insertBefore(marquee, firstLink);
    firstLink.parentNode.insertBefore(style, firstLink);
})();


const URL = 'https://goo.gl/FWEsQE';
const app = document.querySelector('#root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const buildCard = ({ title, description }) => {
    // create a div with card class
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    // Create an h1 and set text content to film titel
    const h1 = document.createElement('h1');
    h1.textContent = title;

    card.appendChild(h1);

    // Create a p and set the text content to the film's description
    const p = document.createElement('p');
    p.textContent = description;

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
        return Promise.reject(new Error(
            `Network response was not ok - Status ${res.status}-${res.statusText}`
        )
        );
    })
    .then(data => data.forEach( buildCard ))
    .catch(error => {
        const marquee = document.createElement('div');
        marquee.classList.add('marquee');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `It broke! ${error}`;
        marquee.appendChild(errorMessage);
        app.appendChild(marquee);
    }
    );

