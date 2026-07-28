# This is a code version of my CV - Inga Helgadottir

## About the project

This project is a React.js single-page application (SPA) that functions as an interactive, dynamic version of my CV. I built it out of my love for React and plan to continuously update and expand it.

You can view the live version hosted for free on [Netlify](https://inga-helgadottir-code-cv.netlify.app/).

## The folder structure

- **src**
- **Components**: All JSX components.
  - **PageParts**: Reusable sections shared across pages.
  - **Pages**: Main pages (AboutMe, MyCourses, etc.).
- **Images**: All images used.
- **Styles**: CSS files, including theme variables.
- **Text**: Multilingual text content (English and Danish).

## The code

### index.jsx

- Sets up App.jsx inside StrictMode which lets you find common bugs in your component early.
- Then it renders inside the div with the class "root" inside publlic/index.html

### App.jsx

- Makes useStates for the currentLanguage and the currentPage, gotten from localStorage
- Sets up the surrounding elements on every page (Header, Navbar, BackToTheTopComponent, Footer)
  - The Header gets the props currentLanguage and setCurrentLanguage variables
  - The NavBar gets the props currentLanguage and currentPage
  - The BackToTheTopComponent and the Footer get the currentLanguage prop
- Sets up the routes to all pages (AboutMe, MyCourses, MyEducation, MyExperience and NoPage for an incorrect url)
  - NoPage gets the prop currentLanguage
  - All the other pages get the currentLanguage and the setCurrentPage props
- The currentLanguage is used in the pages useEffects, where getText is called to make sure that whenever the language changes the component is updated and calls getText again

### The Text folder

- this folder has 2 jsx files Dansk and English
- these files conatin all of the websites text saved as variables for easy access
  - Most are objects but some are strings and arrays

### ColorVariables.css

- This file has all of the main colors used on the site saved in root variables
  - This is to make it easier to change the theme of the page
- Here is a small section of this file

```css
:root {
  --headerBackgroundColorGradient: linear-gradient(to right, #2ec4b6, #3abeff);

  --primaryTextColor: #0f172a;
  --primaryBackgroundColor: #c1d6e0;
}
```

### GetCurrentLanguage.jsx

- getCurrentLanguage()
  - Checks what language is registered in localStorage
  - Returns "eng" : "dk"
- getText(whichText)
  - calls getCurrentLanguage saves it in a variable
  - Uses an if else to check the language
  - Then a switch case uses the whichText variable to find and return

### Pages and PageParts (In the order they appear in the folder structure)

- **Pages:** These are the pages you can choose from in the Navbar
  - **AboutMe**
  - **MyCourses**
  - **MyEducation**
  - **MyExperience**
  - **NoPage (for an incorrect url)**

- **PageParts:** These are all the page parts used in more than one page
  - **Arrow**
  - **BackToTheTopComponent**
  - **ChangeTheme**
  - **ChangeThemeFunctionality**
  - **Footer**
  - **Gallery**
  - **Header**
  - **NavBar**
  - **Section**
  - **UpdateLanguage**

#### AboutMe, MyCourses, MyEducation and MyExperience all follow the same script

- Calls getText which gets a response that looks like this

```javascript
[
  {
    // One object for each section
    location:
      "Main heading in About me, Workplace in Experience, school in Education and the name of the Courses I took",
    position:
      "position for Experience, education title for Education or empty for About me and Courses",
    date: "Empty in About me and start date - end date for the rest",
    paragraphs: ["paragraph", "paragraph 2", "paragraph 3"],
  },
];
```

- Then return an \PageParts\Section.jsx element with the text as a prop

### Section.jsx

- Takes a text porp with the object array just mentioned
- Maps it into a sections of h3, paragraphs and a div for the paragraphs because I also have links and a Gallery in there
- If the paragraph is empty it gives some space between paragraphs

```javascript
<div>
  {element.option?.map((section, key) => {
    return (
      <section key={key} className="section">
        <h3>{section.location}</h3>
        <p>{section.position}</p>
        <p>{section.date}</p>
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
```

#### Arrow

- The svg arrow I created for the Gallery and the BackToTheTopComponent
- It takes an onClick prop
  - Which in the Gallery leads to the next image
  - BackToTheTopComponent calls Arrow with no props because it has an onClick on the entire component
- It is in the form of a jsx file to make it easier to manipuilate

#### BackToTheTopComponent

- Gets the text
- Calls Arrow with no props, just for display
- Returns a button with a scroll to the top function

```javascript
<button
  id="backToTheTopArrowButton"
  onClick={scrollToTop}
  aria-label="Back to the top"
>
  {text}
  <Arrow />
</button>
```

#### ChangeTheme

- ChangeTheme is the display side of the theme change
- All of the real functionality is imported from ChangeThemeFunctionality

```javascript
import {
  setDarkTheme,
  setLightTheme,
  getCurrentTheme,
} from "./ChangeThemeFunctionality";
```

- It starts by calling getText, which returns the array with the buttons text

```javascript
["Light mode", "Dark mode"] : ["Lys tilstand", "Mørk tilstand"]
```

- Returns a div with 2 buttons calling to the set of their theme

#### ChangeThemeFunctionality

- getCurrentTheme()
  - Checks localStorage
  - Returns "dark" : "light"
- setLightTheme() and setDarkTheme()
  - Create an object with all color variables and their values
  - Calls setProperties with the color object
- setProperties(colorObject)
  - Sets all the color variables saved in :root in the file Styles/ColorVariables.css

```javascript
document.documentElement.style.setProperty(
  "--headerBackgroundColorGradient",
  colorObject.headerBackgroundColorGradient,
);
```

#### Footer

- The footer only needs to get a single string value for the contact information heading
- The rest are just links so they don't need to be translated

#### Gallery

- Inside the variable EducationHeadingAndParagraphs there is a section that includes a gallery of some photos i took in Jordan
- In the begining of this component I create a useState for the current image id
- importAll(r)
  - Imports all of the images saved in a given folder path
- The images variable calls the importAll function with the path to the folder in Images called Jordan-pics
- thumbnailClicked(id)
  - Sets the current image id to the image clicked
- nextId(whichArrow)
  - Checks which arrow was clicked
  - Updates id/image
- I return an image and a map of all the images as thumbnails
- Then I call my svg Arrow twice once one with the variable onClick={() => nextId("left")} or onClick={() => nextId("right")}

#### Header

- The header starts by creating useStates for the text
- The header calls getText for the heading and the content
- Then it returns an image of me, my name, the text, light and dark theme buttons and the update language section

#### NavBar

- The NavBar starts by creating useStates for the NavBarOptions and the current page
- The useEffect
  - Calls getText()

```javascript
export const NavBarOptions_eng = [
  {
    id: 1,
    optionName: "About me",
    optionDestination: "/AboutMe",
  },...
];
```

- Checks if there is a current page number saved in localStorage
  - If not it set's it to the default
- giveOrTakeChosenId(e, id)
  - this function checks if the current element id is empty
    - If it is the useState and localStorage will be updated
    - Else do nothing
      - Because every main page has the folloing two lines

```javascript
localStorage.setItem("chosenNavElement", "id");
setCurrentPage("id");
```

- The NavBar returns the options mapped into Links

#### UpdateLanguage

- updateLanguageFunction(updateTo)
  - Sets the global useState to either "eng" : "dk"
  - Sets the localStorage variable to "eng" : "dk"
- Returns a section with the svg images of the UK and the Danish flags
  - Each with a onClick that calls updateLanguageFunction

<br/>
<br/>
<br/>
<br/>
<br/>

---

---

---

# Original text generated when I created the project

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
