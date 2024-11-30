import { Character } from '../../types';
import Image from 'next/image';
import styles from './characterCard.module.css';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({character} :CharacterCardProps) {
  return (
    <div key={character.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
      <p className="text-sm mb-4">{character.description.substring(0, 100)}...</p>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Ki: {character.ki}</span>
        <span>Max Ki: {character.maxKi}</span>
      </div>
    </div>
  </div>
  );
}

export default CharacterCard;
