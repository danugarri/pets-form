import { useState } from 'react';

export const useForm = () => {
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
  return [petData, changePetData];
};
