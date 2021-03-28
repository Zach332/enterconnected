import Navbar from "./Navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="p-2 mx-5">
            <h1 id="enterconnected">EnterConnected</h1>
            <p>Looking for an easy way to organize activities with friends without having to worry about availability and interests? Looking to connect with friends, but unsure of the best way to reach out? EnterConnected is a free and easy way to create activities with your friends, eliminating the hassle of scheduling.</p>
            <h2 id="inspiration">Inspiration</h2>
            <p>We built EnterConnected to provide an easy way to schedule activities. We hope that EnterConnected will encourage users to connect with friends and develop creative and entertaining activities for everyone to enjoy.</p>
            <p>We were inspired by the prompt, &quot;What creative outlets could be viable in a post-pandemic age of online connectivity?&quot; In a post-pandemic page, people will be looking to reconnect with their previous friends and find new ones, and to organize in-person activities that have been impossible during the pandemic. But it can be challenging to contact old friends if you are not sure they are interested in an activity, and managing scheduling constraints within a friend group can be challenging. We wanted to enable users to simply express what they would like to do and when. That way, we can automatically schedule activities for friends that have expressed interest in the same activity.</p>
            <h2 id="what-it-does">What it does</h2>
            <p>Upon logging into <a href="https://enterconnected.tech/#/">EnterConnected</a> through a Google account, users will be taken to the EnterConnected homepage where all of their current activities will be listed. To create new activities, the user can click on the &quot;Add activity availability&quot; button and fill out information for the new activity. Once an activity reaches the minimum number of people required, the activity will appear in the &quot;Scheduled activities&quot; page, which is accessible through the tab on the navbar.</p>
            <h2 id="what-s-next-for-enterconnected">What&#39;s next for EnterConnected</h2>
            <p>The current state of EnterConnected lays a strong foundation for a complete product but additional features would bring EnterConnected to the next level. For starters, friend groups can be integrated, which allows users to save groups which they frequently engage in activities with; auto-scheduled activities could be within groups rather than globally. Another feature that can be incorporated is a “people near you” functionality which allows users to easily find new users to connect with. Along with this, a messaging function can be added to contact the users you connect with through the “people near you” function. Finally, a notification feature can be implemented so users can receive a text or email when an event is scheduled rather than needing to view the website.</p>
            <h2 id="challenges-we-ran-into">Challenges we ran into</h2>
            <p>We had never worked with a Cassandra database prior to this project, so learning CQL syntax and how to best structure our data took some time. The landing page with a crossfading image slideshow was difficult to code in React, and we had to try many approaches before finding one that was effective.</p>
            <h2 id="accomplishments-we-re-proud-of">Accomplishments we&#39;re proud of</h2>
            <p>We are proud to have created an application with many practical features that would help users in real world situations. With a clean and user-friendly interface, as well as many functional features, the product we created serves as a great proof of concept for a potential future product. </p>
            <h2 id="what-we-learned">What we learned</h2>
            <p>Through the 24 hours we worked on this project, we were able to learn and reinforce many different skills. Most notable of these include, working with a Cassandra database using DataStrax Astra’s Cassandra-made-easy service and hosting on Google Platform’s App Engine.</p>
            <h2 id="built-with">Built with</h2>
            <p>The frontend for EnterConnected is built with React and hosted on Github Pages with a custom domain (<a href="https://enterconnected.tech/#/">enterconnected.tech</a>) provided by Domain.com. We use Google Cloud Platform&#39;s OAuth 2.0 API for user logins.</p>
            <p>The backend for EnterConnected is built with Java Spring and hosted on Google Cloud Platform’s App Engine. It connects to a Cassandra database (also hosted on Google Cloud) created using DataStax Astra’s Cassandra-made-easy service.</p>
            </div>
        </div>
    )
}
