import "./jobHuntCard.css"

const JobHuntCard = ({card}) => {

    return (
        <>
        <section className='cardContainer'>

              <p>Company: {card.company}</p>
              <p>Job Title: {card.jobTitle}</p>
              <p>List: {card.list}</p>
              {card.labels.length > 0 && (
                  <p>
                  Labels: {card.labels.map((label) => label.name).join(", ")}
                </p>
              )}
              </section>
        </>
    )
}

export default JobHuntCard