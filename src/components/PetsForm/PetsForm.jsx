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
        <label htmlFor='petName' className='employee-labels'>
          Nombre Mascota
        </label>
        <input
          type='number'
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

        <br />
        <br />
        <section className='buttons-section'>
          <input type='submit' value='Calcular' onClick={submitPetsData} className='buttons' />
          <input type='button' value='Limpiar' onClick={clearSearch} className='buttons' />
        </section>
      </form>

      <ExportToExcel bodyData={petData} />
    </React.Fragment>
  );
};
