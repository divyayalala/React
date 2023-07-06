//import logo from './logo.svg';
// import './App.css';
// import { ClickHandle } from './components/ClickHandle';
// import Counter from './components/Counter';
// import { FunctionMessage } from './components/FunctionMessage';
// import { Greet } from './components/Greet';
// import { Message } from './components/Message';
// import { NamedList } from './components/NamedList';
// import { ParentComponent } from './components/ParentComponent';
// import { StyleSheets } from './components/StyleSheets';
// import { UserGreetings } from './components/UserGreetings';
// //import { Hello } from './components/Hello';
// import {Welcome} from './components/Welcome';
// import './myAppStyles.css'
// import styles from './myAppStyles.module.css'
// import { Form } from './components/Form';
// import { FormDetail } from './components/FormDetail';
// import { FragmentDemo } from './components/FragmentDemo';
// import { Table } from './components/Table';
// import { FragmentList } from './components/FragmentList';
// import LifeCycleA from './components/LifeCycleA';

// import ClickCounter from "./components/ClickCounter";
// import ClickCounter1 from "./components/ClickCounter1";
// import HoverCounter11 from "./components/HoverCounter1";

// import ErrorBoundary from "./components/ErrorBoundary";
// import { FocusInput } from "./components/FocusInput";
// import { Hero } from "./components/Hero";
// import HoverCounter from "./components/HoverCounter";
import ParentComponent from "./components/ParentComponent";
// import { PortalDemo } from "./components/PortalDemo";
// import PureComp from "./components/PureComp";
// import { RefDemo } from "./components/RefDemo";
import ClickCounter1 from "./components/ClickCounter1";
import ComponnetC from "./components/ComponnetC";
import Counter2 from "./components/Counter2";
import HoverCounter1 from "./components/HoverCounter1";
import User from "./components/User";
import { UserProvider } from "./components/UserContext";


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
    {/* <Counter/> */}
    {/* <ClickHandle/> */}
    {/* <UserGreetings/> */}
    {/* <ParentComponent/> */}
    {/* <NamedList/> */}
    {/* <StyleSheets primary={true}/> */}
    {/* <Inline/> */}
    {/* <Form/> */}
    {/* <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}
    {/* <FormDetail/> */}
    {/* <Table/> */}
    {/* <FragmentList/> */}
    {/* <LifeCycleA/> */}
   {/* <ParentComp/> */}
   {/* <RefDemo/> */}
   {/* <FocusInput/> */}
   {/* <ErrorBoundary>
    <Hero heroName='Batman'/>
    <Hero heroName='super man'/> */}
    {/* <Hero heroName=''/> */}
    {/* </ErrorBoundary> */}
    {/* <PortalDemo/> */}
    {/* <ClickCounter name='CGG'/>
    <HoverCounter/> */}
    {/* <ClickCounter1/> */}
     {/* <HoverCounter1/> */}
     {/* <Counter2>
      {
        (count,incrementCount)=>(<ClickCounter1 count={count} incrementCount={incrementCount}/>)
      }
      </Counter2>
     <Counter2>
      {
       (count,incrementCount)=>(
        <HoverCounter1 count={count}
        incrementCount={incrementCount}/>) 
      }
      </Counter2> */}
    {/* //  <User render={(isLoggedIn)=>isLoggedIn?'CGG':'Guest'}/> */}
    {/* <ComponnetC/> */}
    <ParentComponent/>
    </div>
  );
}
//capture input from input element and have the data available for form submission
//manage with react
//1.create state variable to handle the value and change the value of this input element 
//2.Assign username to value attribute 
//3.handle onchange event ,automatically receive cahnge event as an argument use it to update the value
//4.submit form data
//click on submit button page refreshes
//form has default html form behaviour of browsing to a new page
//when the submit button is clicked
//a common approach however is to execute a javascript function that handles submission of form 
//and that form will have access
//to the data the user entered into the form 
export default App;
