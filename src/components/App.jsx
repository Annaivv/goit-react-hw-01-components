import { User } from './User';
import user from '../user.json';

import stats from '../data.json';
import { StatList } from './StatList';

export const App = () => {
  return (
    <>
      <User user={user} />
      <StatList title={'Upload stats'} stats={stats} />
    </>
  );
};
