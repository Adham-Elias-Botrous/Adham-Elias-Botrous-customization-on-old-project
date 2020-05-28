import React, { Fragment, Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import UserHome from './UserHome';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: '',
      isLoading: true,
      user: false,
    };
  }

  render() {
    if (!localStorage.getItem('token')) {
      return (
        <Fragment>
          <div className="row">
            <div className="column ">
              <h4>Welcom In the Calculating's Quiz</h4>
              <h6 className="title">
                You can register, or you log in if you alreday have an account.
              </h6>
              <p>test</p>

              <Link to="/login">
                <button className="button-primary button-outline">
                  Log In
                </button>
              </Link>
              <Link to="/register">
                <button className="button-primary button-outline">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <hr />
        </Fragment>
      );
    }
    return <UserHome />;
  }
}
