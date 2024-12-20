import React, { useCallback, useEffect, useMemo } from 'react';
import { Button, InputText, RadioButton, Select } from '@goku/ui';
import { useFilters } from '../../contexts/FiltersContext';
import { FilterState } from '../../types';
import { affiliationOptions, genderOptions, raceOptions } from './constants';

export function Filters(): JSX.Element {
  const { filters, dispatch } = useFilters();

  const updateUrlWithFilters = (filters: FilterState) => {
    const query = new URLSearchParams();

    Object.keys(filters).forEach((key) => {
      const filterKey = key as keyof FilterState;
      if (filters[filterKey]) {
        query.set(filterKey, filters[filterKey]);
      }
    });

    const newUrl = `/goku?${query.toString()}`;
    window.history.replaceState({}, '', newUrl);
  };

  useEffect(() => {
    updateUrlWithFilters(filters)
  });


  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      dispatch({ type: 'SET_FILTER', payload: { name: name as keyof FilterState, value } });

      updateUrlWithFilters({ ...filters, [name]: value });
    },
    [dispatch, filters]
  );

  const handleSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target;
      dispatch({ type: 'SET_FILTER', payload: { name: name as keyof FilterState, value } });

      updateUrlWithFilters({ ...filters, [name]: value });
    },
    [dispatch, filters]
  );

  const handleResetFilters = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch({ type: 'RESET_FILTERS' });

      updateUrlWithFilters({ name: '', gender: '', race: '', affiliation: '' });
    },
    [dispatch]
  );

  const memoizedGenderOptions = useMemo(() => genderOptions, []);
  const memoizedRaceOptions = useMemo(() => raceOptions, []);
  const memoizedAffiliationOptions = useMemo(() => affiliationOptions, []);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mb-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Filtros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <InputText
          id="name"
          name="name"
          label="Nombre"
          value={filters.name}
          onChange={handleInputChange}
          placeholder="Buscar por nombre"
        />
        <RadioButton
          name="gender"
          label="Género"
          options={memoizedGenderOptions}
          value={filters.gender}
          onChange={handleInputChange}
        />
        <Select
          id="race"
          name="race"
          label="Raza"
          options={memoizedRaceOptions}
          value={filters.race}
          onChange={handleSelectChange}
        />
        <Select
          id="affiliation"
          name="affiliation"
          label="Afiliación"
          options={memoizedAffiliationOptions}
          value={filters.affiliation}
          onChange={handleSelectChange}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <Button onClick={handleResetFilters} className="bg-red-500 hover:bg-red-600">
          Borrar Filtros
        </Button>
      </div>
    </form>
  );
}

export default Filters;
