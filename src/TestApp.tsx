function TestApp() {
  return (
    <div style={{
      padding: '50px',
      backgroundColor: 'lightblue',
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'darkblue',
      height: '100vh'
    }}>
      <h1>✅ React App is Working!</h1>
      <p>Port: 3008</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default TestApp;