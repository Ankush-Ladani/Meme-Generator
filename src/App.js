import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import '../src/style.css'
import Main from './components/Main';
import EventListener from './components/EventListener';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      {/* <EventListener></EventListener> */}
    </div>
  );
}

export default App;
