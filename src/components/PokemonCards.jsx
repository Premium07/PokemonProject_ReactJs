const PokemonCards = ({ pokemon }) => {
  return (
    <div className="w-80 shadow-md rounded-md p-2 border hover:border-2 hover:scale-105 transition-all duration-300 cursor-pointer">
      <figure className="flex justify-center items-center">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="size-20 object-contain"
        />
      </figure>
      <h2 className="text-center mt-6 font-semibold text-lg">{pokemon.name}</h2>
      <div className="bg-green-500 w-fit rounded-full px-4 mx-auto mt-2 text-white py-1">
        <p>{pokemon.types.map((type) => type.type.name).join(", ")}</p>
      </div>
      <div className="w-full mt-5 text-center">
        <span className="text-sm mx-2">Height:{pokemon.height}</span>
        <span className="text-sm mx-2">Weight:{pokemon.weight}</span>
        <span className="text-sm mx-2">Speed:{pokemon.stats[5].base_stat}</span>
      </div>
      <div className="w-full mt-3 text-center pb-2 flex items-center justify-center">
        <div>
          <p className="text-sm">{pokemon.base_experience}</p>
          <span className="text-sm mx-2">Experience:</span>
        </div>
        <div>
          <p className="text-sm">{pokemon.stats[1].base_stat}</p>
          <span className="text-sm mx-2">Attack:</span>
        </div>
        <div>
          <p className="text-sm">
            {pokemon.abilities
              .map((ability) => ability.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span className="text-sm mx-2">Abilities:</span>
        </div>
      </div>
    </div>
  );
};

export default PokemonCards;
