import "./contactMe.css";

const ContactMe = () => {
  return (
    <>
      <section className="cardContainer">
        <h2>Contact Me</h2>
        <p>Lets make something epic together!</p>

        <a
          href={`mailto:hi@michellebagot.co.uk?subject=I want to make something epic with you`}
        >
          hi@michellebagot.co.uk
        </a>

        <p>
          Psss! You can also contact me on{" "}
          <a href="https://www.linkedin.com/in/michellebagot" target="_blank">
            LinkedIn
          </a>
        </p>
      </section>
    </>
  );
};
export default ContactMe;
