import PropTypes from 'prop-types';
import { DataItem } from './Stat.styled';

export const Stat = ({ stat: { id, label, percentage } }) => {
  return (
    <DataItem name={id}>
      <span>{label} </span>
      <span>{percentage}%</span>
    </DataItem>
  );
};

Stat.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
