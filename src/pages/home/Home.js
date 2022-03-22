import React from 'react';

// component
import TransactionForm from '../../components/TransactionForm/TransactionForm';

// styles
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
}
