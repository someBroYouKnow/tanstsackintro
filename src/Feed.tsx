function Feed() {
  const feedItems = [
    {
      id: 1,
      title: "First Post",
      content: "Exploring TanStack Router capabilities",
      likes: 42,
      time: "2h ago",
    },
    {
      id: 2,
      title: "Second Post",
      content: "Building amazing user experiences",
      likes: 38,
      time: "4h ago",
    },
    {
      id: 3,
      title: "Third Post",
      content: "The future of web development",
      likes: 55,
      time: "6h ago",
    },
    {
      id: 4,
      title: "Fourth Post",
      content: "Creating smooth animations",
      likes: 67,
      time: "8h ago",
    },
  ];

  return (
    <div className="page-container feed-page">
      <div className="feed-header">
        <h1 className="feed-title">
          <span className="gradient-text">Your Feed</span>
        </h1>
        <p className="feed-subtitle">Latest updates and posts</p>
      </div>

      <div className="feed-grid">
        {feedItems.map((item, index) => (
          <div
            key={item.id}
            className="feed-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-shine"></div>
            <div className="card-header">
              <div className="avatar">
                <div className="avatar-inner">{item.title[0]}</div>
              </div>
              <div className="card-meta">
                <h3 className="card-title">{item.title}</h3>
                <span className="card-time">{item.time}</span>
              </div>
            </div>

            <p className="card-content">{item.content}</p>

            <div className="card-footer">
              <button className="like-button">
                <svg
                  className="heart-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>{item.likes}</span>
              </button>

              <button className="comment-button">
                <svg
                  className="comment-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Comment</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
