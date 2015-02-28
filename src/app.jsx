var React = require('react');

var App = React.createClass({
    render() {
        return (
            <h1>hello react world</h1>
        );
    }
    
});


React.render(<App/>, document.getElementById('woot'));