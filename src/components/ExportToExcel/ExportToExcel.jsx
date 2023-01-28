import DownloadIcon from '@mui/icons-material/Download';
import './ExportToExcel.css';
import PropTypes from 'prop-types';
import { initialState } from '../PetsForm/const';

export const ExportToExcel = ({ bodyData, submitPetsData }) => {
  const style =
    // Avoiding problem when comparing by reference
    JSON.stringify(bodyData) !== JSON.stringify(initialState)
      ? 'downloadIcon enabled-icon'
      : 'disabled-icon';
  return (
    <span>
      <DownloadIcon onClick={submitPetsData} className={style} style={{ fontSize: '100px' }} />
    </span>
  );
};

ExportToExcel.prototype = {
  bodyData: PropTypes.objectOf({
    petName: PropTypes.string,
    age: PropTypes.string,
    breed: PropTypes.string,
    color: PropTypes.string,
    address: PropTypes.string,
    ownerName: PropTypes.string,
    tel: PropTypes.string,
  }),
};
