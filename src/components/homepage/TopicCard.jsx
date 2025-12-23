// src/components/TopicCard.jsx
function TopicCard(props) {
  return (
    <div className="topic-card">
      <div className="card-icon">{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {/* Dieser Button hat keine Funktion, ist nur Deko */}
      <button className="btn-outline">
        Lerne {props.title}
      </button>
    </div>
  );
}

export default TopicCard;
