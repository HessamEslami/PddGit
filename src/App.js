import logo from './logo.svg';
import './App.css';
import { MainComponent } from './componenets/MainComponent';
import { BrowserRouter as Router, Route, Switch, link } from 'react-router-dom';
import { PrivateRoute } from './componenets/PrivateRoute';
import { Login } from './authentication/Login';
import { AddOrEditRequest } from './componenets/request/AddOrEditRequest';
import { RequestDetail } from './componenets/request/RequestDetail';
import { PageNotFound } from './componenets/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route  path="/request-list/add-request" component={AddOrEditRequest} />
        <Route  path="/request-detail/:id" component={RequestDetail} />
        <PrivateRoute  path="/request-list/" component={MainComponent} />
        <Route path="*" component={PageNotFound} />
      </Switch>

    </Router>
  );
}

export default App;
