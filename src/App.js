
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Bot } from './components/Home/bot/Bot';
// import Bot from './components/Home/bot';

function App() {
  return (
    <div className="App">
                <div className="bot">
            {/* <Bot /> */}
          </div>
      <Home />
    </div>
  );
}

export default App;
