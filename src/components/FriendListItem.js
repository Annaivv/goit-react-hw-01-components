import PropTypes, { bool } from 'prop-types';

export const Friend = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <div>
      <span>{isOnline} </span>
      <img src={avatar} alt="User avatar" />
      <span>{name} </span>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    isOnline: bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
