import React from "react";

import Pet from "../components/Pet";

const Results = ({ pets }) => (
  <div className="search">
    {pets.length === 0 ? (
      <h1>No Pets found</h1>
    ) : (
      pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.type}
          breed={pet.breeds.primary}
          media={pet.photos}
          location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          id={pet.id}
        />
      ))
    )}
  </div>
);

export default Results;
