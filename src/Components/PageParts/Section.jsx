import "../../Styles/Sections.css";
const Section = (element) => {
  return (
    <div>
      {element.option.length > 1 &&
        element.option?.map((section, key) => {
          return (
            <section key={key} className="section">
              <h3 className="sectionElement">{section.location}</h3>
              <p className="sectionElement">{section.position}</p>
              <p className="sectionElement">{section.date}</p>
              {section.paragraph?.map((paragraph, key) => {
                return (
                  <p className="sectionElement" key={key}>
                    {paragraph}
                  </p>
                );
              })}
            </section>
          );
        })}
    </div>
  );
};

export default Section;
