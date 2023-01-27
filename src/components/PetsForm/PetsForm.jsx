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
          onChange={(e) => {
            // console.log(e.target.value);
            setPetData({ ...petData, petName: e.target.value });
          }}
          // value={petData.petName}
          autoFocus
        />
        <br />
        <label htmlFor='age'>Edad</label>
        <input
          type='number'
          name='age'
          onChange={(e) => {
            console.log(e.target.value);
            setPetData({ ...petData, age: e.target.value });
          }}
          value={petData.age}
        />
        <br />
        <label htmlFor='breed'>Raza</label>
        <input
          type='text'
          name='breed'
          onChange={(e) => {
            // console.log(e.target.value);
            setPetData({ ...petData, breed: e.target.value });
          }}
          value={petData.breed}
        />
        <br />
        <label htmlFor='color'>Color</label>
        <input
          type='text'
          name='color'
          onChange={(e) => {
            // console.log(e.target.value);
            setPetData({ ...petData, color: e.target.value });
          }}
          value={petData.color}
        />
        <br />
        <label htmlFor='address'>Dirección</label>
        <input
          type='text'
          name='address'
          onChange={(e) => {
            // console.log(e.target.value);
            setPetData({ ...petData, address: e.target.value });
          }}
          value={petData.address}
        />
        <br />
        <label htmlFor='ownerName'>Nombre Dueño</label>
        <input
          type='text'
          name='ownerName'
          onChange={(e) => {
            // console.log(e.target.value);
            setPetData({ ...petData, ownerName: e.target.value });
          }}
          value={petData.ownerName}
        />
        <br />
        <label htmlFor='tel'>Teléfono</label>
        <input
          type='text'
          name='tel'
          onChange={(e) => {
            // console.log(e.target.value);
            setPetData({ ...petData, tel: e.target.value });
          }}
          value={petData.tel}
        />
        <ExportToExcel bodyData={petData} submitPetsData={submitPetsData} />
      </form>
    </React.Fragment>
  );
};
