# EnterConnected
 
Looking for an easy way to organize activities with friends without having to worry about availability and interests? Looking to connect with friends, but unsure of the best way to reach out? EnterConnected is a free and easy way to create activities with your friends, eliminating the hassle of scheduling.
 
## Inspiration
 
We built EnterConnected to provide an easy way to schedule activities. We hope that EnterConnected will encourage users to connect with friends and develop creative and entertaining activities for everyone to enjoy.
 
We were inspired by the prompt, "What creative outlets could be viable in a post-pandemic age of online connectivity?" In a post-pandemic page, people will be looking to reconnect with their previous friends and find new ones, and to organize in-person activities that have been impossible during the pandemic. But it can be challenging to contact old friends if you are not sure they are interested in an activity, and managing scheduling constraints within a friend group can be challenging. We wanted to enable users to simply express what they would like to do and when. That way, we can automatically schedule activities for friends that have expressed interest in the same activity.
 
## What it does
 
Upon logging into [EnterConnected](https://enterconnected.tech/#/) through a Google account, users will be taken to the EnterConnected homepage where all of their current activities will be listed. To create new activities, the user can click on the "Add activity availability" button and fill out information for the new activity. Once an activity reaches the minimum number of people required, the activity will appear in the "Scheduled activities" page, which is accessible through the tab on the navbar.
 
## What's next for EnterConnected
The current state of EnterConnected lays a strong foundation for a complete product but additional features would bring EnterConnected to the next level. For starters, friend groups can be integrated, which allows users to save groups which they frequently engage in activities with; auto-scheduled activities could be within groups rather than globally. Another feature that can be incorporated is a “people near you” functionality which allows users to easily find new users to connect with. Along with this, a messaging function can be added to contact the users you connect with through the “people near you” function. Finally, a notification feature can be implemented so users can receive a text or email when an event is scheduled rather than needing to view the website.
 
## Challenges we ran into
We had never worked with a Cassandra database prior to this project, so learning CQL syntax and how to best structure our data took some time. The landing page with a crossfading image slideshow was difficult to code in React, and we had to try many approaches before finding one that was effective.
 
## Accomplishments we're proud of
We are proud to have created an application with many practical features that would help users in real world situations. With a clean and user-friendly interface, as well as many functional features, the product we created serves as a great proof of concept for a potential future product. 
 
## What we learned
Through the 24 hours we worked on this project, we were able to learn and reinforce many different skills. Most notable of these include, working with a Cassandra database using DataStrax Astra’s Cassandra-made-easy service and hosting on Google Platform’s App Engine.
 
## Built with
 
The frontend for EnterConnected is built with React and hosted on Github Pages with a custom domain ([enterconnected.tech](https://enterconnected.tech/#/)) provided by Domain.com. We use Google Cloud Platform's OAuth 2.0 API for user logins.
 
The backend for EnterConnected is built with Java Spring and hosted on Google Cloud Platform’s App Engine. It connects to a Cassandra database (also hosted on Google Cloud) created using DataStax Astra’s Cassandra-made-easy service.
