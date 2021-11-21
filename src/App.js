import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Course from './Component/Course/Course';
import Teacher from './Component/Teacher/Teacher';
import Found from './Component/Found/Found';
import SingleCourse from './Component/SingleCourse/SingleCourse';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/course">
            <Course></Course>
          </Route>
          <Route exact path="/course/:id">
            <Course></Course>
          </Route>
          <Route path="/teacher">
            <Teacher></Teacher>
          </Route>
          <Route exact path="*">
            <Found></Found>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
