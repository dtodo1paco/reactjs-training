import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  const { items } = props;
  if (items && items.length === 0) {
    return <span className="empty-message">No items in list</span>;
  }

  return (
    <ul className="list-items">
      {items.map(item =>
        <li key={item} className="item">{item}</li>)}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array,
};

List.defaultProps = {
  items: [],
};

export default List;