import logo from './logo.svg';
import './App.css';
import './mofiz.css';
import Header from './Header';

function App() {
  function FireEvent()
  {
    window.confirm("Do you really want to continue?")
  }
  function PrintMe()
  {
    console.log('Hello')
  }
  return (
    <div className="App">
      <Header name="Zulkar Nayin" id="16303045"/>
      <Header name="Etu Mahmuda" id="18103327"/>
      <Header name="Fahim Hossain" id="17303004"/>
      
      <button onClick={FireEvent}>Click Here</button>
      <input type="text" onChange={PrintMe}/>

    </div>
  );
}

export default App;
