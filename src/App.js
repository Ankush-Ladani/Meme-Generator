import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import '../src/style.css'
import Main from './components/Main';
import EventListener from './components/EventListener';
import Main2 from './components/newTry/Main'
import Header2 from './components/newTry/Header'
import Count from './components/Count';
import Count2 from './components/Count2';
import Pract from './components/Pract';
function App() {
  // console.log('App rendered');
  return (
    <div className="App">
      {/* <Header></Header>
      <Main></Main> */}
      {/* <EventListener></EventListener> */}
      {/* <Header2></Header2> */}
      {/* <Main2></Main2> */}
      {/* <Count></Count> */}
      {/* <Count2></Count2> */}
      {/* <Pract></Pract> */}
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
