import React from 'react';

class RemoveBuilding extends React.Component {
	removeBuilding() {
		this.props.removeBuilding()
	}
	render() {
		return (
			<button onClick={this.removeBuilding.bind(this)}>
				Remove Listing
			</button>
		);
	}
}

export default RemoveBuilding;