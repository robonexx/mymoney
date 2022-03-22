import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

// component
import TransactionForm from '../../components/TransactionForm/TransactionForm';

// styles
import styles from './Home.module.css';

export default function Home() {
  const { user } = useAuthContext();
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
