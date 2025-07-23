import React, { useState } from 'react';

const UserBox = ({ userData = {} }) => {
  const [user, setUser] = useState(userData);
  const [isDeleted, setIsDeleted] = useState(false);

  if (!user?.name || isDeleted) return null;

  const deleteUser = () => {
    const payload = { email: user.email };
    console.log('DELETE USER PAYLOAD:', payload);
    setIsDeleted(true);
  };

  const blockUser = () => {
    const payload = { id: user._id };
    console.log('BAN USER PAYLOAD:', payload);
    setUser({ ...user, isBan: true });
  };

  const unblockUser = () => {
    const payload = { id: user._id };
    console.log('UNBAN USER PAYLOAD:', payload);
    setUser({ ...user, isBan: false });
  };

  return (
    <div style={styles.card}>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p>
        <strong>Status:</strong>{' '}
        <span style={{ color: user.isBan ? 'red' : '#4CAF50' }}>
          {user.isBan ? 'Blocked' : 'Active'}
        </span>
      </p>

      <div style={styles.buttonGroup}>
        {user.isBan ? (
          <button onClick={unblockUser} style={styles.button}>Unblock</button>
        ) : (
          <button onClick={blockUser} style={styles.button}>Block</button>
        )}
        <button onClick={deleteUser} style={{ ...styles.button, background: '#b00020' }}>Delete</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#111726',
    padding: '1.5rem',
    borderRadius: '12px',
    width: '300px',
    marginBottom: '1.5rem',
    color: '#fff',
    boxShadow: '0 0 15px rgba(255, 204, 128, 0.1)',
  },
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  button: {
    flex: 1,
    padding: '0.5rem 1rem',
    background: 'linear-gradient(to right, #ffcc80, #ffb74d)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#000',
    minWidth: '80px'
  },
};

export default UserBox;
