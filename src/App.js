import { BrowserRouter as Router , Route, Switch} from "react-router-dom"

import './App.css';
import Header from './components/Header';
import Login from './views/authPage/login/Login';
import Register from './views/authPage/register/Register';


function App() {

  return(
    <div className = "container">
       
       <Router>
         <Header />
         <Switch>
           <Route path= "/login">
             <Login />
           </Route>
           <Route path= "/register">
              <Register />
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App
