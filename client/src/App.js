import React,{lazy,Suspense} from 'react';
import {GlobalStyle} from './global.styles';
import Header from './components/header/header.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { auth, CreateUserProfile} from './firebase/firebase.utils';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundaries/error-boundaries.component';

const HomePage=lazy(()=>import('./pages/homepage/homepage.component'));
const ShopPage=lazy(()=>import('./pages/shoppage/shoppage.component'));
const CheckoutPage=lazy(()=>import('./pages/checkout/checkout.component'));
const SignInAndSignOut=lazy(()=>import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await CreateUserProfile(userAuth);
        await console.log(" User profile " + userRef);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })

        })

      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignOut />} />
          </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
