
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Components/Login'
import Profile from './Components/Profile'
import Timesheet from './Components/Timesheet'

function App() {
  return (
    
     
       
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route  path="/timesheet" component={Timesheet} />
          <Route path="/profile" component ={() => <Profile authorized={true} />} />
          
          
        </Switch>
      </Router>
      
    
  );
}

export default App;
