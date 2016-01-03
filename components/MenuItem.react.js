var React = require('react');

module.exports = MenuItem = React.createClass({
	render: function() {
		var key = this.props.key;
		var menuItem = this.props.menuItem;
		return (
			<li className={"menuItem" + (menuItem.active ? " active" : "")} data-key={key} onclick={this.props.onClick} >
				<a href={menuItem.href} >{menuItem.name}</a>
			</li>
		);
	}
});