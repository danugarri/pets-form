import React from 'react';
import './PetsForm.css';
import { ExportToExcel } from '../ExportToExcel/ExportToExcel';
import image from '../../utils/formulario-modificado.png';
import { postPets } from '../../services/postPets';
import { useForm } from '../../hooks/useForm';
import { initialState } from './const.js';

export const PetsForm = () => {
  const [petData, changePetData] = useForm();
  const { petName, age, breed, color, address, ownerName, tel } = petData;
  const submitPetsData = (e) => {
    e.preventDefault();
    downloadFile();
    clearSearch();
  };
  const downloadFile = () => {
    petData !== initialState &&
      postPets(petData).then((response) => {
        window.open(response.data, '_self');
      });
  };
  const clearSearch = () => {
    changePetData(null, 'clear');
  };

  return (
    <React.Fragment>
      <img src={image} alt='form-background' className='image' />

      <form onSubmit={submitPetsData} className='form'>
        <label htmlFor='petName'>Nombre Mascota</label>
        <input type='text' name='petName' onChange={changePetData} value={petName} autoFocus />
        <br />
        <label htmlFor='age'>Edad</label>
        <input type='number' name='age' onChange={changePetData} value={age} />
        <br />
        <label htmlFor='breed'>Raza</label>
        <input type='text' name='breed' onChange={changePetData} value={breed} />
        <br />
        <label htmlFor='color'>Color</label>
        <input type='text' name='color' onChange={changePetData} value={color} />
        <br />
        <label htmlFor='address'>Dirección</label>
        <input type='text' name='address' onChange={changePetData} value={address} />
        <br />
        <label htmlFor='ownerName'>Nombre Dueño</label>
        <input type='text' name='ownerName' onChange={changePetData} value={ownerName} />
        <br />
        <label htmlFor='tel'>Teléfono</label>
        <input type='text' name='tel' onChange={changePetData} value={tel} />

        <ExportToExcel bodyData={petData} submitPetsData={submitPetsData} />
      </form>
    </React.Fragment>
  );
};
