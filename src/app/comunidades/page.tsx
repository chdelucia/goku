'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Comunidades() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('/api/hello');
        
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        
        const data = await response.text();
        setMessage(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMessage();
  });

  return (
    <div className={styles['container']}>
      <h1>{message}</h1>
    </div>
  );
}
