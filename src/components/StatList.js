import PropTypes, { arrayOf } from 'prop-types';
import { Stat } from './Statistics';

export const StatList = ({ title, stats }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <Stat stat={stat} />
          </li>
        ))}
      </ul>
    </div>
  );
};

StatList.propTypes = {
  stats: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
