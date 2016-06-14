'use strict';

var React = require('react');

var Menu = React.createClass({
    render: function() {
        return (
            <div id="leftWrap" className="leftDiv">
            <div className="headPortrait">
            <div className="headPhoto"><img src="../img/photo.png" /></div>
            <div className="headMess">
            <span>张三四</span>
            <b>18813111922</b>
            </div>
            </div>

            <div id="jquery-accordion-menu" className="jquery-accordion-menu red">
            <ul id="demo-list">
            <li className="active"><a href="#"><i className="fa fa-home"></i>产品管理 </a></li>
            <li><a href="#"><i className="fa fa-glass"></i>订单管理 </a></li>
            <li><a href="#"><i className="fa fa-file-image-o"></i>会员管理 </a><span className="jquery-accordion-menu-label">
            12 </span></li>
            <li><a href="#"><i className="fa fa-cog"></i>财务管理 </a>
            <ul className="submenu">
            <li><a href="#">有什么 </a></li>
            <li><a href="#">不知道 </a></li>
            <li><a href="#">Design </a>
            <ul className="submenu">
            <li><a href="#">Graphics </a></li>
            <li><a href="#">Vectors </a></li>
            <li><a href="#">Photoshop </a></li>
            <li><a href="#">Fonts </a></li>
            </ul>
            </li>
            <li><a href="#">Consulting </a></li>
            </ul>
            </li>
            <li><a href="#"><i className="fa fa-home"></i>系统管理 </a></li>
            <li><a href="#"><i className="fa fa-suitcase"></i>Portfolio </a>
            <ul className="submenu">
            <li><a href="#">Web Design </a></li>
        <li><a href="#">Graphics </a><span className="jquery-accordion-menu-label">10 </span>
            </li>
            <li><a href="#">Photoshop </a></li>
            <li><a href="#">Programming </a></li>
            </ul>
            </li>
            <li><a href="#"><i className="fa fa-user"></i>About </a></li>
            <li><a href="#"><i className="fa fa-envelope"></i>Contact </a></li>

            </ul>
            </div>

            </div>
        )
    }
});

module.exports = Menu;