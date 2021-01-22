// const url = "http://puzzle.mead.io/puzzle"

// fetch(url).then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('#weather-form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')

// msg1.textContent = 'From JS'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    const forecastUrl = "/weather?address=" + encodeURI(location)
    // console.log(forecastUrl)
    
    msg1.textContent = "Loading..."
    msg2.textContent = ""
    
    fetch(forecastUrl).then((response) => {
        response.json().then((forecastJson) => {
            if (forecastJson.error) {
                msg1.textContent = forecastJson.error
                // console.log(forecastJson.error)
            } else {
                msg1.textContent = forecastJson.forecast
                msg2.textContent = forecastJson.location
                // console.log(forecastJson.forecast)
                // console.log(forecastJson.location)
            }
        })
    })    
})