import { Component } from "react";
import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }))
  }

  render() {
    const {showModal} = this.state
    return (
      <div>
        <button type='button' onClick={this.toggleModal}>Open Modal</button>

        {showModal && <Modal onModalClose={this.toggleModal}>
          <button onClick={this.toggleModal} type="button">X</button>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ut.</p>
        </Modal>}
        
      </div>
    );
  }
};
