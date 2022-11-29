import { User } from './User';
import user from '../user.json';

import stats from '../data.json';
import { StatList } from './StatList';

import friends from '../friends.json';
import { FriendList } from './FriendList';

export const App = () => {
  return (
    <>
      <User user={user} />
      <StatList title={'Upload stats'} stats={stats} />
      <FriendList friends={friends} />
    </>
  );
};
