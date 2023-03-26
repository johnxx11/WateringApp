/* eslint-disable no-unused-vars */
// window.onscroll = function(){
//     var navBarNode  = $("nav");
//     if (navBarNode.length > 0) {
//         var topScroll = $(document).scrollTop();//滚动的距离,距离顶部的距离
//         if(topScroll >= $("nav").offset().top){  //当滚动距离大于190px时执行下面的东西
//             navBarNode.css({ "position": "fixed", "top": "0", "z-index": "3"});
//             $("body").css({ "margin-top": $("nav").outerHeight()});
//         }else{
//             navBarNode.css({"position": "static"});
//             $("body").css({ "margin-top": "0" });
//         }
//     }
// };


// eslint-disable-next-line no-unused-vars
function getQueryString(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

function formatUnixtimestamp (unixtimestamp){
    if(unixtimestamp == "-"){
        return "-";
    }
    unixtimestamp = new Date(unixtimestamp*1000);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    return year + "-" + month.substring(month.length-2, month.length)  + "-" + date.substring(date.length-2, date.length)
        + " " + hour.substring(hour.length-2, hour.length) + ":"
        + minute.substring(minute.length-2, minute.length) + ":"
        + second.substring(second.length-2, second.length);
}

// eslint-disable-next-line no-unused-vars
function formDate(strtime) {
    var date = new Date(strtime.replace(/-/g, "/"));
    return Date.parse(date) / 1000;
}

function show_dialog(message, on_ok, timer) {
    timer = timer || 100;
    M.toast({
        html: message, 
        classes: "rounded",
        displayLength: 1500,
        completeCallback: on_ok,
        outDuration: timer,
        inDuration: 300,
    });
}


function trim(str) {
    return str.replace(/^\s*|\s*$/g, "");
}


//var SERVER = "http://110.40.205.204:8086";
// var SERVER = "";
var SERVER = "/api";
var SERVER = "http://172.31.230.60:8086";
function server(msg, data, on_ok, on_fail){
    var headers = {};
    var token = $.cookie('token');
    if(token){
        headers["Authorization"] = "Bearer " + token;
    }

    $.post({
        url: SERVER + msg, 
        dataType: "json", 
        contentType: 'application/json', 
        headers: headers,
        data: JSON.stringify(data), success: function(res){
            // var res = JSON.parse(ret);
            if(!res.code){
                show_dialog("server internal error!");
                return;
            }

            if(res.code == "11111" || res.code == "200000"){
                show_dialog(res.msg);
            }else{
                on_ok(res);
            }
        }
    }).fail(function() {
        show_dialog("Plese check your internet network！");
        if(on_fail) on_fail();
    });
}

// //NOTE: this is a fake server.
// function server(msg, data, on_ok){
//     // if(msg == "/user/register"){}
//     // if(msg == "/user/sendVerificationCode?email="){}
//     on_ok({
//       "code": "00000",
//       "data": null,
//       "msg": "fake operation success!"
//     });
// }
