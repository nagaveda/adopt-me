import React, { Component } from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = {
    loading: true,
    showModal: false,
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     loading: true
  //   }
  // }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    if (this.state.loading) {
      return (
        <div className="details">
          <h3>Loading...!</h3>
        </div>
      );
    }
    //To Test the ErrorBoundary Component!
    // throw new Error("dsacsd");
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city} - ${state}`}</h2>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}</h1>
                <div className="buttons">
                  <button onClick={this.adopt}> Yes </button>
                  <button onClick={this.toggleModal}> No </button>
                </div>
              </div>
            </Modal>
          ) : null}
          <ThemeContext.Consumer>
            {([theme]) => {
              return (
                <button
                  onClick={this.toggleModal}
                  style={{ backgroundColor: theme }}
                >
                  Adopt {name}
                </button>
              );
            }}
          </ThemeContext.Consumer>
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
