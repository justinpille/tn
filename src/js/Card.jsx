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
          <div className={'_' + this.props.abrv + ' card'}>
            
          </div>
        );
    }
});
