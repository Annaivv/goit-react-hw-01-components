import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

import { User } from './User/User';
import user from '../user.json';

import stats from '../data.json';
import { StatList } from './Statistics/StatList';

import friends from '../friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from '../transactions.json';
import { TransactionsList } from './Transactions/TransactionList';

export const App = () => {
  return (
    <Layout>
      <User user={user} />
      <StatList title={'Upload stats'} stats={stats} />
      <FriendList friends={friends} />
      <TransactionsList transactions={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
