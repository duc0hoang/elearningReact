import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeAdmin from './pages/HomeAdmin';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={HomeAdmin} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
);
}

export default App;
