import Gallery from "../Components/PageParts/Gallery";
import LinkButton from "../Components/PageParts/LinkButton";

const flexRowStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

export const HeaderHeading_dk = "Full-stack udvikler";

export const HeaderContent_dk =
  "Jeg elsker at arbejde med begge front-end og back-end programmering";

export const NavBarOptions_dk = [
  {
    id: 1,
    optionName: "Om Mig",
    optionDestination: "/AboutMe",
  },
  {
    id: 2,
    optionName: "Erfaring",
    optionDestination: "/Experience",
  },
  {
    id: 3,
    optionName: "Uddannelse",
    optionDestination: "/Education",
  },
  {
    id: 4,
    optionName: "Kurser",
    optionDestination: "/Courses",
  },
  {
    id: 5,
    optionName: "Evner",
    optionDestination: "/Skills",
  },
];

export const AboutMeHeadingAndParagraph_dk = [
  {
    location: "Om mig",
    position: "",
    date: "",
    paragraphs: [
      "Jeg er en uddannet Full-stack udvikler (back-end og front-end udvikler) som elsker at kode. Jeg er en nørd med en passion for at lære nye ting og med kode ved jeg, at man aldrig løber tør for nye ting at lære. Jeg foretrækker at gennemtænke min funktionalitet før jeg starter med at kode, så jeg kan få den reneste og smarteste kode muligt. Mit fokus er altid at gøre det nemmest muligt for brugeren at forstå og bruge løsningen, samt gør koden nem at opdatere i fremtiden da flere features bliver tilføjet eller da bedre teknologier kommer frem. Jeg kan bedst lide at arbejde agilt, hvor alt er planlagt og jeg kan også lide da der kommer nye ændringer, midt i projektet. Hos Furesø kommune arbejdede jeg med folk fra mange forskellige afdelinger for at lave værktøj for at gøre deres hverdage nemmere. De fortalte mig hvad de manglede og jeg fandt ud af hvordan jeg kunne lave en løsning til dem.",
      "Jeg er ærlig, venlig, kreativ og er god til at være upartisk og fair. Jeg arbejder godt alene og som en del af en gruppe. Jeg har meget erfaring med at forklare kode-relaterede ting til mennesker der ved lidt eller intet om kode eller computere i det hele taget.",
      "Jeg har altid været god til at huske; jeg har endda lært et sæt spillekort udenad én gang i løbet af to dage. Nogle tal sidder endda fast for livet, som for eksempel dette nummer 0118 999 88199 9119 725 3 fra et tv-program kaldet 'The IT crowd'. Udover kodning kan jeg lide at være sammen med venner, male, tage billeder, bage og at spille alle slags spil. Jeg elsker naturen, dyr og at hjælpe andre.",
      "",
      "Jeg har to GitHub-konti: en, jeg oprettede under webudvikleren, og en, jeg har brugt, siden jeg startede på datamatikeruddannelsen.",
      <div style={flexRowStyle}>
        <LinkButton
          link={"https://github.com/SIngaH"}
          text={"Min webudvikler GitHub konto"}
          target={"_blank"}
        />
        <LinkButton
          link={"https://github.com/Inga-Helgadottir"}
          text={"Min datamatiker GitHub konto"}
          target={"_blank"}
        />
      </div>,
      "",
      "Her er mine kontakt oplysninger",
      <div style={flexRowStyle}>
        <LinkButton
          link={"https://www.linkedin.com/in/inga-helgadottir/"}
          text={"Min LinkedIn profil"}
          target={"_blank"}
        />
        <LinkButton
          link={"mailto:s.inga.helgadottir95@gmail.com"}
          text={"Min email"}
          target={"_blank"}
        />
      </div>,
    ],
  },
  {
    location: "Om denne webside",
    position: "",
    date: "",
    paragraphs: [
      "Websiden er udviklet med React.js; koden hostes på GitHub og er udrullet via Netlify, hvilket sikrer problemfri hosting og opdateringer. Siden har en funktion til skift af tema og giver brugerne mulighed for at vælge mellem engelsk og dansk. De skræddersyede SVG-pileikoner er designet internt for at sikre en ensartet visuel stil.",
      "For en detaljeret gennemgang af koden og dens implementering henvises til README-filen i mit GitHub-repository:",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/CodeCV"}
        text={"GitHub: CodeCV"}
        target={"_blank"}
      />,
      "",
      "Yderligere information på dette websted omfatter:",
      <div style={flexRowStyle}>
        <LinkButton link={"/Experience"} text={"My experience"} />
        <LinkButton link={"/Education"} text={"My education"} />
        <LinkButton link={"/Courses"} text={"The courses I have taken"} />
      </div>,
    ],
  },
];

export const ExperienceHeadingsAndParagraphs_dk = [
  {
    location:
      "Teknika – Copenhagen College of Technology Management and Marine Engineering",
    position: "Gæsteforelæser",
    date: "(November 2024 og oktober 2025)",
    paragraphs: [
      "Jeg blev to gange tilbudt at holde en præsentation for studerende på Teknika. Min første præsentation handlede om Git, GitHub og grundlæggende Python. Den anden præsentation fokuserede på at gå lidt dybere ind i Python og grundlæggende viden omkring API'er, HTML, CSS og vanilla JavaScript.",
      "Begge præsentationer indeholdt øvelser og blev afholdt for studerende på 8. semester tilmeldt IT-linjen.",
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
    position: "Full-stack udvikler",
    date: "(August 2024 – Oktober 2024)",
    paragraphs: [
      "Jeg startede mit praktikforløb hos Furesø kommunes digitaliserings afdeling, den 26ende august og skulle være der i 4 uger, men de bad mig om at blive i 4 uger til, så jeg kunne færdiggøre min opgave og kigge på en anden opgave til. I starten af praktikforløbet fik jeg en Excel-fil og blev bedt om at gøre indholdet søgbart. I starten var der meget usikkerhed omkring hvad, specifikt man skulle kunne søge på (dato, overskrift, indhold...), så hver uge mødtes jeg med en lille gruppe med det jeg havde lavet indtil videre og derfra fandt vi sammen ude af hvad der passer bedst til formålet. Jeg byggede brugergrænsefladen i ReactJS og til et møde fandt de så ud af at alle filerne som man skulle kunne downloade, var i mange forskellige filformater men de skulle alle downloades i PDF-format, så jeg lavede et lille program i Python for at konvertere dem. Da jeg blev færdig med opgaven, havde jeg lidt mere tid, så jeg lavede også et lille Python program som kombinerede nogle Excel-filer baserede på et par kolonner.",
      "Karen Thestrup Cuppers (Webmaster) har skrevet en anmeldelse på LinkedIn: Jeg har haft fornøjelse af at arbejde sammen med Inga i Furesø Kommune. Inga har på kort tid kortlagt og eksekveret et større dataprojekt, som ligeledes blev udbygget undervejs som en naturlig del af projektets udvikling og interessenters input. Stor tak til Inga for hendes omstillingsparathed og gode samarbejde. ",
      <LinkButton
        link={"https://www.linkedin.com/in/karencuppers/"}
        text={"LinkedIn: Karen Thestrup Cuppers"}
        target={"_blank"}
      />,
    ],
  },
  {
    location: "Furesø kommune",
    position: "RPA-udvikler (Robotbaseret procesautomatisering)",
    date: "(December 2024 – Juni 2025)",
    paragraphs: [
      "Kort efter min praktik sluttede, blev jeg kontaktet af Furesø kommune igen for en midlertidig stilling for at hjælpe deres RPA-udvikler. Under min anden uge der havde jeg fået styr på at lave og opdatere robotter i Power Automate, resten af mine første 4 uger blev jeg introduceret til deres vigtigste robotter. Efter min fjerde uge stoppede deres RPA-udvikler og efter det, skulle jeg holde styr på deres 90 robotter alene. Jeg arbejdede for det meste i Power Automate, men brugte regelmæssigt HTML og CSS for at formatere mails og Python scripts for de mere komplicerede funktioner.",
      "Min chef, Christian Bo Christiansen har skrevet en anmeldelse på LinkedIn: Jeg har været leder for og arbejdet sammen med Inga i Furesø Kommune. Inga vedligeholdte og udviklede RPA- løsninger i økonomiafdelingen. Inga havde begrænset erfaring med RPA, da hun startede, men lærte meget hurtigt at løse opgaverne med den daglige drift og udvikling af nye løsninger i Power Automate. Inga var ansvarsfuld omkring sine opgaver, god at arbejde sammen med og hun deltog også gerne afdelings sociale liv. Hvis du/I har Inga i spil til et job, så tag gerne kontakt.",
      <LinkButton
        link={"https://www.linkedin.com/in/christian-bo-christiansen-6095323/"}
        text={"LinkedIn: Christian Bo Christiansen"}
        target={"_blank"}
      />,
    ],
  },
  {
    location: "Danmarks Meteorologiske Institut",
    position: "front-end udvikler",
    date: "(Februar 2023 - Juni 2023)",
    paragraphs: [
      "Som en del af min Datamatiker uddannelse tog jeg praktik og hovedopgaveforløb hos DMI. Der arbejdede jeg på at opdatere en af deres hjemmesider som der hedder VejVejr, da deres forrige version var blevet forældet. Den nye version blev lavet som en Single Page Application i ReactJS, samt mange frameworks, værktøjer og komponentbiblioteker og med GitLab som hosting platform.",
      "Under praktikperioden lavede jeg og min praktikpartner mulighed for at lave overvågning af brugerdefinerede alarmer. Under hovedopgaveforløbet brugte jeg og min praktikpartner moderne visualiseringsværktøjer til at fremvise vejrstationer, beliggendede forskellige steder rundt i Danmark samt deres parametre (tværvind og vindstød) på et kort. I enden af forløbet fik vi en meget god respons fra DMI, samt vores lærer og censor under eksamener.",
      "Anne Marie Munk Jørgensen, leder af Rådgivning og Digitalisering hos DMI var min vejleder i praktikperioden og vil meget gerne give reference til dem der ønsker.",
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

export const EducationHeadingAndParagraphs_dk = [
  {
    location: "CPH-Business i Lyngby",
    position: "Datamatiker",
    date: "(Januar 2021 – Juni 2023)",
    paragraphs: [
      "I løbet af min datamatikeruddannelse lærte jeg Java, SQL, oprettelse af REST API'er ved hjælp af Java Persistence API (JPA) og MYSQL, Unit and integration tests, Python, CD/CI, Maven, Docker, Apache Tomcat, de agile metoder, Extreme programming (XP) og Git (GitHub) i dybden. Jeg har brugt alle disse i mange forskellige projekter, normalt gennem IntelliJ IDEA, men jeg brugte også NetBeans et par gange. Jeg blev også introduceret til flere forskellige frameworks, libraries, værktøjer og sprog. Min uddannelse fokuserede på at hurtigt lære nye teknologier at kende og at bruge dem i mangle forskellige projekter.",
      "For at se mine kompetencer indenfor JPA, kan du se på et JPA øvelsesprojekt jeg lavede for at øve mig til eksamen. Projektet har entitetstabeller som OneSide, OtherOneSide, ManySide og OtherManySide, som jeg kan bruge til at få alle de forskellige relationer:",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/JPA-Notes"}
        text={"GitHub: JPA-Notes"}
        target={"_blank"}
      />,
      "",
      "Jeg tog også et Python valgfag, mit eksamensprojekt var at lavet spillet Hangman, hvor man skulle gætte på enten Rick and Morty karakterers navn som jeg fik fra et gratis API eller film navne fra en CSV-fil jeg fandt online. Jeg brugte også et Python library som hedder Pillow og kan hjælpe med UI delen af spillet.",
      "Her kan du se koden bag Hangman er:",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/PythonEksamensProjekt"}
        text={"GitHub: PythonEksamensProjekt"}
        target={"_blank"}
      />,
      "Her kan du se vores opgaver:",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/PythonOpgaver"}
        text={"GitHub: PythonOpgaver"}
        target={"_blank"}
      />,
    ],
  },
  {
    location:
      "Hovedforløb hos Roskilde Tekniske skole og Grundforløb hos NEXT-uddannelse i København",
    position: "Webudvikler",
    date: "(Januar 2019 – Oktober 2020)",
    paragraphs: [
      "Under webudviklingsuddannelsen lærte jeg HTML, CSS, SASS, Bootstrap, JavaScript, Git (GitHub), JSON og hvordan man bruger REST API'er i dybden, ved at bruge hver af dem sammen i mange forskellige projekter ved hjælp af Visual Studio Code. Jeg blev også introduceret til flere forskellige frameworks, libraries, værktøjer og sprog.",
      "Hver uge lavede vi en hjemmeside som handlede om vores yndlingsfilm, spil, album osv. Et af de mest mindeværdige projekter, jeg arbejdede på, var 40'ernes projektet. Der blev undervist i mange forskellige uddannelser i NEXT, og vi var alle delt op i teams, hvert hold med en front-end udvikler, UI/UX-designer, et par kostumedesignere, et par makeupartister og fotografer. Hvert hold fik et årti, og vi fik 40'erne. Vi arbejdede alle som et team for at lave en hjemmeside dedikeret til vores årti, som desværre ikke længere er online.",
      "For at få en bedre ide om, hvad vi har lært, kan du tage et kig på øvelsesarkivet, jeg oprettede for at blive klar til eksamen: ",
      <LinkButton
        link={"https://github.com/SIngaH/practice"}
        text={"GitHub: practice"}
        target={"_blank"}
      />,
      "",
      "Du kan også se på dette projekt, jeg lavede under datamatikeren for at hjælpe mine klassekammerater under vores frontend-modul:",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/HtmlCssJavascripHelper/"}
        text={"GitHub: HtmlCssJavascripHelper"}
        target={"_blank"}
      />,
    ],
  },
  {
    location: "Engelsk A og Dansk A hos VUC Lyngby og Matematik B hos KVUC.",
    position: "Dansk A, Engelsk A og Matematik B",
    date: "(December 2017 –December 2018)",
    paragraphs: [
      "Jeg tog begge Engelsk A og Dansk 0-A, for at have det på skrift at jeg er fagligt flydende på begge sprog, Matematik B tog jeg for at gøre mig klar til webudvikleren og fordi jeg kan godt lide Matematik.",
      <LinkButton
        link={"https://vuclyngby.dk/"}
        text={"VUC Lyngby hjemmeside"}
        target={"_blank"}
      />,
      <LinkButton
        link={"https://kvuc.dk/"}
        text={"KVUC hjemmeside"}
        target={"_blank"}
      />,
    ],
  },
  {
    location: "Den Økologiske Produktionsskole",
    position: "Fotografi",
    date: "(Januar 2013 - Juni 2015)",
    paragraphs: [
      "En produktionsskole er et sted, hvor man får penge for at lære og derefter bruger den viden til at generere ting, man senere kan sælge, jeg gik på fotograflinjen så selvfølgelig solgte jeg billeder. Skolen havde mange forskellige linjer for eksempel dans, restaurantdrift, træværksted og kampagne.",
      "Fotograflinjen og kampagnelinjen rejste til Jordan for at interviewe Syriske flygtninge, og da vi kom hjem, arbejdede vi tæt sammen om et velgørenhedsarrangement samt Ung Aktion, hvor vi indsamlede penge for at hjælpe dem. Jeg lavede roll-ups med billeder, QR-koder som ledte til videoer og links, hvor man kunne donere. Jeg designede også arrangementets logo, jeg har stadig t-shirten.",
      "",
      <LinkButton
        link={"https://www.youtube.com/watch?v=4QO57kLz63I"}
        text={"Her er et YouTube videoen der blev lavet omkring vores rejse"}
        target={"_blank"}
      />,
      "Her er nogle af de billeder jeg tog under den rejse og solgt for at hjælpe Syriske flygtninge.",
      <Gallery />,
    ],
  },
];

export const CoursesHeadingAndParagraphs_dk = [
  {
    location: "ExOpi Talent Academy",
    position: "",
    date: "(April 2024 – Juni 2024)",
    paragraphs: [
      "ExOpi Talent Academy er en 10-ugers kursus hvor jeg arbejdede på forskellige projekter til at vise dem hvad jeg kan imens jeg lærer nye ting og de hjælper med at finde et job til mig. Nogle af de opgaver jeg arbejdede på, var at lave spillet Blackjack ud af ReactJS og et Python projekt som kigger på en CSV-fil fyldt med linker til PDF filer, projektet kigger på disse links og hvis de er valide PDF-filer, skulle den downloade filen og hvis ikke bliver det link og informationer om hvorfor den ikke virker i en anden CSV-fil. I dette projekt brugte jeg multithreading for at kunne gennemgå de 250 links givet på 2 minutter i stedet for 3 timer, som det tog før multithreading.",
      "For at se koden bag disse 2 projekter kan du kigge på, de andre projekter er privat, da de enten indeholder noget der ikke giver mening at gemme på GitHub eller sensitive informationer.",
      <LinkButton
        link={"https://github.com/Inga-Helgadottir/ExopiTalentAcademyProjects/"}
        text={"GitHub: ExopiTalentAcademyProjects"}
        target={"_blank"}
      />,
      "Jonas Rasmusen er lederen af Talentakademi og Innovation hos ExOpi og Bina Hjorth Reichstein er deres CEO og de er begge klar til at give en reference hvis I vil have den.",
      <div style={flexRowStyle}>
        <LinkButton
          link={"https://www.linkedin.com/in/jonas-rasmussen-297a18b9/"}
          text={"LinkedIn: Jonas Rasmusen"}
          target={"_blank"}
        />
        <LinkButton
          link={"https://www.exopi.dk/talent-acedemy/"}
          text={"ExOpi Talent Academy"}
          target={"_blank"}
        />
      </div>,
    ],
  },
  {
    location: "IT-sikkerheds kursus - CompTIA Security+",
    position: "",
    date: "(December 2023 – Januar 2024)",
    paragraphs: [
      "Her lærte jeg om komponenterne i en computer sammen med mulige tilføjelser og opdatering og udskiftning af disse komponenter. Håndtering af Windows-, MacOS- og Linux-enheder gennem indstillinger, kontrolpanel og kommandolinjegrænsefladen. Trådløse sikkerhedsimplementeringer, metoder til forebyggelse og fjernelse af malware, mobile sikkerhedsløsninger, bedste praksis for dokumentation, privatliv, licens- og politikkoncepter, korrekte kommunikationsteknikker og professionalisme, scriptteknikker, fjernadgangsmetoder og meget mere.",
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
    location: "Kurser jeg har taget på LinkedIn Learning",
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

export const NoPage_dk = {
  heading: "Der er intet på denne side",
  content: "Tilbage til startside",
};

export const FooterHeading_dk = "Kontaktoplysninger";

export const BackToTheTopComponentText_dk = "Tilbage til toppen";

export const LightDarkMode_dk = ["Lys tilstand", "Mørk tilstand"];
