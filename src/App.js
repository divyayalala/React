//import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { FunctionMessage } from './components/FunctionMessage';
import { Greet } from './components/Greet';
import { Message } from './components/Message';
//import { Hello } from './components/Hello';
import {Welcome} from './components/Welcome';

function App() {
  return (
    <div className='App'>
      {/* <h1>Welcome to CGG</h1> */}
      {/* <Greet name="React" designation="SSD">
        <p>This is children prop</p>
      </Greet>
      <Greet name="Angular" designation="SD">
        <button>Click me</button>
      </Greet>
      <Greet name="Vue" designation="TL">
        </Greet>
      <Welcome name="React" designation="SSD">
      <p>This is children prop</p>
        </Welcome>
      <Welcome name="Angular" designation="SD">
        </Welcome>
      <Welcome name="Vue" designation="TL">
        </Welcome> */}
    {/* <Hello/> */}
    {/* <Message/> */}
    {/* <FunctionMessage/> */}
    <Counter/>
    </div>
  );
}

export default App;
