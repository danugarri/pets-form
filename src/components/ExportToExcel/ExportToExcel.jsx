import DownloadIcon from '@mui/icons-material/Download';
import { postPets } from '../../services/postPets';

export const ExportToExcel = ({ bodyData }) => {
  const downloadFile = () => {
    if (bodyData.length > 0) {
      postPets(bodyData).then((response) => {
        window.open(response.data, '_self');
      });
    }
  };

  return (
    <span onClick={downloadFile}>
      <DownloadIcon fontSize='large' className='downloadIcon' />
    </span>
  );
};
