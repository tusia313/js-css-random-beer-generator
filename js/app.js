const thingButton = document.querySelector('#thing-button')
const randomThingTitle = document.querySelector('#random-thing')
const randomThingDescription = document.querySelector('#description')

function getData() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

thingButton.addEventListener('click', getData)