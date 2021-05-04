import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "./App.css";
import Header from "./components/Header/Header";
import SignInSignUp from "./pages/SignIn_SignUp/SignInSignUp";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils";
import { connect } from "react-redux";
import setCurrentUser from "./Redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null; //We use this to keep track of open authStatus as we will need to manually close it when component unmounts to avoid memory leaks.

  componentDidMount() {
    const { setCurrentUser } = this.props;
    //Here we update the currentUser who signedIn/signedOut
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }

      //Firebase method to track changes when auth state changes it runs
      // this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    //Component is unmounted and we no longer need auth status so we clean it up here.
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          {/* <Route path="/shop/hats" exact component={ShopPage}></Route> */}
          <Route path="/shop" exact component={ShopPage}></Route>
          <Route path="/signin" exact component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
