# EnterConnected

Looking for an easy way to organize activities with friends without having to worry about availability and interests? Looking to connect with friends, but unsure of the best way to reach out? EnterConnected is a free and easy way to create activities with your friends, eliminating the hassle of scheduling.

## Inspiration

We built EnterConnected to provide an easy way to schedule activities. We hope that EnterConnected will encourage users to connect with friends and develop creative and entertaining activities for everyone to enjoy.

We were inspired by the prompt, "What creative outlets could be viable in a post-pandemic age of online connectivity?" In a post-pandemic page, people will be looking to reconnect with their previous friends and find new ones, and to organize in-person activities that have been impossible during the pandemic. But it can be challenging to contact old friends if you are not sure they are interested in an activity, and managing scheduling constraints within a friend group can be challenging. We wanted to enable users to simply express what they would like to do and when. That way, we can automatically schedule activities for friends that have expressed interest in the same activity.

## What it does

Upon logging into [EnterConnected](https://enterconnected.tech/#/) through a Google account, users will be taken to the EnterConnected homepage where all of their current activities will be listed. To create new activities, the user can click on the "Add activity availability" button and fill out information for the new activity. Once an activity reaches the the minimum number of people required, the activity will appear in the "Scheduled activities" page, which is accessibile through the tab on the navbar.

## What's next for EnterConnected

## Challenges we ran into

## Accomplishments we're proud of

## What we learned

## Built with

The frontend for EnterConnected is built with React and hosted on Github Pages with a custom domain ([enterconnected.tech](https://enterconnected.tech/#/)) provided by Domain.com. We use Google Cloud Platform's OAuth 2.0 API for user logins.

The backend for EnterConnected is built with Java Spring Boot and hosted on Google Cloud Platform App Engine. It connects to a database which is created using DataStax Astra's Cassandra-made-easy service.
