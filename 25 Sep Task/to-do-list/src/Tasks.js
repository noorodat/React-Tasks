import React from 'react';

function Task(props) {
  const styles = {
    'display': 'flex',
    'gap': '8px',
    'justifyContent': 'center',
    'padding': '20px 0'
  }

  const handleDeletion = () => {
    props.onDelete();
  }

  return (
    <div style={styles} className="task">
      <p>{props.description}</p>
      <button onClick={handleDeletion}>Delete</button>
    </div>
  );
}

export default Task;
