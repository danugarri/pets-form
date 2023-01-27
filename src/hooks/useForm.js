import { useState } from 'react';
import { initialState } from '../components/PetsForm/const';

export const useForm = () => {
  const [petData, setPetData] = useState(initialState);
  const changePetData = (e, option) => {
    option === 'clear'
      ? setPetData(initialState)
      : setPetData({ ...petData, [e.target.name]: e.target.value });
  };
  return [petData, changePetData];
};
