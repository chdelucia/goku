//import styles from './page.module.css';
// <div className={styles['container']}>

'use client';

import Image from 'next/image';
import UseFetchCharacterDetails from '../hooks/useFetchCharacterDetails';
import Link from 'next/link';


export default function CharacterDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const { character, loading, error } = UseFetchCharacterDetails(id);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  if (!character) {
    return <div className="flex justify-center items-center h-screen">No se encontró el personaje.</div>;
  }

  return (
    <div className="mx-auto px-4 py-8">
      <Link
          href="/goku"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded mb-4 inline-block"
        >
        Volver
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-center">{character.name}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Character Info */}
        <div className="flex-1">
          <Image src={character.image} alt={character.name} width={400} height={400} />
          <p className="mt-4 text-lg">{character.description}</p>
          <div className="mt-4 text-gray-600">
            <p><strong>Raza:</strong> {character.race}</p>
            <p><strong>Afiliación:</strong> {character.affiliation}</p>
            <p><strong>Ki:</strong> {character.ki}</p>
            <p><strong>Max Ki:</strong> {character.maxKi}</p>
          </div>
        </div>

        {/* Origin Planet */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Planeta de Origen</h2>
          <Image
            src={character.originPlanet.image}
            alt={character.originPlanet.name}
            width={400}
            height={200}
          />
          <p className="mt-2">{character.originPlanet.description}</p>
          <p className="mt-2 text-gray-600">
            <strong>Destruido:</strong> {character.originPlanet.isDestroyed ? 'Sí' : 'No'}
          </p>
        </div>
      </div>

      {/* Transformations */}
      {character.transformations.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Transformaciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {character.transformations.map((transformation) => (
              <div key={transformation.id} className="bg-white rounded-lg shadow-md p-4">
                <Image
                  src={transformation.image}
                  alt={transformation.name}
                  width={250}
                  height={150}
                />
                <h3 className="text-lg font-bold mt-2">{transformation.name}</h3>
                <p className="text-sm text-gray-600">Ki: {transformation.ki}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
