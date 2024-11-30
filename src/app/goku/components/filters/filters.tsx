import { useFilters } from '../../contexts/FiltersContext'; // Ruta correcta del contexto
import { Button, InputText, RadioButton, Select } from '@goku/ui';
import { FilterState } from '../../types';


export function Filters(): JSX.Element {
  const { filters, dispatch } = useFilters();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ type: 'SET_FILTER', payload: { name: name as keyof FilterState, value } });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    dispatch({ type: 'SET_FILTER', payload: { name: name as keyof FilterState, value } });
  };

  const handleResetFilters = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: 'RESET_FILTERS' });
  };

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Unknown', label: 'Unknown' },
  ];

  const raceOptions = [
    { value: '', label: 'Todas las razas' },
    { value: 'Human', label: 'Human' },
    { value: 'Saiyan', label: 'Saiyan' },
    { value: 'Namekian', label: 'Namekian' },
    { value: 'Majin', label: 'Majin' },
    { value: 'Frieza Race', label: 'Frieza Race' },
    { value: 'Android', label: 'Android' },
    { value: 'Jiren Race', label: 'Jiren Race' },
    { value: 'God', label: 'God' },
    { value: 'Angel', label: 'Angel' },
    { value: 'Evil', label: 'Evil' },
    { value: 'Nucleico', label: 'Nucleico' },
    { value: 'Nucleico benigno', label: 'Nucleico benigno' },
    { value: 'Unknown', label: 'Unknown' },
  ];

  const affiliationOptions = [
    { value: '', label: 'Todas las afiliaciones' },
    { value: 'Z Fighter', label: 'Z Fighter' },
    { value: 'Red Ribbon Army', label: 'Red Ribbon Army' },
    { value: 'Namekian Warrior', label: 'Namekian Warrior' },
    { value: 'Freelancer', label: 'Freelancer' },
    { value: 'Army of Frieza', label: 'Army of Frieza' },
    { value: 'Pride Troopers', label: 'Pride Troopers' },
    { value: 'Assistant of Vermoud', label: 'Assistant of Vermoud' },
    { value: 'God', label: 'God' },
    { value: 'Assistant of Beerus', label: 'Assistant of Beerus' },
    { value: 'Villain', label: 'Villain' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <div className="mb-8 p-4 bg-gray-100 rounded-lg">
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
          options={genderOptions}
          value={filters.gender}
          onChange={handleInputChange}
        />
        <Select
          id="race"
          name="race"
          label="Raza"
          options={raceOptions}
          value={filters.race}
          onChange={handleSelectChange}
        />
        <Select
          id="affiliation"
          name="affiliation"
          label="Afiliación"
          options={affiliationOptions}
          value={filters.affiliation}
          onChange={handleSelectChange}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <Button onClick={handleResetFilters} className="bg-red-500 hover:bg-red-600">
          Borrar Filtros
        </Button>
      </div>
    </div>
  );
}

export default Filters;
