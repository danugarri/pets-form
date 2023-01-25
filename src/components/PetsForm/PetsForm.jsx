import React, { useState } from 'react';
import { ExportToExcel } from '../ExportToExcel/ExportToExcel';

export const PetsForm = () => {
  const [petData, setPetData] = useState({
    petName: '',
    age: null,
    breed: '',
    color: '',
    address: '',
    ownerName: '',
    tel: null,
  });
  const submitPetsData = (e) => {
    e.preventDefault();
  };

  const clearSearch = () => {
    //   This part can be optional
  };
  return (
    <React.Fragment>
      <form onSubmit={submitPetsData}>
        <label htmlFor='petName'>Nombre Mascota</label>
        <input
          type='text'
          name='petName'
          onChange={(e) => {
            // console.log(e.target.value);
          }}
          value={petData.petName}
          autoFocus
        />
        <br />
        <label htmlFor='age'>Edad</label>
        <input
          type='number'
          name='age'
          onChange={(e) => {
            console.log(e.target.value);
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
          }}
          value={petData.tel}
        />
        <br />

        <br />
        <br />
        <section className='buttons-section'>
          <input
            type='submit'
            value='Descargar Excel'
            onClick={submitPetsData}
            className='buttons'
          />
        </section>
      </form>

      <ExportToExcel bodyData={petData} />
    </React.Fragment>
  );
};
