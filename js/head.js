'use strict';

var React = require('react');

var Head = React.createClass({
    render: function() {
        return (
            <div className="topTitle">
                <div className="toplogo">
                    <span>BOS系统</span><b></b>
                </div>
                <a className="topExit" href="#">退出</a>
            </div>
        )
    }
})

module.exports = Head;