
import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import bot from "./components/Navbar/logo/bot.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bot } from './components/Home/bot/Bot';
// import Bot from './components/Home/bot';

function App() {
  const [display, setDisplay] = useState("bot hide")
  const [boticon, setboticon] = useState("boticonsize")
  const handleclosebot = () => {
    console.log("clicked")
    setDisplay("bot hide")
    setboticon("boticonsize")
  }

  const handlebotdisplay = () => {
    console.log("clicked")
    setDisplay("bot")
    setboticon("boticonsize hide")
  }
  return (
    <div className="App">
      <div onClick={handlebotdisplay} className={boticon}>
        <img onClick={handlebotdisplay} className={boticon} src={bot} alt='bot' />
      </div>
      <div className={display}>
        <button onClick={handleclosebot} className='button-7 moveclosebutton'>close</button>
        <Bot />
      </div>
      <Home />
    </div>
  );
}

export default App;
