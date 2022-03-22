import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { Link } from 'react-router-dom'

// styles
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    console.log('user logged in')
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles['login-form']}>
        <h2>Login</h2>
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
        <p>Don´t have and account? Please <Link to="/signup">Signup</Link></p><br/>

        {!isPending && <button className='btn'>Login</button>}
        {isPending && <button className='btn' disabled>Loading</button>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
