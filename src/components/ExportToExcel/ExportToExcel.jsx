import DownloadIcon from '@mui/icons-material/Download';
import { useEffect, useState } from 'react';
import { initialState } from '../PetsForm/const';
import './ExportToExcel.css';

export const ExportToExcel = ({ bodyData, submitPetsData }) => {
  const [style, setStyle] = useState();

  useEffect(() => {
    const handleIconStyle = () => {
      bodyData !== initialState ? setStyle('downloadIcon enabled-icon') : setStyle('disabled-icon');
    };
    handleIconStyle();
  }, [bodyData]);

  return (
    <span>
      <DownloadIcon onClick={submitPetsData} className={style} style={{ fontSize: '100px' }} />
    </span>
  );
};
