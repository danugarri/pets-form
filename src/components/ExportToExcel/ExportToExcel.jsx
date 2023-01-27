import DownloadIcon from '@mui/icons-material/Download';
import './ExportToExcel.css';

export const ExportToExcel = ({ submitPetsData }) => {
  return (
    <span>
      <DownloadIcon
        onClick={submitPetsData}
        className='downloadIcon'
        style={{ fontSize: '100px' }}
      />
    </span>
  );
};
