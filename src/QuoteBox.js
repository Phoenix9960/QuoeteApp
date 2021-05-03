import 'bootstrap/dist/css/bootstrap.css';

import {useState} from 'react';
import {quotes} from './quotes.json';
import Quote from './Quote';

import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';


const QuoteBox = ( {color} ) => {

    const handleQuote = () => {
        setQuote(quotes[getRandom()])

        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    const fontColor = {
        color: `#${color}`
    }

    const getRandom = () => {
        return Math.floor(Math.random() * (quotes.length));
    }

    const [ {quote,author}, setQuote] = useState( quotes[getRandom()] );

    return (
        <div className= "quoteBox" style = { fontColor }>
            <Quote quote= { quote } author = { author } />
            <div className = "btnBox" >
                <a  type="button" className = "btn btn-light" href={`https://twitter.com/intent/tweet?text=${quote}%20by%20${author}&hashtags=academlo,TwittReact`} target="_blank" rel="noreferrer">
                    Twittear
                </a>
                <button className = "btn btn-light" onClick = { handleQuote } >New Quote</button>
            </div>
        </div>
    )

}

export default QuoteBox;