import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { connect } from "react-redux";

function App({ isAuth }) {
  return (
    <Fragment>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
