//import Home from './Home/Home';
import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
//import Todo from './Todo/Todo';
//import Timer from './Pomodoro/Timer';
import Crypto from './Crypto/Crypto';
import Charthome from './Chart/Charthome';

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
      <Charthome/>
      </Content>
      <Footer/>
        
    </div>
  );
}

export default App;
