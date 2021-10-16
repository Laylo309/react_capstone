import PropTypes from 'prop-types';
import { GrSend } from 'react-icons/gr';

const Filter = (props) => {
  const filterValues = (e) => {
    props.setFilter(e.target.value);
  };
  return (
    <div className="input-group mb-3">
      <input type="text" onChange={filterValues} className="form-control delete-shadow" />
      <span className="input-group-text">
        <GrSend />
      </span>
    </div>
  );
};
Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
export default Filter;
