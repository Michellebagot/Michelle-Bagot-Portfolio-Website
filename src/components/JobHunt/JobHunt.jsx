import React, { useState, useEffect } from 'react';
import './jobHunt.css';

const JobHunt = () => {
  const [jobHuntCards, setJobHuntCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://trello.com/b/OmXLvkNC/job-applications.json`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();

        // Process and format the parsed Trello JSON data
        const formattedCards = processTrelloData(jsonData);

        setJobHuntCards(formattedCards);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const processTrelloData = (trelloData) => {
    const lists = trelloData.lists || {}; // Map list IDs to names

    const cards = trelloData.cards || [];
    const formattedCards = cards
      .filter((card) => card.id && card.name && card.idList) // Filter incomplete cards
      .filter((card) => card.name.includes('-')) // Filter cards without hyphen
      .map((card) => {
        const listId = card.idList;
        const listName = lists[listId] || ''; // Get list name or empty string

        let displayListName;
        switch (listId) {
          case '66129775f6d808e268d22637':
            displayListName = 'Roles applied for';
            break;
          case '66129775f6d808e268d22638':
            displayListName = 'Rejected';
            break;
          case '661e4f9b969b1e6ed68fa6ba':
            displayListName = 'Deemed Rejected';
            break;
          case '66129775f6d808e268d2263d':
            displayListName = 'Awaiting Interview Outcome';
            break;
          default:
            displayListName = listName || listId; // Use list name or ID if missing
        }

        // Extract company and job title
        const [company, jobTitle] = card.name.split('-', 2); // Split at first hyphen

        // Get labels (assuming labels are stored as an array in the card object)
        const labels = card.labels || []; // Handle missing labels

        return {
          id: card.idShort || card.id, // Handle potential id variations
          company: company || '', // Handle missing company name
          jobTitle: jobTitle || '', // Handle missing job title
          list: displayListName,
          labels, // Include labels array
        };
      });

    return formattedCards;
  };

  return (
    <>
      <ul>
        {jobHuntCards.map((card) => (
          <li key={card.id}>
            <p>Company: {card.company}</p>
            <p>Job Title: {card.jobTitle}</p>
            <p>List: {card.list}</p>
            {card.labels.length > 0 && (
              <p>
                Labels: {card.labels.map((label) => label.name).join(', ')}
              </p>
            )}
          </li>
        ))}
      </ul>
      <p>This is a job hunting component</p>
    </>
  );
};

export default JobHunt;
