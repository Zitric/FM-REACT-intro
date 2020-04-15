import React from "react";
import pet from "@frontendmasters/pet";

import Carousel from "../components/Carousel";
import ErrorBoundary from "../errors/ErrorBoundary";

// Function component
// const Details = (props) => (
//   // to see the data from the API
//   <pre>
//     <code>{JSON.stringify(props, null, 4)}</code>
//   </pre>
// );

// Class component
class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) =>
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      })
    );
  }

  render() {
    const {
      loading,
      animal,
      breed,
      location,
      description,
      name,
      media,
    } = this.state;
    return loading ? (
      <h1>Loading ...</h1>
    ) : (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Addopt {name}</button>
          <p>{description}</p>
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
