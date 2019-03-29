import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TabContainer from '../TabContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  colorPrimary: {
    color: "red",
  }
});

class TabsDemo extends React.Component {
  state = {
    activeTab: 1,
  };

  handleChange = (event, activeTab) => {
    this.setState( (state) => ({activeTab}));
  };

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.wrapped}>
          <Tabs value={activeTab} onChange={this.handleChange}>
            {
            this.props.tabs.map( tab => (
              <Tab
                key={tab.id}
                label={tab.label}
                value={tab.id}
                icon={tab.icon}
              />
            ))
            }
          </Tabs>
        </AppBar>
            {
              this.props.tabs.map( tab => (
                activeTab === tab.id
                  ? <TabContainer className={classes.wrapper} key={tab.id}>{tab.component}</TabContainer>
                  : null
              ))
            }
      </div>
    );
  }
}

TabsDemo.propTypes = {
  classes: PropTypes.object.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      component: PropTypes.object.isRequired,
    }).isRequired)
    .isRequired,
};

export default withStyles(styles)(TabsDemo);