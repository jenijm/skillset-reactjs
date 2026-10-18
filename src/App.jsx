function App() {
  return (
    <main className="page">
      <section className="card">
        <div className="react-mark" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit orbit-three" />
          <span className="core" />
        </div>

        <p className="label">MY FIRST REACT APP</p>
        <h1>Hello from React!</h1>
        <p className="description">
          This simple component is running successfully with React and Vite.
        </p>
        <span className="status">
          <i aria-hidden="true" />
          App is running
        </span>
      </section>
    </main>
  );
}

export default App;
