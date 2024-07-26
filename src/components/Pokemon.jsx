import { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const api = "https://pokeapi.co/api/v2/pokemon?limit=24";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      //   console.log(data);

      const pokemonDetails = data.results.map(async (detail) => {
        const res = await fetch(detail.url);
        const data = await res.json();
        return data;
      });

      const allPokemons = await Promise.all(pokemonDetails);
      //   console.log(allPokemons);
      setPokemon(allPokemons);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  // search functionality:

  const searchPokemon = pokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex items-center justify-center w-full h-screen flex-col gap-3">
        <div className="border-2 border-black border-t-slate-400 rounded-full animate-spin size-10"></div>
        <h3 className="text-2xl">Loading...</h3>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center text-xl">
        {error.message}
      </div>
    );
  return (
    <section>
      <h1 className="text-center text-3xl mt-5 font-semibold">
        Pokemons Gallery
      </h1>
      <div className="w-1/4 mx-auto mt-4">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-b-2 outline-none border-b-slate-900"
        />
      </div>
      <div className="flex flex-wrap gap-6 w-11/12 mx-auto mt-10 p-5">
        {searchPokemon.map((pokemon) => {
          return <PokemonCards key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </section>
  );
};

export default Pokemon;
