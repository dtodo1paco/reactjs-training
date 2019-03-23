import React from 'react';
import { Route, Link } from 'react-router-dom';

const topics = [
  { id: 0, name: 'sports', relatedTopics: [1, 2, 3] },
  { id: 1, name: 'football', relatedTopics: [0, 2] }, // ball sports
  { id: 2, name: 'tennis', relatedTopics: [0, 1, 3] }, // individuals
  { id: 3, name: 'chess', relatedTopics: [0, 2] },
]

const find = id => topics.find(item => item.id === parseInt(id, 10));

const TopicDetail = ({ match }) => {
  const topic = find(match.params.id);
  return (
    <div>
      <h3>{topic.name} Details</h3>
      <h4>INFO: This is the info about {topic.name} </h4>
      <h6>Related Topics</h6>
      <ul>
        {
          topic.relatedTopics.map(id => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
            </li>
          ))
        }
      </ul>
      <hr />
      <Route path={`${match.url}/:id`} component={TopicDetail} />
    </div>
  );
};

const TopicList = () => (
  <TopicDetail match={{ params: { id: 0 }, url: '/Topics' }} />
);

export default TopicList;
