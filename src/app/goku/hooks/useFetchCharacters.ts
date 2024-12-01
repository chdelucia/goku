import { useState, useEffect } from 'react';
import { Character, FilterState } from '../types';
import fetchWithQueryParams from '../interceptors/httpService';

export interface UseFetchCharacters {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

export function UseFetchCharacters(filters: FilterState): UseFetchCharacters {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams();
      if (filters.name) queryParams.append('name', filters.name);
      if (filters.gender) queryParams.append('gender', filters.gender);
      if (filters.race) queryParams.append('race', filters.race);
      if (filters.affiliation) queryParams.append('affiliation', filters.affiliation);

      const url = `https://dragonball-api.com/api/characters?${queryParams.toString()}`;

      try {
        const response = await fetchWithQueryParams(url);
       
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data.items)) {
          setCharacters(data.items);
        } else if (Array.isArray(data)) {
          setCharacters(data);
        } else {
          throw new Error('Unexpected data structure');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch characters. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [filters]);

  return { characters, loading, error };
}

export default UseFetchCharacters;
