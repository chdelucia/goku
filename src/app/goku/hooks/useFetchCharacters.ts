import { useState, useEffect } from 'react';
import { Character, FilterState } from '../types';
import fetchWithQueryParams from '../interceptors/httpService';
import { useFilters } from '../contexts/FiltersContext';  // Asegúrate de usar el contexto de filtros

export interface UseFetchCharacters {
  characters: Character[];
  loading: boolean;
  softLoading: boolean;
  error: string | null;
}

export function UseFetchCharacters(filters: FilterState): UseFetchCharacters {
  const { filters: contextFilters, dispatch } = useFilters();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [softLoading, setSoftLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFiltersLoaded, setIsFiltersLoaded] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const filtersFromUrl: FilterState = {
      name: searchParams.get('name') || '',
      gender: searchParams.get('gender') || '',
      race: searchParams.get('race') || '',
      affiliation: searchParams.get('affiliation') || '',
    };

    if (Object.values(filtersFromUrl).some((value) => value !== '')) {
      Object.keys(filtersFromUrl).forEach((key) => {
        const filterKey = key as keyof FilterState;
        dispatch({ type: 'SET_FILTER', payload: { name: filterKey, value: filtersFromUrl[filterKey] } });
      });
    }

    setIsFiltersLoaded(true);

  }, [dispatch]);

  useEffect(() => {
    if (!isFiltersLoaded) {
      return;
    }

    const fetchCharacters = async () => {
      setLoading(true);
      setSoftLoading(true);
      setError(null);

      const queryParams = new URLSearchParams();
      if (contextFilters.name) queryParams.append('name', contextFilters.name);
      if (contextFilters.gender) queryParams.append('gender', contextFilters.gender);
      if (contextFilters.race) queryParams.append('race', contextFilters.race);
      if (contextFilters.affiliation) queryParams.append('affiliation', contextFilters.affiliation);

      const url = `https://dragonball-api.com/api/characters?${queryParams.toString()}`;

      try {
        const response = await fetchWithQueryParams(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        //todo type the response
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
        setTimeout(() => setSoftLoading(false), 300);
      }
    };

    fetchCharacters();
  }, [contextFilters, isFiltersLoaded]);

  return { characters, loading, softLoading, error };
}

export default UseFetchCharacters;
