// const baseurl = "http://localhost:90/";

function hideAlert() {
    $("#alert").fadeOut();
}

function myalert(str) {
    $("#alert_h2").text(str);
    $("#alert_h2").slideToggle();
}
//编写alert内信息
//登录到个人中心
$("#submit").bind('click', function (e) {
    var type = $("#alert>h1").text();
    var username = "",
        pwd = "";
    username = $(".alert_input")[0].value;
    pwd = $(".alert_input")[1].value;
    console.log(username);
    if (check(username) && check(pwd)) {
        if (type == "注册") {
            sign(username, pwd, 1);
        } else if (type == "登录") {
            sign(username, pwd, 2);
        } else if (type == "管理员登录") {
            sign(username, pwd, 3);
        }else if (type == "管理员申请"){
            sign(username,pwd,4);
        }
    }
})

function check(str) {
    str = String(str);
    str.replace("<script>", "");
    str.replace("alert", "");
    str.replace("</>", "");
    if ((/(\w+.html)$/).test(str) == true) {
        myalert("请输入内容!");
        return false;
    }
    var patt_illegal = new RegExp(/[\@\#\$\ % \^\ & \ *  {\}\:\\L\ < \ > \?}\'\"\\\/\b\f\n\r\t]/g);
    if (patt_illegal.test(str) == true) {
        //错误信息
        myalert("请输入正确格式的信息！");
        return false;
    } else if (str == "") {
        myalert("请输入内容!");
        return false;
    } else {
        return true;
    }
}
$("#addF").bind('click',function(e){
    addFurniture();
})
function addFurniture(){
    var name = $("#add_name").val();
    var type = $("#add_type").val();
    var pic =  $("#add_pic").val();
    var intro = $("#add_intro").val();
    // if(check(name)){
        var furni = {
            'name':name,
            'type':type,
            'pic':pic,
            'intro':intro
        }
        $.ajax({
            type: "POST",
            url: baseurl+"addFurni/", //默认当前页
            contentType: "application/json;charset=UTF-8;Access-Control-Allow-Origin;",
            data: JSON.stringify(furni), //格式{key:value}
            dataType: "json",
            // beforeSend: function () {}, //请求发送前回调,常用验证
            success: function (response) { //请求成功回调
                console.log(response);
                if (response.errcode == 0) {
                    alert(response.errmsg);
                    $("#addManage").slideToggle();
                } else {
                    $("#attention").text(response.errmsg);
                }
            },
            error: function (e) { //请求超时回调
                if (e.statusText == "timeout") {
                    alert("请求超时")
                }
            },
            complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
        })
    
    // }
}
function sign(username, pwd, type) {
    var user = {
        "name": username,
        "username": username,
        "passwd": pwd
    };
    var url = "";
    switch (type) {
        case 1:
            url = baseurl+"user/"
            break;
        case 2:
            url = baseurl+"login/"
            break;
        case 3:
            url = baseurl+"Slogin/"
            break;
        case 4:
            url = baseurl+"Ssign/";
            user = {
                "name": username,
                "username": username,
                "passwd": pwd,
                "power" : $("#申请权限").val()
            };
            break;
        default:
            break;
    }
    $.ajax({
        type: "POST",
        url: url, //默认当前页
        contentType: "application/json;charset=UTF-8;Access-Control-Allow-Origin;",
        data: JSON.stringify(user), //格式{key:value}
        dataType: "json",
        // beforeSend: function () {}, //请求发送前回调,常用验证
        success: function (response) { //请求成功回调
            console.log(response);
            if (response.errcode == 0) {
                alert(response.errmsg);
                setTimeout(() => {
                    hideAlert();
                }, 900);
                sessionStorage.setItem('user', username);
                if (type == 3||type == 4) {
                    sessionStorage.setItem('manager', true);
                    writeIntro();
                }
            } else if (response.errcode == 1) {
                alert(response.errmsg);
                Aalert(0);
            } else {
                alert(response.errmsg);
            }
        },
        error: function (e) { //请求超时回调
            if (e.statusText == "timeout") {
                alert("请求超时")
            }
        },
        complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
    })
}
$("#search").bind('click',function(e){
    search();
    $("#search").attr('disabled',true);
    setTimeout(() => {
        $("#search").attr('disabled',false);
    }, 400);
})
$("#quit1").bind('click',function(e){
    sessionStorage.clear();
    window.location.reload();
})
$("#quit2").bind('click',function(e){
    sessionStorage.clear();
    window.location.reload();
})
function search(){
        var name = String($("#furni_name").val());
        var type = $("#furni_type").val();
        var size = $("#furni_size").val();
        var furni = {
            'name':name,
            'type':type,
            'size':size
        }
        console.log(furni);
        if(check(name)){
            $.ajax({
                type: "POST",  //默认get
                url: baseurl+"f_name/",  //默认当前页
                contentType: "application/json;charset=UTF-8;Access-Control-Allow-Origin;",
                data: JSON.stringify(furni),  //格式{key:value}
                dataType: "json",
                beforeSend: function () {}, //请求发送前回调,常用验证
                success: function (data) {  //请求成功回调
                    clear_result();
                    console.log(data);
                    if(data.length<1){
                        alert("没有搜到相应结果");
                    }else{
                        alert("找到"+data.length+"个结果！");
                        for(var i=0;i<data.length;i++){
                            //console.log(data[i]);
                            writeBook(data[i],"#show_search");
                        }
                    }
                    $("#show_search").css('visibility','unset');
                },
                error: function (e) {  //请求超时回调
                    if(e.statusText == "timeout"){
                        alert("请求超时")
                    }
                },
                complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
            })
        }
}