import { useMemo } from 'react';
import { Character } from '../../types';
import Image from 'next/image';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
 
  const truncatedDescription = character.description.length > 100
  ? `${character.description.substring(0, 100)}...`
  : character.description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={character.image}
          alt={character.name}
          width={250}
          height={100}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{character.race}</p>
        <p className="text-sm text-gray-500 mb-2">{character.affiliation}</p>
        <p className="text-sm mb-4">{truncatedDescription}</p>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Ki: {character.ki}</span>
          <span>Max Ki: {character.maxKi}</span>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
