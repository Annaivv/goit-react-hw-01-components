import { Transaction } from './TransactionItem';
import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  HeadItems,
  ItemRow,
} from './Transactions.styled';

export const TransactionsList = ({ transactions }) => {
  return (
    <div>
      <TransactionsTable>
        <TableHead>
          <tr>
            <HeadItems>Type</HeadItems>
            <HeadItems>Amount</HeadItems>
            <HeadItems>Currency</HeadItems>
          </tr>
        </TableHead>

        <tbody>
          {transactions.map(transaction => (
            <ItemRow key={transaction.id}>
              <Transaction transaction={transaction} />
            </ItemRow>
          ))}
        </tbody>
      </TransactionsTable>
    </div>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
