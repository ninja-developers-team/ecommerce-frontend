import React, { Component } from "react";

export class UpdateFormData extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.UpdateItem}>
					<input
						type="number"
						min="1"
						max="100"
						placeholder="edit order"
						onChange={this.props.updateCount}
					/>

					<input type="submit" value="edit order" />
				</form>
			</div>
		);
	}
}

export default UpdateFormData;
