import { Friend } from './FriendListItem';
import PropTypes from 'prop-types';
import { AllFriends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <AllFriends>
        {friends.map(friend => (
          <li key={friend.id}>
            <Friend friend={friend} />
          </li>
        ))}
      </AllFriends>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
