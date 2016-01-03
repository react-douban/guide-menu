var React = require('react');
var GuideMenu = require('./GuideMenu.react');
var _ = require('underscore');

module.exports = GuideMenuApp = React.createClass({
	activeItem: function(key) {
		var updated = this.props.guideMenu;
		
		// clear items active statue
		var beforeItem = _.findWhere({"active": true});
		delete beforeItem.active;
		
		// set new active item
		var nowItem = _.findWhere({"key": key});
		nowItem.active = true;
	},
	getInitialState: function(props){
		
		props = props || this.props;
		
		return {
			guideMenu: props.guideMenu
		};
	},
	componentWillReceiveProps: function(newProps, oldProps) {
		this.setState(this.getInitialState(newProps));
	},
	componentWillMount: function() {
		var self = this;
		var guideMenu = this.props.guideMenu;
		
		guideMenu.forEach(function(menuItem) {
			menuItem.onClick = self.activeItem;
		});
	},
	render: function() {
		return (
			<div className="guideMenu-app">
				<GuideMenu guideMenu={this.state.guideMenu} />
			</div>
		);
	}
});

