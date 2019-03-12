import React, {PureComponent} from 'react';
import MessageList from '../MessageList';

class WrapperList extends PureComponent {
  render() {
    const { list } = this.props;
    const loading = list && list.length === 0;
    const empty = !list;

    return (
      <div>
      { loading && <div>Loading ...</div> }
      { empty && <div>No results </div> }
      {
        !empty && !loading && <MessageList messages={this.props.list} />
      }
      </div>
    )
  }
}
export default WrapperList;