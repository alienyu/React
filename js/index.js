import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Manage from './manage'
import ManageTwo from './managetwo'

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
            <nav>
            //<Link to="manage">管理1</Link>
            //<Link to="managetwo">管理2</Link>
            </nav>
            <section>
            <RouteHandler />
            </section>
            </div>
        );
    }
});

// 定义页面上的路由
render((
    <Router history={hashHistory}>
        <Route path="/" component={ManageTwo}/>
        <Route path="/manage" component={Manage}/>
        <Route path="/managetwo" component={ManageTwo}/>
    </Router>
), document.getElementsByTagName('body')[0])
