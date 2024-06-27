// app/waitlist/page.tsx
'use client';

import { useState, FormEvent } from 'react';

const Waitlist = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (res.ok) {
      setMessage('Successfully joined the waitlist!');
      setName('');
      setEmail('');
    } else {
      setMessage('Failed to join the waitlist. Please try again.');
    }
  };

  return (
    <div>
      <h1>Join the Waitlist</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Join Waitlist</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Waitlist;
