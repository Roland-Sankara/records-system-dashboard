import Navigation from './components/NavigationBar/index';
import MainAppWrapper from './components/MainAppWrapper/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainAppWrapper>
        <h1>Section Content 1</h1>
        <h1>Section Content 2</h1>
      </MainAppWrapper>
    </div>
  );
}

export default App;
