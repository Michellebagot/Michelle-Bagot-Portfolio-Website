import "./jobHuntCard.css";

const JobHuntCard = ({ card }) => {
  return (
    <>
      <section className="cardContainer">
        <p>Job Title: {card.jobTitle}</p>
        <p>Application Status: {card.list}</p>
        {card.labels.length > 0 && (
          <p>
            When Applied:{" "}
            {card.labels
              .filter(
                (label) =>
                  label.name.startsWith("Week") || label.name.startsWith("Pre")
              )
              .map((label) => label.name)
              .join(", ")}
          </p>
        )}
      </section>
    </>
  );
};

export default JobHuntCard;
