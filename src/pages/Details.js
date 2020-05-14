import React, { lazy } from "react";
import { navigate } from "@reach/router";
import pet from "@frontendmasters/pet";

import Carousel from "/components/Carousel";
import ErrorBoundary from "/errors/ErrorBoundary";
import ThemeContext from "/context/ThemeContext";

const Modal = lazy(() => import("../modal/modal"));

// Function component
// const Details = (props) => (
//   // to see the data from the API
//   <pre>
//     <code>{JSON.stringify(props, null, 4)}</code>
//   </pre>
// );

// Class component
class Details extends React.Component {
  state = { isLoading: true, isShowModal: false };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) =>
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        isLoading: false,
        url: animal.url,
      })
    );
  }

  toggleModal = () => this.setState({ isShowModal: !this.state.isShowModal });

  adopt = () => navigate(this.state.url);

  render() {
    const {
      isLoading,
      animal,
      breed,
      location,
      description,
      name,
      media,
      isShowModal,
    } = this.state;

    return isLoading ? (
      <h2>Is loading ...</h2>
    ) : (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {isShowModal && (
            <Modal>
              <div>
                <h1>Would you like to adopt {name} </h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I am a monster</button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
