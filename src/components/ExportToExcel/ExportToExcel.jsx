import DownloadIcon from '@mui/icons-material/Download';
import { postPets } from '../../services/postPets';
import './ExportToExcel.css';

export const ExportToExcel = ({ bodyData, onClick }) => {
  const downloadFile = () => {
    if (bodyData.length > 0) {
      postPets(bodyData).then((response) => {
        window.open(response.data, '_self');
      });
    }
    onClick();
  };

  return (
    <span onClick={downloadFile}>
      <DownloadIcon className='downloadIcon' style={{ fontSize: '100px' }} />
    </span>
  );
};
