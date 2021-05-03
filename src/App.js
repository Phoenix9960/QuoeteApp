import './App.css';

import QuoteBox from './QuoteBox';



function App() {

  const colors = ['72147e', '23049d', 'aa2ee6', 'ff8474', '64bd97', '606470', 'ead3cb', '126e82'];
  const colorRandom = () => {
    let num =Math.floor(Math.random() * (colors.length));
    return colors[num];
  }

  let num = colorRandom();
  console.log(num);

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
