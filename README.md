# Walk Safe
[View Live Application Here](https://walk-safe-frontend.herokuapp.com/)

## Table of Contents
* [Description](#description)
* [Learning Goals](#LearningGoals)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Technologies](#technologies)
* [Demos](#demos)

## Description

Created to empower individuals to walk alone, Walk Safe brings a user's community along from the trip. Utilizing Geolocation and SMS messaging APIs, we keep a user's community informed of their trip status from start to finish. Should an unforeseen trip interruption arise, Walk Safe will immediately alert the user's contact. We've got your back.

## Walkthrough



## Learning Goals



*Minimum Viable Product (MVP)*:  


## Notable Features

- GoogleMaps Places API to autocomplete start and end point address
- GoogleMaps API data received from server to determine trip ETA
- Twilio SMS Messaging API to send start, trip extended, trip end, and alert messaging to user's contact
- Apollo + GraphQL to receive contact and trip data from server
- React Countdown timer to provide visual displays for trip ETA data
- React + React Hooks to navigate user flow
- AddContact component enabling user to create custom contacts to send SMS Messaging to


## Installation

* The application is deployed to Heroku, to view the live application: https://walk-safe-frontend.herokuapp.com/

* To view the application on your local device:

1. Clone down this application
2. Enter `npm i` in your terminal
3. Enter `npm start` in your terminal
4. To view cypress tests open separate tab an enter `npx cypress run`

## Front End Authors
<table>
    <tr>
        <td> Caroline Eubanks <a href="https://github.com/cmeubanks">GH</td>
        <td> Bryan Hohn <a href="https://github.com/bhohnco">GH</td>
        <td> Peter Muellerleile <a href="https://github.com/pcmueller">GH</td>    
    </tr>
    <tr>
        <td><img src="https://avatars.githubusercontent.com/u/73092355?v=4" alt="C. Eubanks" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/71860165?v=4" alt="B. Hohn" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/51062974?v=4" alt="P. Muellerleile" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td>JavaScript</td>
        <td>React</td>
        <td>React Router</td>
        <td>GraphQL</td>
        <td>Hooks</td>
        <td>HTML</td>
        <td>CSS</td>
        <td>SASS</td>
        <td>Cypress</td>
        <td>Heroku</td>
        <td>TravisCI</td>
    </tr>
    </tr>
        <td><img src="https://user-images.githubusercontent.com/73092355/119360616-074c6580-bc68-11eb-8ac1-f1ca05b87bf8.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361040-74f89180-bc68-11eb-845a-29ec9f93f095.png" alt="react" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361186-9d808b80-bc68-11eb-97ee-05bde2700716.png" alt="react router" width="100" height="auto" /></td>
        <td><img src="https://github.com/devicons/devicon/blob/master/icons/graphql/graphql-plain.svg" alt="graphql" width="100" height="auto" /></td>
        <td><img src="https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png" alt="react hooks" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119402191-d553f700-bc99-11eb-8cd3-6ef44023d530.png" alt="HTML" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119402395-1e0bb000-bc9a-11eb-9173-30403b8848d1.png" alt="css" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119351057-49bc7500-bc5d-11eb-9e74-24ede01707c4.png" alt="SASS" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361263-b5f0a600-bc68-11eb-9f41-8e10aa013e7a.png" alt="Cypress" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119402483-3bd91500-bc9a-11eb-9465-edf38b6a68d3.png" alt="Heroku" width="100" height="auto" /></td>
        <td><img src="https://github.com/devicons/devicon/blob/master/icons/travis/travis-plain.svg" alt="TravisCI" width="50" height="auto" /></td>
    </tr>
</table>

## Demos

* Application in Use Mobile

** User Trip Start to Finish
![Watch the video](https://user-images.githubusercontent.com/71860165/126582985-59801333-2159-440b-b0f0-c139975dad29.mov)

*** User Alert Countdown Mobile

![Watch the video](https://user-images.githubusercontent.com/71860165/126582893-43874f48-dbc5-4125-bcf4-8b2438fee103.mov)

*** User Extend Trip Mobile

![Watch the video](https://user-images.githubusercontent.com/71860165/126582932-8193123a-1fda-4577-b85d-440188ab8606.mov)

*** User Text Error Fail

![Watch the video](https://user-images.githubusercontent.com/71860165/126584248-523e360b-59a3-469c-a61b-9dd1c989ef17.mov)
