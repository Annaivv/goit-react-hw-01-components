import PropTypes, { arrayOf } from 'prop-types';
import { Stat } from './Statistics';
import { StatContainer, StatTitle, DataList, DataLi } from './Stat.styled';

export const StatList = ({ title, stats }) => {
  return (
    <StatContainer>
      {title && <StatTitle>{title}</StatTitle>}
      <DataList>
        {stats.map(stat => (
          <DataLi key={stat.id}>
            <Stat stat={stat} />
          </DataLi>
        ))}
      </DataList>
    </StatContainer>
  );
};

StatList.propTypes = {
  stats: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
