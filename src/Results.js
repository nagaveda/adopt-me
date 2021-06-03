import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found!</h2>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              key={pet.id}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
            // another way (Lazy, not recommended)
            // <Pet
            // {...pet}
            // key = {pet.id}
            // />
          );
        })
      )}
    </div>
  );
};

export default Results;
