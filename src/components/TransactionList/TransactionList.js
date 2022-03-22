import React from 'react';
import { useFirestore } from '../../hooks/useFirestore';
import { TiDeleteOutline } from 'react-icons/ti';

// styles
import styles from './Transactions.module.css';

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore('transactions');
  return (
    <div>
      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>${transaction.amount}</p>
            <TiDeleteOutline
              className={styles.deleteBtn}
              onClick={() => deleteDocument(transaction.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
