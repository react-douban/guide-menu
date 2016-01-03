var React = require('react');
var MenuItem = require('./MenuItem.react')

module.exports = GuideMenu = React.createClass({
	
	render: function() {
		var content = this.props.guideMenu.map(function(menuItem) {
			return (
				<MenuItem key={menuItem.key} menuItem={menuItem} onClick={menuItem.onClick} />
			);
		});
		
		return (
			<ul className="guideMenu">{content}</ul>
		);
	}
	
});