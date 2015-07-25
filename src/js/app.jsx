var React = require('react');
var Hand = require('./Hand.jsx');
var Card = require('./Card.jsx');
var deck = require('./deck');
var shuffle = require('./shuffle');
var deal = require('./deal');

// Here we put our React instance to the global scope. Make sure you do not put it
// into production and make sure that you close and open your console if the
// DEV-TOOLS does not display
window.React = React;


var hand = deal(shuffle(deck), 3);

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Hand>
                    {
                      hand.map(function(card) {
                        return <Card abrv={card.abrv} key={card.index}></Card>;
                      })
                    }
                </Hand>
            </div>
        )
    }
});

React.render(
    <App/>,
    document.getElementById('main')
);
