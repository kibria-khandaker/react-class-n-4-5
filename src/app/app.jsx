import React, { Component } from 'react';/* 8.4K (gzipped:3.4k) eita dile run kore na*/
import './app.css';

import Tasks from '../features/states';

// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class App extends Component{
	reset= () =>{
		this.setState({count :0},()=>{
			console.log('Reset', this.state.count);
		});
	};

	render(){
		return <div className='App'>
			
			<Tasks />

		</div>;
		}
	}
export default App;