'use strict';

require('../css/main');

var React = require('react');
var node = document.createElement('div');
document.body.appendChild(node);
var Manage = React.createClass({
    render: function() {
        return (
        <div>
        <div class="topTitle">
            <div class="toplogo"><span>BOS系统</span><b></b></div>
            <a class="topExit" href="#">退出</a>
        </div>
        <div id="leftWrap" class="leftDiv">
            <div class="headPortrait">
            <div class="headPhoto"><img src="/img/photo.png" /></div>
            <div class="headMess">
            <span>张三四</span>
            <b>18813111922</b>
            </div>
            </div>

            <div id="jquery-accordion-menu" class="jquery-accordion-menu red">
            <ul id="demo-list">
            <li class="active"><a href="#"><i class="fa fa-home"></i>产品管理 </a></li>
            <li><a href="#"><i class="fa fa-glass"></i>订单管理 </a></li>
            <li><a href="#"><i class="fa fa-file-image-o"></i>会员管理 </a><span class="jquery-accordion-menu-label">
            12 </span></li>
            <li><a href="#"><i class="fa fa-cog"></i>财务管理 </a>
            <ul class="submenu">
            <li><a href="#">有什么 </a></li>
            <li><a href="#">不知道 </a></li>
            <li><a href="#">Design </a>
            <ul class="submenu">
            <li><a href="#">Graphics </a></li>
            <li><a href="#">Vectors </a></li>
            <li><a href="#">Photoshop </a></li>
            <li><a href="#">Fonts </a></li>
            </ul>
            </li>
            <li><a href="#">Consulting </a></li>
            </ul>
            </li>
            <li><a href="#"><i class="fa fa-home"></i>系统管理 </a></li>
            <li><a href="#"><i class="fa fa-suitcase"></i>Portfolio </a>
            <ul class="submenu">
            <li><a href="#">Web Design </a></li>
        <li><a href="#">Graphics </a><span class="jquery-accordion-menu-label">10 </span>
            </li>
            <li><a href="#">Photoshop </a></li>
            <li><a href="#">Programming </a></li>
            </ul>
            </li>
            <li><a href="#"><i class="fa fa-user"></i>About </a></li>
            <li><a href="#"><i class="fa fa-envelope"></i>Contact </a></li>

            </ul>
            </div>

            </div>

            <div class="rightDiv">
            <div class="rightContent">
            <span class="conPubTitile">员工列表</span>
            <div class="conWrap">
            <table class="publicTableList">
            <tr>
            <th>工号</th>
            <th>姓名</th>
            <th>手机号</th>
            <th>操作</th>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            <tr>
            <td>1000</td>
            <td>张三</td>
            <td>18813111985</td>
            <td>wha</td>
            </tr>
            </table>

            <div class="pagingWrap">
            <ul class="pagination ">
            <li><a href="#">上一页</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">下一页</a></li>
            </ul>
            </div>

            </div>
            </div>
            </div>
            </div>
        )
    }
})
React.render(
    <Manage />,node
);
