'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
}

export default function Home(): JSX.Element {
  const [isClient, setIsClient] = useState(false);  // Estado para verificar que estamos en el cliente
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsClient(true);  // Cuando el componente se monta en el cliente
  }, []);

  useEffect(() => {
    if (!isClient) return; // Evitar ejecutar el fetch en el servidor

    fetch('https://dragonball-api.com/api/characters')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.items);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [isClient]); // Solo ejecutar después de que se ha montado el componente en el cliente

  if (loading) return <div className="flex justify-center items-center h-screen">Cargando...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Personajes de Dragon Ball
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <div key={character.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={character.image}
                alt={character.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{character.race}</p>
              <p className="text-sm text-gray-500 mb-2">{character.affiliation}</p>
              <p className="text-sm mb-4">{character.description.substring(0, 100)}...</p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Ki: {character.ki}</span>
                <span>Max Ki: {character.maxKi}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

