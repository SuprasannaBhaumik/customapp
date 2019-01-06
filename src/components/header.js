import React, {Component} from 'react';

const user = {
	name:'Suprasanna',
	lastName:'Bhaumik',
	age:16
}

class Header extends Component {

	onInputChangeHandler = (event) => {
		console.log(event.target.value);
	}

	render(){
		return (
			<div>
				<h1>Logo!!</h1>
				<input type="text" onChange={this.onInputChangeHandler} />
			</div>
		)	
	};

}

	


export default Header;  
