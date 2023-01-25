import { postData } from '../../services/postData';
import DownloadIcon from '@mui/icons-material/Download';
import './ExportToExcel.css';

export const ExportToExcel = ({ bodyData }) => {
  const downloadFile = () => {
    if (bodyData.length > 0) {
      postData(bodyData).then((response) => {
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
