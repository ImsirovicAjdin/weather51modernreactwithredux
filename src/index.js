import React from 'react'
import ReactDOM from 'react-dom'

// JS file loaded by browser
// App component gets created
// We call geolocation service
// App returns JSX, gets rendered to page as HTML
// ...
// We get result of geolocation!
// TELL THE COMPONENT TO RERENDER ITSELF WITH THIS NEW INFORMATION

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position), // success callback
        (err) => console.log(err) // failure callback
    )

    return <h1>Latitude: </h1>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)