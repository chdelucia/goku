'use client';

import { useState, useEffect } from 'react';
import { Filters } from './components/filters/filters';
import CharacterCard from './components/character/characterCard';
import { UseFetchCharacters } from './hooks/useFetchCharacters';
import { useFilters } from './contexts/FiltersContext';
import { Suspense } from 'react';

export default function Home(): JSX.Element {
  const { filters } = useFilters();
  const { characters, softLoading, error } = UseFetchCharacters(filters);

  const [displayedCharacters, setDisplayedCharacters] = useState(characters);
  const [isAnimating, setIsAnimating] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); 

  useEffect(() => {
    if (softLoading) return;

    if (characters.length > 0) {
      if (initialLoad) {
        setInitialLoad(false);
      }
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setDisplayedCharacters(characters);
        setIsAnimating(false);
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setDisplayedCharacters([]);
      setIsAnimating(false);
    }
  }, [characters, softLoading, initialLoad]);

  const renderLoading = softLoading && (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="text-white text-3xl">Cargando...</div>
    </div>
  );

  const renderError = error && (
    <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  );

  const renderCharacters =
    !softLoading && !isAnimating && displayedCharacters.length === 0 && !initialLoad ? (
      <p className="text-center text-xl mt-8">
        No se encontraron personajes con los filtros aplicados.
      </p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedCharacters.map((character, index) => (
          <div
            key={character.id}
            className={`character-card ${isAnimating ? 'exit' : 'enter'}`}
          >
            <CharacterCard character={character} index={index} />
          </div>
        ))}
      </div>
    );

  return (
    <div className="mx-auto px-4 py-8">
      <Suspense fallback={renderLoading}>
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Personajes de Dragon Ball
        </h1>

        <Filters />
      </Suspense>

      {renderError || renderCharacters}
      {renderLoading}
    </div>
  );
}
