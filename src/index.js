import React from 'react'
import ReactDOM from 'react-dom'

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