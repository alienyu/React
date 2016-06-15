'use strict';

require('../css/main');
var Head = require('./head');
var Menu = require('./menu');
var List = require('./list');
var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');
require("./jqueryAccordionMenu");
var node = document.createElement('div');
var listData = [
    {
        number:1,
        name:"dsgd",
        mobile: "1332423432",
        ops: "dsgs"
    },
    {
        number:1,
        name:"dsgd",
        mobile: "1332423432",
        ops: "dsgs"
    },
    {
        number:1,
        name:"dsgd",
        mobile: "1332423432",
        ops: "dsgs"
    }
]
document.body.appendChild(node);
var ManageTwo = React.createClass({
    render: function() {
        return (
            <div>
            <Head />
            <Menu />
            <div className="rightDiv">
            <div className="rightContent">
            <span className="conPubTitile">员工列表</span>
            <div className="conWrap">
            <List data={listData} />
            <div className="pagingWrap">
            <ul className="pagination ">
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

module.exports = ManageTwo;
//ReactDom.render(
//<ManageTwo />,node
//);

/**
 * Created by w10001901 on 2016/6/8.
 */
$(function(){
    //dom��ߵ����Զ���ȡ�������������߶�
    $('#leftWrap').css("height" , $(window).height()+"px");

    //table����ż������ɫ����
    $('.publicTableList tr:even').addClass('evenrowcolor');
    $('.publicTableList tr:odd').addClass('oddrowcolor');

    //�������������߶ȴ���130px��ʱ����logo����ʾ�������
    $(window).scroll(function(){
        if($(document).scrollTop() > 60){
            $('.toplogo > b').text(" - " + $('.conPubTitile').text());
        } else if($(document).scrollTop() < 60) {
            $('.toplogo > b').text("");
        }
    });

    $(document).ready(function () {
        $("#jquery-accordion-menu").jqueryAccordionMenu();
    });


});
