import React from 'react';
import Project from '../Project';



function Portfolio() {

	//const [projects,setProjects] =useState([
	const projects = [
		{
			name: 'Flambot Corp',
			description:
				'Flambot Corp is a React Application project for our full stack JavaScrip development boot-camp at the University of Texas. This application is a T-shirt store, to shop by filtered selection, sign-up/login, and checkout using Stripe online payment.',
			image: 'project-3.png',
			technologies: [
				'JavaScript',
				'React',
				'IndexedDB',
				'Node.js',
				'Web-vitals',
				'Jest',
			],
			github: 'https://github.com/yoyachi/flambot-corp',
			deployed: 'https://flambot-corp.herokuapp.com/',
		},
		{
			name: 'Now Playing',
			description:
				'Now Playing is a music-focused social media app for sharing and discovering new music. Users can create posts, like posts and add comments. The home feed can be filtered based on different criteria including genre and decade. The is also a search page to find specific users or posts.',
			image: 'now-playing.png',
			technologies: [
				'CSS',
				'MySql2',
				'Node.js',
				'Express.js',
				'Sequelize',
				'Bootstraps',
				'Bcrypt package (to hash passwords)',
				'Dotenv package (to use environment variables)',
			],
			github: 'https://github.com/yoyachi/now-playing',
			deployed: 'https://nowplayingapp.herokuapp.com/',

		},
		{
			name: 'Git It Right App',
			description:
				'This is a game application that uses the OMDb API to gather information on films and grab the top 4 actors from each individual movie. The game also randomly generates the movie along with two incorrect answers. There are 4 correct answers and 2 incorrect answers!',
			image: 'git-it-right.png',
			technologies: [
				'HTML',
				'PureCSS',
				'JavaScript',
			],
			github: 'https://github.com/yoyachi/git-it-right',
			deployed: 'https://drewvena.github.io/git-it-right/',
		},
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that manages finances and budgeting, using a noSQL database, and offline persistance for a great user experience  to have functionality when not connected to the internet.',
			image: 'budget-tracker.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/yoyachi/budget-tracker',
			deployed: 'https://always-budget-tracker.herokuapp.com/',
		},
		{
			name: 'Work Day Scheduler',
			description: 'This is a simple calendar application that allows a user to save events for each hour of the day.',
			image: 'day-scheduler.png',
			technologies: [
				'index.html',
				'CSS',
				'javaScript',
				'moment.js',
				'jquery',
				'bootstrap',
			],
			github: 'https://github.com/yoyachi/workday-schedule',
			deployed: 'https://yoyachi.github.io/work-day-scheduler',
		},


	];

	//console.log(projects)
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project work={projects[0]}></Project>
					</li>
				</ul>

				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project work={projects[1]}></Project>
					</li>
				</ul>

				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project work={projects[2]}></Project>
					</li>
				</ul>

				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project work={projects[3]}></Project>
					</li>
				</ul>

				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project work={projects[4]}></Project>
					</li>
				</ul>


			</div>
		</section>
	);
}



export default Portfolio;
