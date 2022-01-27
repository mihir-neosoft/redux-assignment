import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Products" exact component={Products} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
