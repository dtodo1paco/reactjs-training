import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './styles.css';

import { loadUser } from '../../util/github';
import Loading from '../Loading';
import Repos from '../Repos';

class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: void 0,
    };
    this.loadData = this.loadData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const currentUsername = this.props.match.params.username;
    const nextUsername = nextProps.match.params.username;
    if (currentUsername !== nextUsername) {
      this.loadData(nextUsername);
    }
  }

  async loadData (username)  {
    console.log("fetching user: " + username);
    try {
      const data = await loadUser(username)
      this.setState({
        user: data
      });
    } catch (e) {
      this.setState({
        user: null
      });
    }
  }

  componentDidMount() {
    this.loadData(this.props.match.params.username);
  }

  renderRoute(tip) {
    return (
      <Route
        key={tip.url}
        path={tip.url}
        render={(props) => tip.component}
      />
    )
  };


  renderTip(stat) {
    return (
      <li key={stat.name} className="user-info__stat">
        <Link to={stat.url}>
          <p className="user-info__stat-value">{stat.value}</p>
          <p className="user-info__stat-name">{stat.name}</p>
        </Link>
      </li>
    );
  }

  userTips = (user) => ([
    {
      name: 'Public Repos',
      value: user.public_repos,
      url: `${this.props.match.url}/repos`,
      component: <Repos {...this.props} />
    },
    {
      name: 'Followers',
      value: user.followers,
      url: `${this.props.match.url}/followers`,
      component: <div>component Followers </div>,
    },
    {
      name: 'Following',
      value: user.following,
      url: `${this.props.match.url}/following`,
      component: <div>component Following </div>
    }
  ]);


  render() {

    const { user } = this.state;

    if (!user) {
      return (<Loading message={`fetching user ${this.props.match.params.username}`} />);
    }

    const tips = this.userTips(user)

    return (
      <div className="user-page">
        <div className="user-info">
          <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`} />
          <Link className="user-info__text" to={`/user/${user.login}`}>
            <h2 className="user-info__title">{user.login} ({user.name})</h2>
          </Link>
          <p className="user-info__bio">{user.bio}</p>
          <ul className="user-info__stats">
            {tips.map(this.renderTip)}
          </ul>
          <div className="user-into__tips">
            <Switch>
              {tips.map(this.renderRoute)}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
};

export default UserProfile;