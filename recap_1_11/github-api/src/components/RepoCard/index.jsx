import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import './styles.css';

const RepoCard = ({repo}) => (
  <Fragment>
    <div className="repo-card">
      <div className="repo-card-container">
        <div className="repo-name">
          {repo.name}
            <a href={repo.url} target="blank">
              <img src="https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_forward_link_share-512.png" />
            </a>
        </div>
        <div className="repo-info">
          <span className="repo-description">
            {repo.description}
          </span>
          <span className="repo-description">
            Last update: {repo.updated_at}
          </span>
        </div>
      </div>
    </div>
  </Fragment>
);
RepoCard.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }).isRequired
};

export default RepoCard;