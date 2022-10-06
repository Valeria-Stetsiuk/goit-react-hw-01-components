import PropTypes from "prop-types";
import s from "../TransactionHistory/TransactionHistory.module.css";
export const TransactionHistoryItem = ({ id,type,amount,currency }) => {
    return (
       <>
     <tr className={s.transactionDesk}>
      <td className={s.transactionType}>{type}</td>
      <td className={s.transactionType}>{amount}</td>
      <td className={s.transactionType}>{currency}</td>
            </tr>
    </>
   )
};
TransactionHistoryItem.propTypes = {
   id: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,

 };