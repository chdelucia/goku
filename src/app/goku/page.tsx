'use client'

import { Filters } from './components/filters/filters';
import CharacterCard from './components/character/characterCard';
import { UseFetchCharacters } from './hooks/useFetchCharacters';
import { useFilters } from './contexts/FiltersContext';
import { Suspense } from 'react';

export default function Home(): JSX.Element {
  const { filters } = useFilters();

  const { characters, loading, error } = UseFetchCharacters(filters);

  const renderLoading = loading && (
    <div className="flex justify-center items-center h-screen">Cargando...</div>
  );

  const renderError = error && (
    <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  );

  const renderCharacters = characters.length === 0 ? (
    <p className="text-center text-xl mt-8">No se encontraron personajes con los filtros aplicados.</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
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

      {renderLoading}
      {renderError}
      {renderCharacters}
    </div>
  );
}
