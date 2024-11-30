'use client'

import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { FilterState } from '../types';

type FiltersAction =
  | { type: 'SET_FILTER'; payload: { name: keyof FilterState; value: string } }
  | { type: 'RESET_FILTERS' };


const initialState: FilterState = {
  name: '',
  gender: '',
  race: '',
  affiliation: '',
};

function filtersReducer(state: FilterState, action: FiltersAction): FilterState {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'RESET_FILTERS':
      return initialState;
    default:
      throw new Error(`Unknown action type: ${action}`);
  }
}

interface FiltersContextType {
  filters: FilterState;
  dispatch: React.Dispatch<FiltersAction>;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filters, dispatch] = useReducer(filtersReducer, initialState);

  return (
    <FiltersContext.Provider value={{ filters, dispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = (): FiltersContextType => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};
