import PropTypes from 'prop-types';

export const Stat = ({ stat: { label, percentage } }) => {
  return (
    <div>
      <span>{label} </span>
      <span>{percentage}%</span>
    </div>
  );
};

Stat.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
