import "../../Styles/Sections.css";
const Section = (element) => {
  console.log(element.option);
  return (
    <div>
      {element.option.length > 1 &&
        element.option?.map((section, key) => {
          return (
            <section key={key} className="section">
              <h3>{section.location}</h3>
              <p>{section.position}</p>
              <p>{section.date}</p>
              {section.paragraph?.map((paragraph, key) => {
                return <p key={key}>{paragraph}</p>;
              })}
            </section>
          );
        })}
    </div>
  );
};

export default Section;
