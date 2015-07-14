var React = require('react');
var Component = require('./Component.jsx');
var deck = require('./deck');

// Here we put our React instance to the global scope. Make sure you do not put it
// into production and make sure that you close and open your console if the
// DEV-TOOLS does not display
window.React = React;


var App = React.createClass({
    render: function() {
        return (
            <div>
		            <h1>My Program</h1>
                <Component>
                  <span>{deck}</span>
                </Component>
            </div>
        )
    }
});

React.render(
    <App/>,
    document.getElementById('main')
);
