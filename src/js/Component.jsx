var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            //prop: value
        };
    },
    getInitialState: function() {
        return {
            //state: value
        };
    },
    componentDidMount: function () {
        // Code here
    },
    render: function () {
        return (
          <div>
            <h2>{this.props.children}</h2>
          </div>
        );
    }
});
