import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
// Components
//styling
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details/:id">
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
