import PropTypes, { bool } from 'prop-types';
import { FriendItem, OnlineStatus, FriendName } from './FriendList.styled';

export const Friend = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <FriendItem>
      <OnlineStatus isOnline={isOnline}></OnlineStatus>
      <img src={avatar} alt="User avatar" width="48px" />
      <FriendName>{name} </FriendName>
    </FriendItem>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    isOnline: bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
