import React from 'react';
import Modal from '../Modal';

import './styles.css';

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  handleShow = () => {
    this.setState({showModal: true});
  }

  handleHide = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <React.Fragment>
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {
          this.state.showModal ? (
            <Modal modalRootId="modal-root">
              <div className="modal">
                <button onClick={this.handleHide}>X</button>
                <div>
                  With a portal, we can render content into a different
                  part of the DOM, as if it were any other React child.
                  This is being rendered inside the #modal-container div.
                </div>
              </div>
            </Modal>
          )
            : null
        }
      </React.Fragment>
    );
  }
}

export default Portal;