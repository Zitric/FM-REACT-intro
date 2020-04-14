import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  // This method must be static
  // It's gonna take in a set of props and give you back
  // a new set of states
  static getDerivedStateFromProps({ media }) {
    const photos =
      media.length === 0
        ? ["http://placeorgi.com/600/600"]
        : media.map(({ large }) => large);

    return { photos };
  }

  // Whenever you are passing functions down into a children or
  // whenever you are doing event listeners =>
  // Use an arrow function.
  // Cause that will guarantee what this is to be is correct
  handleIndexClick = (event) =>
    this.setState({
      // active: Number(event.target.dataset.index),
      active: +event.target.dataset.index,
    });

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
