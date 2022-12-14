import PropTypes from 'prop-types';
import { ItemCell } from './Transactions.styled';

export const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <ItemCell type>{type}</ItemCell>
      <ItemCell>{amount}</ItemCell>
      <ItemCell>{currency}</ItemCell>
    </>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
