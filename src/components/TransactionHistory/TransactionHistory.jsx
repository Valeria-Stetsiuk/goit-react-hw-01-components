import PropTypes from "prop-types";
import {TransactionHistoryItem} from "../TransactionHistory/TransactionHistoryItem"; 
import s from "../TransactionHistory/TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead className={s.transactionHead}>
                <tr className={s.transactionTable}>
                    <th className={s.transactionTitle}>Type</th>
                    <th className={s.transactionTitle}>Amount</th>
                    <th className={s.transactionTitle}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <TransactionHistoryItem {...item} key={item.id} />
                ))}
            </tbody>
        </table>
     
    );
};
TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
       PropTypes.shape({
       id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
   })),
 };