import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

export class Logo extends Component {
	static propTypes = { // описание свойств компонента через static
		num: PropTypes.number, // количество логотипов
	};

	printLogo = () => {
		const ms = [];
		for(let i = 0; i < this.props.num; i++) {
			ms.push(<img key={ `img_${ i }` } src={logo} className="App-logo" alt="logo" />);
		}
		return ms;
	};

	render() {
		return (
			<React.Fragment>
				{
					this.printLogo()
				}
				{
					this.props.children
				}
			</React.Fragment>);
	}
}

/*
альтернативное описание свойств компонента
Logo.propTypes = {
	num: PropTypes.number, // количество логотипов
};
*/