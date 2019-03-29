import React from 'react';

import { GITHUB_API_USERS } from '../../util/github';
import Loading from '../Loading';
import RepoCard from '../RepoCard';

class Repos extends React.Component {

  constructor() {
    super();
    this.state = {
      repos: void 0,
    };
  }


  componentDidMount() {
    this.loadData(this.props.match.params.username)
  }

  loadData = (username) => {
    console.log("fetching user: " + username);
    fetch(`${GITHUB_API_USERS}${username}/repos`)
      .then(response => response.json())
      .then(
        repos => {
        this.setState({
          repos: repos
        });
      }
    );
  }

  handleOrderById = () => {
    const repos = [...this.state.repos];
    repos.sort( (a,b) => a.id < b.id);
    this.setState({repos})
  }

  render(){
    const { repos } = this.state;
    if (!repos) return (<Loading message={`fetching repos for user ${this.props.match.params.username}`} />);
    return (
      <div className="repos">
        <button onClick={this.handleOrderById}>Order by Id</button>
        {repos.map( repo => <RepoCard key={repo.id} repo={repo} />)}
      </div>
    )
  }
}

export default Repos;