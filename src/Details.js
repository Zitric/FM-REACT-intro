import React from "react";
import pet from "@frontendmasters/pet";

// Function component
// const Details = (props) => (
//   // to see the data from the API
//   <pre>
//     <code>{JSON.stringify(props, null, 4)}</code>
//   </pre>
// );

// Class component
class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

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

  render() {}
}

export default Details;
