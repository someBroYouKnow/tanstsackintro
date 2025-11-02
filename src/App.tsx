import "./App.css";

function App() {
  return (
    <div className="page-container home-page">
      <div className="hero-section">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>

        <h1 className="hero-title">
          Welcome to <span className="gradient-text">TanStack Router</span>
        </h1>

        <p className="hero-subtitle">
          Experience the power of type-safe routing with beautiful animations
        </p>

        <div className="cta-container">
          <a href="/feed" className="cta-button primary">
            <span>Explore Feed</span>
            <svg
              className="arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Optimized for performance and speed</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful UI</h3>
            <p>Stunning animations and transitions</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Type Safe</h3>
            <p>Full TypeScript support out of the box</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
