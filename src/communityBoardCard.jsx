import React from 'react';

const communityBoardCard = ({name, event, image, eventLink }) => {
  return (
    <div className="community-board-card">
      <img src={image} alt={`${name} Event`} className="community-board-image" />
      <h2>{name}</h2>
      <p>{event}</p>
      <button onClick={() => window.location.href=eventLink} className="menu-button">
        View Event
      </button>
    </div>
  );
};

export default communityBoardCard;
