import { useState } from 'react';

export const useForm = () => {
  const initialState = {
    petName: '',
    age: undefined,
    breed: '',
    color: '',
    address: '',
    ownerName: '',
    tel: undefined,
  };
  const [petData, setPetData] = useState(initialState);
  const changePetData = (e, option) => {
    option === 'clear'
      ? setPetData(initialState)
      : setPetData({ ...petData, [e.target.name]: e.target.value });
  };
  return [petData, changePetData];
};
