'use strict';

var React = require('react');

var List = React.createClass({
    render: function() {
        var listNode = this.props.data.map(function(listData) {
            return (
                <tr>
                    <td>{listData.number}</td>
                    <td>{listData.name}</td>
                    <td>{listData.mobile}</td>
                    <td>{listData.ops}</td>
                </tr>
            )
        })
        return (
            <table className="publicTableList">
                <thead>
                    <tr>
                        <th>工号</th>
                        <th>姓名</th>
                        <th>手机号</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {listNode}
                </tbody>
            </table>
        )
    }
});

module.exports = List;