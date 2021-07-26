import './App.css';
import Home from './pages/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUsPage from './pages/contact-us';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/signin' component={ContactUsPage} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
