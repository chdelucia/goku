import { useState, useEffect } from 'react';
import { DetailedCharacter } from '../types';

 
export interface UseFetchCharacterDetails {
  character: DetailedCharacter | null;
  loading: boolean;
  error: string | null;
}

export function UseFetchCharacterDetails(id: string): UseFetchCharacterDetails {
  const [character, setCharacter] = useState<DetailedCharacter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch character details.');
        }
        const data: DetailedCharacter = await response.json();
        setCharacter(data);
      } catch (err) {
        setError('Error fetching character details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  return { character, loading, error };
}

export default UseFetchCharacterDetails;
