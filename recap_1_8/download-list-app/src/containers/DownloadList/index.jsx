import React from 'react';
import './styles.css';

import DownloadElement from '../../components/DownloadElement';

const DownloadList = ({elements}) => {
  return (
    <ul>
    {
      elements.map(element =>
        <DownloadElement
          key={element.id}
          name={element.name}
          label={element.label}
        />
      )
    }
    </ul>
  )
}
export default DownloadList;