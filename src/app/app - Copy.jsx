import React, { Component } from 'react';/* 8.4K (gzipped:3.4k) eita dile run kore na*/
import './app.css';

/* import Profile from '../features/profile/index.jsx';  eikane nicer lin linklei hobe , karo jonre content folder file ta index thake t alinkha lage na */
import Profile from '../features/profile';

const profiles =[
	{
		info:{
			name:'kibria',
			email:'kibria@com',
			bio:'Lorem ipsum dolor sit amet.',
			phone:'0123456789'
		  },
		skills:['js','php','wp'],
		links:[
			{text:'facebook', url:'#'},
			{text:'linkedin', url:'#'},
			{text:'twitter', url:'#'}
		  ]
	},
	{
		info:{
			name:'rannay',
			email:'rannay@com',
			bio:'rannay ipsum dolor sit amet.'
		  },
		skills:['wp','php','vue'],
		links:[
			{text:'linkedin', url:'#'},
			{text:'facebook', url:'#'},
			{text:'twitter', url:'#'}
		  ]
	},
	{
		info:{
			name:'khandaker',
			email:'rannay@com',
			bio:'rannay ipsum dolor sit amet.'
		  },
		skills:['wp','php','vue'],
		links:[
			{text:'linkedin', url:'#'},
			{text:'facebook', url:'#'},
			{text:'twitter', url:'#'}
		  ]
	},
	{
		info:{
			name:'nabil',
			email:'nabil@com',
			bio:'nabil ipsum dolor sit amet.',
			phone:'9852232'
		  },
		skills:['wooc','php','vue'],
		links:[
			{text:'twitter', url:'#'},
			{text:'linkedin', url:'#'},
			{text:'facebook', url:'#'}
		  ]
	},

];

// xxxxxxxxxxx nicher function ta (Functional component)
function IamFunctional(props){
	console.log(props)
	return(
		<div>
			<h2>i am functinal Component</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere soluta laudantium laborum vel et, nulla aliquid deserunt rerum officiis tempora.</p>
		</div>
	)
}

// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class App extends Component{
	render(){
		return(
			<div className='App'>
				{profiles.map(profile =>(
					<div>
						<h2>Profile For - {profile.info.name}</h2>
						<Profile
							info={profile.info}
							skills={profile.skills}
							links={profile.links}
						 />
						 <hr/>
					</div>
				))}

				<IamFunctional props1='props1' props2='props2' />
			</div>
			);
		}
	}
export default App;