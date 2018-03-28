import React, { Component } from 'react';
import { connect } from 'react-redux';

import { parse } from 'qs';

import List from '../components/List.jsx';
import { fetchRepos } from '../actions';

class Home extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     query: ''
  //   };
  // }

  componentWillMount() {
    if(this.props.location.search !== '') {
      const query = parse(this.props.location.search.substr(1))
      this.props.history.replace(`?search=${query.search}`);
      this.props.fetchRepos(query.search);
    }
  }

  onInputChange = (event) => {
    if(event.target.value !== '') {
      this.props.history.replace(`?search=${event.target.value}`);
      this.props.fetchRepos(event.target.value);
    }
  }

  render () {
    return (
      <div>
        <div>
          <input
            placeholder="Enter a Github Repo"
            onChange={this.onInputChange}
            type='text'
          />
        </div>
        <div>
          <h1>List of repos</h1>
            <List repos={this.props.repos} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ repos }) => ({
  repos
});

export default connect(mapStateToProps, { fetchRepos })(Home)