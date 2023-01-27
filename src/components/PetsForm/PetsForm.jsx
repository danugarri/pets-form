import React, { useState } from 'react';
import './PetsForm.css';
import { ExportToExcel } from '../ExportToExcel/ExportToExcel';
import image from '../../utils/formulario-modificado.png';
import { postPets } from '../../services/postPets';

export const PetsForm = () => {
  const [petData, setPetData] = useState({
    petName: '',
    age: undefined,
    breed: '',
    color: '',
    address: '',
    ownerName: '',
    tel: undefined,
  });
  const changePetData = (e) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };
  const submitPetsData = (e) => {
    e.preventDefault();
    downloadFile();
  };
  const downloadFile = () => {
    postPets(petData).then((response) => {
      window.open(response.data, '_self');
    });
  };
  const clearSearch = () => {
    //   This part can be optional
  };
  return (
    <React.Fragment>
      <img src={image} alt='form-background' className='image' />

      <form onSubmit={submitPetsData} className='form'>
        <label htmlFor='petName'>Nombre Mascota</label>
        <input
          type='text'
          name='petName'
          onChange={changePetData}
          // value={petData.petName}
          autoFocus
        />
        <br />
        <label htmlFor='age'>Edad</label>
        <input type='number' name='age' onChange={changePetData} value={petData.age} />
        <br />
        <label htmlFor='breed'>Raza</label>
        <input type='text' name='breed' onChange={changePetData} value={petData.breed} />
        <br />
        <label htmlFor='color'>Color</label>
        <input type='text' name='color' onChange={changePetData} value={petData.color} />
        <br />
        <label htmlFor='address'>Dirección</label>
        <input type='text' name='address' onChange={changePetData} value={petData.address} />
        <br />
        <label htmlFor='ownerName'>Nombre Dueño</label>
        <input type='text' name='ownerName' onChange={changePetData} value={petData.ownerName} />
        <br />
        <label htmlFor='tel'>Teléfono</label>
        <input type='text' name='tel' onChange={changePetData} value={petData.tel} />

        <ExportToExcel bodyData={petData} submitPetsData={submitPetsData} />
      </form>
    </React.Fragment>
  );
};
