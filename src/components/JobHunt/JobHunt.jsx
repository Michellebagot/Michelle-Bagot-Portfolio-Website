import React, { useState, useEffect } from "react";
import "./jobHunt.css";
import JobHuntCard from "../JobHuntCard/JobHuntCard";
import { PieChart } from "react-minimal-pie-chart";
import Loading from "../Loading/Loading";

const JobHunt = () => {
  const [jobHuntCards, setJobHuntCards] = useState([]);
  const [rolesAppliedFor, setRolesAppliedFor] = useState(0);
  const [rejectedRoles, setRejectedRoles] = useState(0);
  const [rolesDeemedRejected, setRolesDeemedRejected] = useState(0);
  const [awaitingInterviewOutcome, setAwaitingInterviewOutcome] = useState(0);
  const [awaitingOutcome, setAwaitingOutcome] = useState(0);
  const [interviews, setInterviews] = useState(0);
  const [interviewPercentage, setInterviewPercentage] = useState(0);
  const [rejectionPercentage, setRejectionPercentage] = useState(0);
  const [deemedrejectedPercentage, setDeemedRejectedPercentage] = useState(0);
  const [awaitingOutcomePercent, setAwaitingOutcomePercent] = useState(0);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://trello.com/b/OmXLvkNC/job-applications.json`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();

        const formattedCards = processTrelloData(jsonData);

        setJobHuntCards(formattedCards);

        updateJobHuntStats(formattedCards);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const processTrelloData = (trelloData) => {
    const lists = trelloData.lists || {};

    const cards = trelloData.cards || [];
    const formattedCards = cards
      .filter((card) => card.id && card.name && card.idList)
      .filter((card) => card.name.includes("-"))
      .map((card) => {
        const listId = card.idList;
        const listName = lists[listId] || "";

        let displayListName;
        switch (listId) {
          case "66129775f6d808e268d22637":
            displayListName = "Roles applied for";
            break;
          case "66129775f6d808e268d22638":
            displayListName = "Rejection Received";
            break;
          case "661e4f9b969b1e6ed68fa6ba":
            displayListName = "Deemed Unsuccessful";
            break;
          case "66129775f6d808e268d2263d":
            displayListName = "Awaiting Interview Outcome";
            break;
          default:
            displayListName = listName || listId;
        }

        const [company, jobTitle] = card.name.split("-", 2);
        const labels = card.labels || [];

        return {
          id: card.idShort || card.id,
          company: company || "",
          jobTitle: jobTitle || "",
          list: displayListName,
          labels,
        };
      });

    return formattedCards;
  };

  const updateJobHuntStats = (cards) => {
    setRolesAppliedFor(cards.length);
    setRejectedRoles(
      cards.filter((card) => card.list === "Rejection Received").length
    );
    setRolesDeemedRejected(
      cards.filter((card) => card.list === "Deemed Unsuccessful").length
    );
    setAwaitingInterviewOutcome(
      cards.filter((card) => card.list === "Awaiting Interview Outcome").length
    );
    setInterviews(
      cards.filter((card) =>
        card.labels.some((label) => label.name === "Interview")
      ).length
    );
  };

  useEffect(() => {
    if (rolesAppliedFor > 0) {
      setAwaitingOutcome(rolesAppliedFor - rejectedRoles);
      setInterviewPercentage(Math.round((interviews / rolesAppliedFor) * 100));
      setRejectionPercentage(
        Math.round((rejectedRoles / rolesAppliedFor) * 100)
      );
      setDeemedRejectedPercentage(
        Math.round((rolesDeemedRejected / rolesAppliedFor) * 100)
      );
      setAwaitingOutcomePercent(
        Math.round((awaitingOutcome / rolesAppliedFor) * 100)
      );
      setLoadingState(false);
    } else {
      setInterviewPercentage(0);
      setRejectionPercentage(0);
      setDeemedRejectedPercentage(0);
    }
  }, [
    rolesAppliedFor,
    interviews,
    rejectedRoles,
    rolesDeemedRejected,
    awaitingOutcome,
  ]);

  if (loadingState) {
    return (
      <>
        <section className="jobCardContainer">
          <h3>My Job Hunt</h3>
          <p>
            Fresh from Northcoders Bootcamp (I graduated April 5th), I've been
            actively pursuing opportunities to leverage my newly acquired
            skills. Here's a breakdown of my progress so far.
          </p>
        </section>
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <section className="jobCardContainer">
          <h3>My Job Hunt</h3>
          <p>
            Fresh from Northcoders Bootcamp (I graduated April 5th), I've been
            actively pursuing opportunities to leverage my newly acquired
            skills. Here's a breakdown of my progress so far.
          </p>
        </section>
        <section className="cardContainer">
          <p>Roles Applied for : {rolesAppliedFor}</p>
          <div className="textWithColorBox">
            <p>
              Rejections Received : {rejectedRoles} ({rejectionPercentage}%)
            </p>
            <span className="rejectedRolesBox">&nbsp;</span>
          </div>
          <div className="textWithColorBox">
            <p>
              Roles Awaiting Outcome : {awaitingOutcome} (
              {awaitingOutcomePercent}
              %)
            </p>
            <span className="awaitingOutcomeBox">&nbsp;</span>
          </div>
          <p>
            Interviews Attended : {interviews} ({interviewPercentage}%)
          </p>
          <section className="pieChart">
            <PieChart
              data={[
                {
                  name: "Rejection for Applied Roles",
                  value: rejectedRoles,
                  color: "#d30c7b",
                },
                {
                  name: "Roles Awaiting An Outcome",
                  value: awaitingOutcome,
                  color: "#E38627",
                },
              ]}
            />
          </section>
        </section>
        {/* <section>
        <ul>
        {jobHuntCards.map((card) => (
          <JobHuntCard card={card} key={card.id} />
        ))}
        </ul>
        </section> /* */}
      </>
    );
  }
};

export default JobHunt;
