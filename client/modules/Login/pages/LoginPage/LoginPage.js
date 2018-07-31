import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './LoginPage.css';

// Import Components


// Import Actions
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
// import { getShowAddPost } from '../../../App/AppReducer';
// import { getPosts } from '../../LoginReducer';

class LoginPage extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="login" /></h2>
          <input placeholder={'Username'} className={styles['form-field']} ref="name" />
          <input placeholder={'Password'} className={styles['form-field-password']} ref="title" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addPost}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
// LoginPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps() {
  return {
  };
}

LoginPage.propTypes = {

};

LoginPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(LoginPage);
