import React from 'react';
import BoardCard from '../communityBoardCard.jsx';

const communityBoard = () => {
  const boards = [
    {
      name: 'Code and Coffee NYC',
      event: 'Coding',
      image: 'https://secure.meetupstatic.com/photos/event/d/b/4/7/600_523676135.webp?w=750',  
      eventLink: 'https://www.meetup.com/new-york-code-coffee/',
    },
    {
      name: 'LIC Coding Cafe',
      event: 'Coding/Hackathon',
      image: 'https://secure.meetupstatic.com/photos/event/b/d/f/1/600_523608625.webp?w=750',  
      eventLink: 'https://www.meetup.com/lic-fullstack-software-engineers/events/302938470/?eventOrigin=group_similar_events&_gl=1*geg5jt*_up*MQ..*_ga*MjkzODgyNzAyLjE3MjcyMzA2NjY.*_ga_NP82XMKW0P*MTcyNzIzMDY2NS4xLjAuMTcyNzIzMDY2NS4wLjAuMA..',  
    },
    {
      name: 'Unstructured Data in LLMs',
      event: 'Coding',
      image: 'https://secure.meetupstatic.com/photos/event/d/3/2/2/600_522954050.webp?w=750',  
      eventLink: 'https://www.meetup.com/unstructured-data-meetup-new-york/events/302462455/?eventOrigin=group_similar_events',
    }
  ];

  return (
    <div className="community-board-container">
      <h1>Community Board Events</h1>
      <div className="community-board-grid">
        {boards.map((board, index) => (
          <BoardCard
            key={index}
            name={board.name}
            event={board.event}
            image={board.image}
            eventLink={board.eventLink}
          />
        ))}
      </div>
    </div>
  );
};

export default communityBoard;
