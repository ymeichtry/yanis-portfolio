import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import ContactPage from './components/ContactPage/ContactPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
