import './App.css';

function AppSimple() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: 'blue', fontSize: '48px' }}>
        TEST: React App is Working!
      </h1>
      <p style={{ fontSize: '24px', color: 'green' }}>
        If you can see this message, React is running correctly.
      </p>
      <p style={{ fontSize: '20px', color: 'red' }}>
        Check the browser console (F12) for any error messages.
      </p>
    </div>
  );
}

export default AppSimple;