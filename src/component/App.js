import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/posts';
import { Home, Navbar, page404 } from './';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const login = () => <div>Login</div>;
const Signup = () => <div>Signup</div>;
/* eslint-disable */
// eslint-disable-next-line
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            ></Route>
            <Route path="/login" component={login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route component={page404}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
