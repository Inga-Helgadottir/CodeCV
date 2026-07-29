import "../../Styles/Sections.css";

const Section = (element) => {
  return (
    <div>
      {element.option.length >= 1 &&
        element.option?.map((section, key) => {
          return (
            <section key={key} className="section">
              {section.location !== "" && <h3>{section.location}</h3>}
              {section.position !== "" && <p>{section.position}</p>}
              {section.date !== "" && <p>{section.date}</p>}
              {section.paragraphs?.map((paragraph, key) => {
                if (paragraph === "") {
                  return <br />;
                } else {
                  return (
                    <div key={key} className="sectionParagraph">
                      {paragraph}
                    </div>
                  );
                }
              })}
            </section>
          );
        })}
    </div>
  );
};

export default Section;
