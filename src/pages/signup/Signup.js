import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
// styles
import styles from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
    setEmail('')
    setPassword('')
    setDisplayName('')
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Signup</h2>
        <label>
          <span>Email:</span>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='enter email'
            value={email}
            required
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='enter password'
            value={password}
            required
          />
        </label>
        <label>
          <span>Display name:</span>
          <input
            type='text'
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder='Enter display name'
            value={displayName}
            required
          />
        </label>
        {!isPending && <button className='btn'>Signup</button>}
        {isPending && (
          <button className='btn' disabled>
            connecting...
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
