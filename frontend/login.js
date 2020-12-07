$(function () {
    function myalert(str){
        var message = str;
        $("#alert_h2").text(message);
        if(message==""){
            $("#alert_h2").fadeOut();
        }else{
            $("#alert_h2").fadeIn();
        }
    }
    //编写alert内信息
    //登录到个人中心
    $("#submit").bind('click', function (e) {
        var type = $("#alert>h1").text();
        var username = "",pwd = "";
        if(type=="注册"||type=="登录"){
           username =$(".alert_input")[0].value;
           pwd = $(".alert_input")[1].value;
        }
        console.log(username);
        if(check(username)&&check(pwd)){
            login(username,pwd);
        }
    })
    function check(str){
        str=String(str);
        str.replace("<script>","");
        str.replace("alert","");
        str.replace("</>","");
        if((/(\w+.html)$/).test(str)==true){
            myalert("请输入内容!");
            return false;
        }
        var patt_illegal = new RegExp(/[\@\#\$\ % \^\ & \ *  {\}\:\\L\ < \ > \?}\'\"\\\/\b\f\n\r\t]/g);
        if(patt_illegal.test(str)==true){
            //错误信息
            myalert("请输入正确格式的信息！");
            return false;
        }else if(str==""){
            myalert("请输入内容!");
            return false;
        }else{
            return true;
        }
    }
    function login(username,pwd){
        var user = {
            "name":username,
            "username":username,
            "passwd":pwd
        };
        $.ajax({
            type: "POST", 
            url: "http://localhost:90/user/",  //默认当前页
            contentType:"application/json;charset=UTF-8",
            data: JSON.stringify(user),  //格式{key:value}
            dataType: "json",
            // beforeSend: function () {}, //请求发送前回调,常用验证
            success: function (response) {  //请求成功回调
                console.log(response);
            },
            error: function (e) {  //请求超时回调
                if(e.statusText == "timeout"){
                    alert("请求超时")
                }
            },
            complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
        })
    }
})