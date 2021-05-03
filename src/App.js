import './App.css';

import QuoteBox from './QuoteBox';



function App() {

  const colors = ['72147e', 'f21170', 'fa9905', 'ff5200', '23049d', 'aa2ee6', 'ff79cd', 'ffc996', 'ff8474', '9f5f80', '583d72','fdca40', 'a799b7'];
  const colorRandom = () => {
    let num =Math.floor(Math.random() * (colors.length));
    return colors[num];
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
