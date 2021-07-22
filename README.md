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

1) Visit https://walk-safe-frontend.herokuapp.com/ and view the main page of the application
2) Navigate to the "hamburger" menu, click the hamburger to expand navigation options
3) Select the "Add Contact" option and navigate to the Add Contact page
4) Enter your contact's information into the form: name, and full phone number (including country code!)
5) After you have submitted your contact, navigate back to the "New Trip" view through the hamburger menu
6) Create your trip in the form:
        - Enter your start and end address and select the autocompleted version provided by GoogleMaps
        - Select your transportation type
        - Select the contact you want to keep informed of your trip status
        - Submit Trip!
7) After you submit your trip, you will be provided an ETA. Your trip starts once you have confirmed that ETA by clicking "Start Trip"
8) A countdown timer will now appear based on the ETA of your trip, at any point in time (once you have made it to your destination, you may select "End Trip" and your contact will be alerted you have made it safely to your destination
9) Should your ETA expire before you have made it to your desination, an alert will pop up with the option to extend your trip time
9a) If you select more trip time, your contact will be alerted you have extended your trip
9b) *If you fail to extend your trip and your ETA has expired, your contact will be immediately alerted that you have not safely arrived to your destination and to contact you*


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

![](https://user-images.githubusercontent.com/71860165/126676707-62728def-5de4-4d36-b43c-3b278629c8ae.gif)

*** User Alert Countdown Mobile

![Watch the video](https://user-images.githubusercontent.com/71860165/126676754-a320792f-2a9a-4538-a60c-2dcf11b25e76.gif)

*** User Extend Trip Mobile

![Watch the video](https://user-images.githubusercontent.com/71860165/126676737-106e3af6-9d6f-4d4c-b9a1-c3a131376f83.gif)

