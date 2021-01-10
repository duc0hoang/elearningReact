import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import HomeAdmin from './pages/HomeAdmin';

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
