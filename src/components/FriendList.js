import { Friend } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            <Friend friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};
