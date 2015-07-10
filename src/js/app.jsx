var React = require('react');
var Component = require('./Component.jsx');

// Here we put our React instance to the global scope. Make sure you do not put it
// into production and make sure that you close and open your console if the
// DEV-TOOLS does not display
window.React = React;


var App = React.createClass({
    render: function() {
        return (
            <div>
		            <h1>My App</h1>
                <Component>
                  <span>My Component</span>
                </Component>
            </div>
        )
    }
});

React.render(
    <App/>,
    document.getElementById('main')
);
