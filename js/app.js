const thingButton = document.querySelector('#thing-button')
const randomThingImage = document.querySelector('#random-thing-image')
const randomThingDescription = document.querySelector('#description')

function getData() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const description = data.value
        randomThingDescription.textContent = description
    })
}

thingButton.addEventListener('click', getData)