import React, { Component } from 'react';/* 8.4K (gzipped:3.4k) eita dile run kore na*/
import './app.css';

// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class App extends Component{
	state={
		count:0
	}
	increment = () =>{
		this.setState({count:this.state.count + 1},()=>{
			console.log('Clicked',this.state.count);
		});
	};
	decrement = () =>{
		if (this.state.count>0) {
			this.setState(
				prev => ({count:prev.count - 1}),()=>{
					console.log('Clicked',this.state.count);
				}
			);
		}
	};
	reset= () =>{
		this.setState({count :0},()=>{
			console.log('Reset', this.state.count);
		});
	};
	render(){
		console.log('im render');
		return <div className='App'>		
			<h1>Count = {this.state.count}</h1>
			<button onClick={this.increment}> Increment </button>		
			<button onClick={this.decrement}> Decrement </button>		
			<button onClick={this.reset}> Reset </button>		
		</div>;
		}
	}
export default App;