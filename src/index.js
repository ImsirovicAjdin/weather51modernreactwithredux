import React from 'react'
import ReactDOM from 'react-dom'

// JS file loaded by browser
// App component gets created
// We call geolocation service
// App returns JSX, gets rendered to page as HTML
// ...
// We get result of geolocation!
// TELL THE COMPONENT TO RERENDER ITSELF WITH THIS NEW INFORMATION

// One solution to this conundrum is to convert our component to
// a class-based component, and once we do, this will allow us to
// use React's state system

const App = () => {
    // window.navigator.geolocation.getCurrentPosition(
    //     (position) => console.log(position), // success callback
    //     (err) => console.log(err) // failure callback
    // )

    // return <h1>Latitude: </h1>

    // USING PROMISES (ERROR)
    // var bitcoinPriceUSD = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    //             .then(response => response.json())
    //             .then(jsonData => console.log(jsonData))
    //             .then(jsonData => bitcoinPriceUSD = JSON.parse(jsonData))
    //             .then(console.log(bitcoinPriceUSD))
    // return <h1>Bitcoin Price in USD: ${bitcoinPriceUSD}</h1>

    // USING ASYNC AWAIT (NO ERROR, BUT ALSO NOT ASYNC because it doesnt show the price data)
    var bpu;

    async function btcPriceUSD() {
        var result = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        var data = await result.json()
        bpu = data.bpi.USD.rate_float;
    }

    return <h1>Bitcoin Price in USD: ${bpu}</h1>

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)