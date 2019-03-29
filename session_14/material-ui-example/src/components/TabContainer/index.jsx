import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContainer;
