import './App.css';

import QuoteBox from './QuoteBox';



function App() {

  const colors = ['72147e', '23049d', 'aa2ee6', 'ff8474', '64bd97', '606470', '126e82'];
  
  const colorRandom = () => {
    return colors[Math.floor(Math.random() * (colors.length))];
  }

  let num = colorRandom();

  const bgColor = {
    backgroundColor: `#${num}`
  }

  return (
    <div className="App" style = { bgColor }>
      <header className="App-header">
        <QuoteBox color = {num}/>
      </header>
    </div>
  );
}

export default App;
