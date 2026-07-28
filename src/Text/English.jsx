import Gallery from "../Components/PageParts/Gallery";
import LinkButton from "../Components/PageParts/LinkButton";

export const HeaderHeading_eng = "Full-stack developer";

export const HeaderContent_eng =
  "I love working with both front-end and back-end programming";

export const NavBarOptions_eng = [
  {
    id: 1,
    optionName: "About me",
    optionDestination: "/AboutMe",
  },
  {
    id: 2,
    optionName: "Experience",
    optionDestination: "/Experience",
  },
  {
    id: 3,
    optionName: "Education",
    optionDestination: "/Education",
  },
  {
    id: 4,
    optionName: "Courses",
    optionDestination: "/Courses",
  },
  {
    id: 5,
    optionName: "Skills",
    optionDestination: "/Skills",
  },
];

export const AboutMeHeadingAndParagraph_eng = [
  {
    location: "About me",
    position: "",
    date: "",
    paragraphs: [
      "I am an educated Full-Stack developer (back-end and front-end developer) who loves coding. I am a nerd at heart with a passion for coding and learning new things and I know when you work with code, you will never run out of new things to learn. My main goal when coding is to make it easy for the user to understand how to use without having to read any documentation. I also like to make my code easy to read and update in the future, when new features need to be added or when new and better technologies become available. ",
      "During my time at Furesø commune I worked with people from many different positions to create tools for them. They told me what they needed, and I figured out how to provide that. I enjoy using my skills to solve real-life problems. I prefer to think through the functionality before I start coding, so I get the best and cleanest code for the purpose. I like working with Agile methodologies, where everything is planned, and I even like getting a surprise new feature or alteration that needs to be added in the middle of a project. ",
      "I have always been good at memorization; I have even memorized a deck of cards in the span of two days a few years ago. Some numbers even get stuck for life, like this number 0118 999 88199 9119 725 3 from a TV show called “The IT crowd”. I am an honest, kind, and creative person, who is good at being impartial and fair. I work well both independently and as a part of a group. I have had a lot of practice explaining code related things to people who know nothing about code or even computers in general. Outside of coding I enjoy hanging out with friends, painting, taking pictures, baking, solving puzzles and playing all kinds of games. I love nature, animals and helping others. ",
      "",
      "I have 2 GitHub accounts, one I made during my webdeveloper education and one I have used since I started my Computer science education.",
      <LinkButton
        link={"https://github.com/SIngaH"}
        text={"My webdeveloper GitHub account"}
        target={"_blank"}
      />,
      <LinkButton
        link={"https://github.com/Inga-Helgadottir"}
        text={"My computer science GitHub account"}
        target={"_blank"}
      />,
      "",
      "In this application there is information about:",
      <LinkButton link={"/Experience"} text={"My experience"} />,
      <LinkButton link={"/Education"} text={"My education"} />,
      <LinkButton link={"/Courses"} text={"The courses I have taken"} />,
      "",
      "Here is my contact information",
      <LinkButton
        link={"https://www.linkedin.com/in/inga-helgadottir/"}
        text={"My LinkedIn profile"}
        target={"_blank"}
      />,
      <LinkButton
        link={"mailto:s.inga.helgadottir95@gmail.com"}
        text={"My email"}
        target={"_blank"}
      />,
    ],
  },
];

export const ExperienceHeadingsAndParagraphs_eng = [
  {
    location:
      "Teknika – Copenhagen College of Technology Management and Marine Engineering",
    position: "Guest Speaker",
    date: "(November 2024 and October 2025)",
    paragraphs: [
      "I was twice offered a chance to give a presentation for students at Teknika. My first presentation was about Git, GitHub, and basic Python. The second presentation was focused on going a little deeper into Python and learning the basics of APIs, HTML, CSS, and vanilla JavaScript. Both presentations included exercises and were held for the 8th-semester students enrolled in the IT program.",
      <LinkButton
        link={"https://teknika.dk/"}
        text={
          "Teknika – Copenhagen Collage of Technology Management and Marine Engineering"
        }
        target={"_blank"}
      />,
    ],
  },
  {
    location: "Furesø kommune",
    position: "Full-stack developer",
    date: "(August 2024 – October 2024)",
    paragraphs: [
      "I started an internship at Furesø kommune digitization department on the 26th of August and was supposed to stay there for 4 weeks, but they asked me to stay another 4 weeks. Even though they don’t have enough coding projects to give me a job, they did have a few possible projects, one of which was making a very large CSV file easier to search through, as searching through the existing file was confusing and time consuming. I built the user interface for this data in ReactJS, I used Python to alter multiple different filetypes to pdfs files. I also used Python to join some Excel files together based on a few shared columns.",
      "Karen Thestrup Cuppers (Webmaster) LinkedIn review: I have had the pleasure of working with Inga in Furesø Kommune. Inga has mapped out and executed a major data project in a short time, which was also expanded along the way as a natural part of the project's development and stakeholder input. Many thanks to Inga for her adaptability and good collaboration.",
      <LinkButton
        link={"https://www.linkedin.com/in/karencuppers/"}
        text={"LinkedIn: Karen Thestrup Cuppers"}
        target={"_blank"}
      />,
    ],
  },
  {
    location: "Furesø kommune",
    position: "RPA developer (Robotic Process Automation)",
    date: "(December 2024 – June 2025)",
    paragraphs: [
      "Shortly after my internship ended, I was contacted by Furesø kommune for a temporary position helping their RPA developer (Robotic process automation). For the first 4 weeks I got a crash course in Power automate and some of the more important robots. By the second week I had gotten the hang of building and updating Power automate robots. The rest of the time I was taught about their most important robots, at the end of those 4 weeks their RPA developer quit, so I was on my own maintaining their many robots for months. I worked a lot in Power automate and regularly used HTML and CSS to format emails and Python scripts for the more advanced functions, that can be difficult to complete in Power automate alone.",
      "My boss there, Christian Bo Christiansen LinkedIn review: I have been a manager for and worked with Inga in Furesø kommune. Inga maintained and developed RPA solutions in the finance department. Inga had limited experience with RPA when she started, but learned very quickly to solve the tasks with the daily operation and development of new solutions in Power Automate. Inga was responsible for her tasks, good to work with and she also enjoyed participating in the department's social life. If you have Inga in mind for a job, please get in touch.",
      <LinkButton
        link={"https://www.linkedin.com/in/christian-bo-christiansen-6095323/"}
        text={"LinkedIn: Christian Bo Christiansen"}
        target={"_blank"}
      />,
    ],
  },
  {
    location: "Danish Meteorological Institute",
    position: "Front-End developer",
    date: "(February 2023 - June 2023)",
    paragraphs: [
      "As a part of my Computer Science education, me and one of my classmates got an internship at DMI. We worked on updating one of their websites called VejVejr as the old version had become outdated. This new version was a Single Page Application created with ReactJS and multiple frameworks and component libraries and as a code hosting platform, we used GitLab. We added functionality for monitoring user defined alarms and choosing how you are notified, either on the site, via SMS and/or email. For example, you could get notified if there is frost at a particular weather station, so you know when to salt the roads near that station.",
      "We continued working for DMI through our main project as well, on the same site but a different tab. This time we worked on a tab that shows a map of all the weather stations in Denmark. There we used modern visualization tools to add two new parameters crosswind and wind gust to the map, showing the strength of the crosswind and wind gust, along with a graph over the readings from the last few hours at this station.",
      "At the end of our main project, we showed the result of our work at a meeting with people from many different positions within DMI. The response we received was very positive, both from DMI’s employees and our teacher and censor during the exam.",
      "Anne Marie Munk Jørgensen is the leader of Consulting and Digitization at DMI and my mentor during the internship period and is willing to give a recommendation to those who want it.",
      <LinkButton
        link={
          "https://www.linkedin.com/in/anne-marie-munk-j%C3%B8rgensen-9b929a5/"
        }
        text={"LinkedIn: Anne Marie Munk Jørgensen"}
        target={"_blank"}
      />,
    ],
  },
];

export const EducationHeadingAndParagraphs_eng = [
  {
    location: "CPH-Business in Lyngby",
    position: "Computer science",
    date: "(January 2021 – June 2023)",
    paragraphs: [
      "During my Computer Science education, I learned Java, SQL, creating REST APIs using Java Persistence API (JPA) and MYSQL, CI/CD Unit and integration tests, Python, Maven, Docker, Apache Tomcat, the Agile methodologies, Extreme programming (XP) and Git (GitHub) in depth. I have used all of these in many different projects, usually through IntelliJ IDEA but I also used NetBeans a few times. I was also introduced to multiple different frameworks, libraries, tools, and languages. My education was centred around me being able to quickly learn new languages, tools, and technologies and use them in various projects.",
      "To see some of my JPA skills you can check out this project I created for my test in the subject. This project includes entity tables such as OneSide, OtherOneSide, ManySide, and OtherManySide, which model the different relationships in the database.",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/JPA-Notes"}
        text={"GitHub: JPA-Notes"}
        target={"_blank"}
      />,
      "I also took a Python elective where my exam project in was to make the game Hangman, using the Rick and Morty API and some Movie data in csv format as the guess words. Then I used Pillow, which is a python library to make the UI part of the hangman game.",
      "This is the repository for that project:",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/PythonEksamensProjekt"}
        text={"GitHub: PythonEksamensProjekt"}
        target={"_blank"}
      />,
      "Here you can see our exercises:",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/PythonOpgaver"}
        text={"GitHub: PythonOpgaver"}
        target={"_blank"}
      />,
    ],
  },
  {
    location:
      "The Main course at Roskilde Technical school and the Basic course at NEXT in Copenhagen",
    position: "Web Developer ",
    date: "(January 2019 – October 2020)",
    paragraphs: [
      "During the Web development education, I learned HTML, CSS, SASS, Bootstrap, JavaScript, Git (GitHub), JSON and how to use REST APIs in depth, using each of them together in many different projects using Visual Studio Code. I was also introduced to multiple different frameworks, libraries, tools, and languages.",
      "We had a new project each week, making a website for our favourite Movies, Bands, Games and so on. One of the most memorable projects I worked on was the 40’s project. Many different educations were being taught in NEXT, and we were all divided into teams, each team with a front-end developer, UI/UX designer, a few costume designers, a few make-up artists and photographers. Each team was given a decade, and we got the 40’s. We all worked as a team to make a website dedicated to our decade; I worked closely with the UX/UI designer to make our website which sadly is no longer online.",
      "To get a better idea of what we learned you can look at the practice repository, I created to get ready for the exam: ",
      <LinkButton
        link={"https://github.com/SIngaH/practice"}
        text={"GitHub: practice"}
        target={"_blank"}
      />,
      "You can also look at this project I created during my computer science education, to help my classmates with our frontend module:",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/HtmlCssJavascripHelper/"}
        text={"GitHub: HtmlCssJavascripHelper"}
        target={"_blank"}
      />,
    ],
  },
  {
    location: "English A and Danish A at VUC Lyngby and Math B at KVUC.",
    position: "Danish A, English A and Math B ",
    date: "(December 2017 –December 2018)",
    paragraphs: [
      "I took both English A and Danish 0-A, to have it in writing that I am academically fluent in both languages, I took Math B to prepare for the web developer education and because I like Math.",
      <LinkButton
        link={"https://vuclyngby.dk/"}
        text={"VUC Lyngby website"}
        target={"_blank"}
      />,
      <LinkButton
        link={"https://kvuc.dk/"}
        text={"KVUC website"}
        target={"_blank"}
      />,
    ],
  },
  {
    location: "Den Økologiske Produktionsskole (The Organic Production School)",
    position: "Photography",
    date: "(January 2013 - June 2015)",
    paragraphs: [
      "A production school is where you get paid to learn and then use that knowledge to generate things you can later sell, as I was on the photography line, I sold pictures. The school had many different lines like dance, running a restaurant, woodshop and campaigning.",
      "The photography line and the campaigning line took a trip to Jordan to interview Syrian refugees, when we came home, we worked closely together on a charity event, where we raised money to help them. I created roller banners with QR codes leading to videos and link where you could donate. I also designed the logo they used for everything; I still have the t-shirt.",
      <LinkButton
        link={"https://www.youtube.com/watch?v=4QO57kLz63I"}
        text={"Here is a YouTube video about our trip"}
        target={"_blank"}
      />,
      "",
      "Here are some of the pictures I took on this trip and sold to help Syrian refugees.",
      <Gallery />,
    ],
  },
];

export const CoursesHeadingAndParagraphs_eng = [
  {
    location: "ExOpi Talent Academy",
    position: "",
    date: "(April 2024 – June 2024)",
    paragraphs: [
      "ExOpi Talent Academy is a 10-week course where we worked on projects to show what we can do, learn new skills and refine our own, while they also help us find a job. Some examples of my tasks during the course were data analysis, Excel manipulation, making Blackjack out of ReactJS and a Python project that looks at links in a CSV file and if they are valid PDF files, they are downloaded and information about each link is saved in another CSV file even if it was not a valid PDF link. For this project I also used multiple threads to cut the download time for all 250 of the links provided from 3 hours to 2 minutes.",
      "To see 2 of these projects you can look at my repository, the other projects are either things that would make no sence to save on GitHub or things that must remain private as it contains sensitive information.",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/ExopiTalentAcademyProjects/"}
        text={"GitHub: ExopiTalentAcademyProjects"}
        target={"_blank"}
      />,
      "Jonas Rasmusen is the head of Talent Academy and Innovation at ExOpi and Bina Hjorth Reichstein is their CEO, and they are both ready to give a reference if you want it.",
      "Here are some of the projects I worked on during those 10 weeks:",
      <LinkButton
        link={"https://www.linkedin.com/in/jonas-rasmussen-297a18b9/"}
        text={"LinkedIn: Jonas Rasmusen"}
        target={"_blank"}
      />,
      <LinkButton
        link={"https://www.exopi.dk/talent-acedemy/"}
        text={"ExOpi Talent Academy"}
        target={"_blank"}
      />,
    ],
  },
  {
    location: "Course in IT security - CompTIA Security+",
    position: "",
    date: "(December 2023 – January 2024)",
    paragraphs: [
      "Here I learned about the components of a computer along with possible add-ons and update and replacement of those components. I also learned preventative measures to ensure the safety of a device, along with the detection and removal of malware. Managing Windows, MacOS and Linux devices, through settings, control panel and the command line interface. Wireless security implementations, mobile security solutions, best documentation practices, privacy, licensing & policy concepts, proper communication techniques and professionalism, scripting techniques, remote access methods and a lot more.",
      <LinkButton
        link={
          "https://nyledige.dk/kurser/systemadministration-it-sikkerhed-og-certificeringer/comptia/it-sikkerhedskursus/"
        }
        text={"CompTIA Security+"}
        target={"_blank"}
      />,
    ],
  },
  {
    location: "Courses I've taken on LinkedIn Learning",
    position: "",
    date: "",
    paragraphs: [
      <LinkButton
        link={"https://lnkd.in/eS6tde62"}
        text={"TypeScript Essential Training"}
        target={"_blank"}
      />,
      <LinkButton
        link={"https://lnkd.in/eEpDfyzt"}
        text={"Azure AI: The Big Picture (2023)"}
        target={"_blank"}
      />,
      <LinkButton
        link={"https://lnkd.in/esz2VXU3"}
        text={"Microsoft Power Automate Essential Training"}
        target={"_blank"}
      />,
      <LinkButton
        link={"https://lnkd.in/eEc-F4yJ"}
        text={"From React to React Native"}
        target={"_blank"}
      />,
      <LinkButton
        link={"https://lnkd.in/e_z-CkRi"}
        text={"Microsoft Power Platform App Maker (PL-100) Cert Prep"}
        target={"_blank"}
      />,
    ],
  },
];

export const NoPage_eng = {
  heading: "There is no content on this page",
  content: "Back to the start page",
};

export const FooterHeading_eng = "Contact information";

export const BackToTheTopComponentText_eng = "Back to the top";

export const LightDarkMode_eng = ["Light mode", "Dark mode"];
