import React,{useEffect} from 'react';
import "./App.css";
import {Route,Switch} from 'react-router-dom'; 
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn ,getAllCategory,getInitialData} from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';
import NewPage from './containers/NewPage';





function App() {


const dispatch = useDispatch();
const auth = useSelector(state => state.auth);


  useEffect(() =>{
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
      }

    if(auth.authenticate){
      dispatch(getInitialData());
    }
  },[auth.authenticate]); 


// we are adding auth.authenticate in array bcuz app.js 
// will render only once and at that time auth.authenticate will be false
// so we are not calling getinitialdata.

// auth.authenticate will become true when user will logged in and we home component is rendered now


  return (
    <div className="App">
      
        <Switch>
          <PrivateRoute path="/" exact component={Home}/>
          <PrivateRoute path="/page" exact component={NewPage}/>
          <PrivateRoute path="/products"  component={Products}/>
          <PrivateRoute path="/orders"  component={Orders}/>
          <PrivateRoute path="/category"  component={Category}/>

          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      

    </div>
  );
}

export default App;
