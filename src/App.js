import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Switch,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {auth,CreateUserProfile} from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
      console.log("User LoggedIn")    
      const userRef=await CreateUserProfile(userAuth);
      await console.log(" User profile "+userRef);
      userRef.onSnapshot(snapshot=>{
        console.log(snapshot.data());
        this.props.setCurrentUser({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }
        })
        console.log(this.props.currentUser);
        
      })
      
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
      {console.log("in APP CurrentUser "+this.props.currentUser)}
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignOut}/>
      </Switch>
    </div>
  );
  }
}

const mapDispatchToProps= dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
