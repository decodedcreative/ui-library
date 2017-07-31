// Import React
import React from 'react';
import AddEffectForm from './AddEffectForm';


class App extends React.Component {

	constructor () {
		super();

		//this.methodName = this.methodName.bind(this);
		this.addEffect = this.addEffect.bind(this);

		this.state = {
			effects: {}
		};
	}

	addEffect(effect) {
		console.log(this.state.effects);

		const effects = {...this.state.effects};
		//const timestamp = Date.now();
		//effects[`effect-${timestamp}`] = effect;
		// set state
		//this.setState({ effects });
	}

	render() {
		return (
			<div className="ui-library">
				<AddEffectForm addEffect={this.addEffect} />
			</div>
		);
	}
}

export default App;
