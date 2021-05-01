import {useState} from 'react';
import {quotes} from './quotes.json';
import Quote from './Quote';


const QuoteContainer = () => {

    const getRandom = () => {
        return Math.floor(Math.random() * (quotes.length));
    }

    const [ {quote,author}, setQuote] = useState( quotes[getRandom()] );

    return (
        <div className= "quoteCont" >
            <Quote quote= { quote } author = { author } />
            <div className = "btnBox" >
                <button className = "btn" onClick = { () => alert('Me dio amsiedad') } >Twitt</button>
                <button className = "btn" onClick = { () => setQuote(quotes[getRandom()]) } >New Quote</button>
            </div>
        </div>
    )

}

export default QuoteContainer;