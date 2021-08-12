import './App.css';
import { Route, Switch } from 'react-router-dom';
import landingPage from './components/landing page/landingPage';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Switch> //matchea la primera ruta que coincida con el path solicitado
        <Route exact path='/' component={landingPage} />
        <Route path='/home' component={Home} />
        {/* <Route path='/pokemon' component={createPokemon}/> */}
      </Switch>
    </div>
  );
}

export default App;
