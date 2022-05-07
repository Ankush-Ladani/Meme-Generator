import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import '../src/style.css'
import Main from './components/Main';
import EventListener from './components/EventListener';
import Main2 from './components/newTry/Main'
import Header2 from './components/newTry/Header'
function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Main></Main> */}
      {/* <EventListener></EventListener> */}
      <Header2></Header2>
      <Main2></Main2>
    </div>
  );
}

export default App;
