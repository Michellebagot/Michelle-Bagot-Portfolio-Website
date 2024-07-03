import React, { useState, useEffect } from "react";
import "./jobHunt.css";
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
  const [frontendCount, setFrontendCount] = useState(0);
  const [backendCount, setBackendCount] = useState(0);
  const [fullStackCount, setFullStackCount] = useState(0);
  const [webDevCount, setWebDevCount] = useState(0);
  const [softwareEngineerCount, setSoftwareEngineerCount] = useState(0);
  const [softwareDeveloperCount, setSoftwareDeveloperCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const [frontendPercentage, setFrontendPercentage] = useState(0);
  const [backendPercentage, setBackendPercentage] = useState(0);
  const [fullStackPercentage, setFullStackPercentage] = useState(0);
  const [webDevPercentage, setWebDevPercentage] = useState(0);

  const [softwareEngineerPercentage, setSoftwareEngineerPercentage] =
    useState(0);
  const [softwareDeveloperPercentage, setSoftwareDeveloperPercentage] =
    useState(0);
  const [otherPercentage, setOtherPercentage] = useState(0);

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
    const roleCategories = {
      fullStack: 0,
      frontend: 0,
      backend: 0,
      webDev: 0,
      softwareEngineer: 0,
      softwareDeveloper: 0,
      other: 0,
    };

    cards.forEach((card) => {
      const jobTitle = card.jobTitle.toLowerCase();
      if (jobTitle.includes("full")) {
        roleCategories.fullStack++;
      } else if (jobTitle.includes("front")) {
        roleCategories.frontend++;
      } else if (jobTitle.includes("back")) {
        roleCategories.backend++;
      } else if (jobTitle.includes("web")) {
        roleCategories.webDev++;
      } else if (jobTitle.includes("software engineer")) {
        roleCategories.softwareEngineer++;
      } else if (jobTitle.includes("software developer")) {
        roleCategories.softwareDeveloper++;
      } else {
        roleCategories.other++;
      }
    });

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

    setFrontendCount(roleCategories.frontend);
    setBackendCount(roleCategories.backend);
    setFullStackCount(roleCategories.fullStack);
    setWebDevCount(roleCategories.webDev);
    setSoftwareEngineerCount(roleCategories.softwareEngineer);
    setSoftwareDeveloperCount(roleCategories.softwareDeveloper);
    setOtherCount(roleCategories.other);
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
      setFrontendPercentage(
        Math.round((frontendCount / rolesAppliedFor) * 100)
      );
      setBackendPercentage(Math.round((backendCount / rolesAppliedFor) * 100));
      setFullStackPercentage(
        Math.round((fullStackCount / rolesAppliedFor) * 100)
      );
      setWebDevPercentage(Math.round((webDevCount / rolesAppliedFor) * 100));
      setSoftwareEngineerPercentage(
        Math.round((softwareEngineerCount / rolesAppliedFor) * 100)
      );
      setSoftwareDeveloperPercentage(
        Math.round((softwareDeveloperCount / rolesAppliedFor) * 100)
      );
      setOtherPercentage(Math.round((otherCount / rolesAppliedFor) * 100));
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
          <h3>Overview</h3>
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
          <section className="keyInfo">
            <p>Roles Applied for : {rolesAppliedFor}</p>
            <p>
              Interviews Attended : {interviews} ({interviewPercentage}%)
            </p>
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
          </section>
        </section>
        <section className="cardContainer">
          <h3>Role Details</h3>
          <section className="pieChart">
            <PieChart
              data={[
                {
                  name: "Software Engineering Roles",
                  value: softwareEngineerCount,
                  color: "#d30c7b",
                },
                {
                  name: "Software Development Roles",
                  value: softwareDeveloperCount,
                  color: "#E38627",
                },
                {
                  name: "Full Stack Roles",
                  value: fullStackCount,
                  color: "#39A0FF",
                },
                {
                  name: "Front End Roles",
                  value: frontendCount,
                  color: "#9D38BD",
                },
                {
                  name: "Back End Roles",
                  value: backendCount,
                  color: "#FFC107",
                },
                {
                  name: "Web Development Roles",
                  value: webDevCount,
                  color: "#28A745",
                },
                {
                  name: "Other Roles",
                  value: otherCount,
                  color: "#F9E79F",
                },
              ]}
            />
          </section>
          <section className="keyInfo">
            <div className="textWithColorBox">
              <p>
                Software Engineering Roles : {softwareEngineerCount} (
                {softwareEngineerPercentage}%)
              </p>
              <span className="softEngBox">&nbsp;</span>
            </div>
            <div className="textWithColorBox">
              <p>
                Software Developerment Roles : {softwareDeveloperCount} (
                {softwareDeveloperPercentage}%)
              </p>
              <span className="softDevBox">&nbsp;</span>
            </div>
            <div className="textWithColorBox">
              <p>
                Full Stack Roles : {fullStackCount} ({fullStackPercentage}
                %)
              </p>
              <span className="fullStackBox">&nbsp;</span>
            </div>
            <div className="textWithColorBox">
              <p>
                Front End Roles : {frontendCount} ({frontendPercentage}
                %)
              </p>
              <span className="frontEndBox">&nbsp;</span>
            </div>
            <div className="textWithColorBox">
              <p>
                Back End Roles : {backendCount} ({backendPercentage}
                %)
              </p>
              <span className="backEndBox">&nbsp;</span>
            </div>
            <div className="textWithColorBox">
              <p>
                Web Development Roles : {webDevCount} ({webDevPercentage}
                %)
              </p>
              <span className="webDevBox">&nbsp;</span>
            </div>
            <div className="textWithColorBox">
              <p>
                Other Roles : {otherCount} ({otherPercentage}
                %)
              </p>
              <span className="otherBox">&nbsp;</span>
            </div>
          </section>
        </section>
      </>
    );
  }
};

export default JobHunt;
