![Title](public/images/walk-safe-banner.png)

<p align="center">
     <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript"/>
     <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="html5"/>
     <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="css3"/>
     <img src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white" alt="sass"/>
     <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react"/>
     <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react router"/>
</p>
<p align="center">
     <img src="https://img.shields.io/badge/GraphQL%20-%2343853D.svg?&color=lightgray&style=for-the-badge&logo=graphQL&logoColor=ff69b4" alt="graphql"/> 
     <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="heroku"/>
     <img src="https://img.shields.io/badge/travisci%20-%232B2F33.svg?&style=for-the-badge&logo=travis&logoColor=white" alt="travisci"/>
     <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" alt="cypress"/>
     <img src="https://img.shields.io/badge/npm-%23cb0000.svg?logo=npm&logoColor=white&style=for-the-badge" alt="npm" />
</p>

[View Live Application Here](https://walk-safe-frontend.herokuapp.com/)

## Table of Contents
* [Description](#description)
* [Learning Goals](#learning-goals)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Demos](#demos)

## Description

Created to empower individuals to walk alone, Walk Safe brings a user's community along from the trip. Utilizing Geolocation and SMS messaging APIs, we keep a user's community informed of their trip status from start to finish. Should an unforeseen trip interruption arise, Walk Safe will immediately alert the user's contact. We've got your back.

## Walkthrough

1) Visit https://walk-safe-frontend.herokuapp.com/ and view the main page of the application
2) Navigate to the "hamburger" menu in the upper-right corner and click the icon to open dropdown and expand navigation options
3) Select the "Add Contact" option to route to the AddContact page
4) Enter your contact's information into the form: name, and full phone number (including country code!)
5) After you've submitted your contact, navigate back to the "New Trip" view by clicking the "Walk Safe" title or by clicking "Plan Trip" in the dropdown menu
6) Create your trip in the form:
     - Type in your starting and ending addresses and select the autocompleted version provided by GoogleMaps
     - Select your transportation type
     - Select the contact you want to keep informed of your trip status
     - Submit Trip!
7) After you submit your trip, you will be provided an estimated trip time. Your trip will start after you've confirmed by clicking "Start Trip"
8) A countdown timer will then begin, and if you reach your destination earlier than expected, you may click the "End Trip" button and your contact will be notified that you've made it safely to your destination.
9) Should your ETA expire before you have made it to your desination, an alert will pop up with the option to extend your trip time:

9a) If you select more trip time, your contact will be alerted you have extended your trip.

9b) *If you fail to extend your trip and your ETA has expired, your contact will be instantly alerted that you have not safely arrived to your destination and to contact you immediately*


## Learning Goals

- GraphQL + Apollo
- Utilize a GoogleMaps API
- Implement SMS messaging
- Create an UI/UX friendly application
- Create an engaging & useful application

*Minimum Viable Product (MVP)*:  MVP:
#### 1 user flow:
- Main page
- AddContact page
- CurrentTrip page
- Sad path: user doesn't end trip

## Notable Features

- GoogleMaps Places API to autocomplete starting point and end destination addresses
- GoogleMaps API data received from server to determine estimated trip time
- Twilio SMS Messaging API to send "trip started", "trip ended", "trip extended", and "alert!" notifications to user's selected contact
- React Toastify package to display popup windows notifying the user of successful/unsuccesful SMS message delivery
- Apollo + GraphQL to receive contact and trip data from server
- React 'countdown-circle-timer' package to provide intuitive visual display of estimated trip time
- React + React Hooks to navigate user flow
- AddContact component enabling user to create custom contacts to receive automatic SMS messaging notifications

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

## Demos

* Application in iPhone 6/7/8 mobile view

|User Trip Form Submission<!-- .element: style="text-align:center;" -->|User Trip Start & Countdown Timer<!-- .element: style="text-align:center;" -->|
|-------|-------|
|![](https://media.giphy.com/media/ywCOALjE8R2A31wiIC/giphy.gif)|![](https://media.giphy.com/media/Jw0QNQMDwGE4Dexeu7/giphy.gif)<!-- .element: style="text-align:center;" -->|

|Timer Expiration & Trip Extension<!-- .element: style="text-align:center;" -->|Extension End & Alert Scenario<!-- .element: style="text-align:center;" -->|
|-------|-------|
|![](https://media.giphy.com/media/ppeuYjyLKjYYoIdPw0/giphy.gif)<!-- .element: style="text-align:right;" -->|![](https://media.giphy.com/media/f408om0XQlUh1ixdCW/giphy.gif)<!-- .element: style="text-align:right;" -->|


|"Add Contact" Functionality<!-- .element: style="text-align:center;" -->|Light/Dark Mode Theme Toggle<!-- .element: style="text-align:right;" -->|
|-------|-------|
|![](https://media.giphy.com/media/8GN2yFydL5DbYFfmhH/giphy.gif)<!-- .element: style="text-align:center;" -->|![](https://media.giphy.com/media/mYj4wHb4LtRBqmXxKL/giphy.gif)<!-- .element: style="text-align:right;" -->|
