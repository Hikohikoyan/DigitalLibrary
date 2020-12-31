// $(function () {
    $("#show_search").css('display', 'none');
// 首页进入搜索页面
const baseurl = "http://localhost:90/";
$("#first").bind('click', function (e) {
    $("#show_search").css('display', 'grid');
    showAll("#show_search");
    $("#first").fadeOut();
    $(".page").css('display', 'unset');
    $("#h2_search").css('visibility', 'unset');
})
// 关闭弹窗按钮
$("#close").bind('click', function (e) {
    $("#alert").fadeOut();
})
// 搜索按钮
$("#search").bind('click', function (e) {
    $("#show_search").css('visibility', 'unset');
})
// 首页搜索按钮
$("#search0").bind('click', function (e) {
    $("#first").fadeOut();
    $(".page").css('display', 'unset');
    $("#h2_search").css('visibility', 'unset');
    $("#show_search").css('display', 'grid');
})
// 底部多选按钮
$("#more").bind('click', function (e) {
    $("#sidebar").slideToggle();
})
// 【我的】按钮 登录到个人中心
$("#user").bind('click', function (e) {
    writeIntro();
    $("#sidebar").slideToggle();
    if (checkLogin()) {
        hideResult();
        $("#first").fadeOut();
        $("#show_info").fadeOut();
        if (checkPower()) {
            $("#show_manager").css('display', 'unset');
            showAll("#show_search1");
        } else {
            $("#show_user").css('display', 'unset');
        }
        return;
    }
    $("#alert").slideToggle();
    Aalert(1);
})
// 刷新返回主页
$("#home").bind('click', function (e) {
    window.location.reload();
})
//检查是否登录
function checkLogin() {
    if (sessionStorage.length != 0) {
        return true;
    } else {
        return false;
    }
}

function checkPower() {
    return Boolean(sessionStorage.getItem('manager'));
}
//html模板 0 text_input文本 1 section_input选择 
//pos 0 alert 1search
//parent 父节点id str
function createHtml(type, name, parent, pos) {
    //type 模板类型 name模板标题 parent父节点 pos是否alert
    var html = "";
    var t = "text";
    if (name == "密码") {
        t = "password"
    }
    switch (type) {
        case 0:
            if (pos == 0) {
                html = "<div class='input_container' > <label for='alert_input'>" + name + "</label> <input class='alert_input' type='" + t + "'> <p class='input_attention'></p></div>"
            } else {
                html = "<div class='input_container' id='name_input'><label class='input' for='furni_name'>" + name + "</label><input class='text_input' type='text' id='" + name + "'></div>"
            }
            break;
        case 1:
            if (pos == 0) {
                html = "<div class='selection_container'><label for='" + name + "'>" + name + "</label><select class='alert_input' id='" + name + "'><option class='option'>请选择</option></select></div>"
            } else {
                html = "<div class='selection_container'><label class='input' for='" + name + "'>" + name + "</label><select class='selection' id='" + name + "'><option class='option'>请选择</option></select></div>"
            }
            break;
        case 2:
            //按钮创建
            html = "<input type='submit' class='new_button' id='" + name + "' value = '" + name + "'>";
            break;
        default:
            break;
    }
    $(parent).append(html);
}

//alert模板 type = 0 登录 1注册 2修改 3普通提示
function clear_alert() {
    var a = document.getElementById("alert");
    if ($("#alert>.input_container") != null) {
        var l = $("#alert>.input_container").length;
        for (var i = l - 1; i >= 0; i--) {
            a.removeChild($("#alert>.input_container")[i]);
        }
    }
    if ($("#alert>.new_button") != null) {
        var l = $("#alert>.new_button").length;
        // for(var i =l-1;i>0;i--){
        for (var i = l - 1; i >= 0; i--) {
            a.removeChild($("#alert>.new_button")[i]);
        }
    }
    if ($("#alert>.selection_container") != null) {
        var l = $("#alert>.selection_container").length;
        for (var i = 0; i < l; i++) {
            a.removeChild($("#alert>.selection_container")[i]);
        }
    }
}

function clear_result(parent) {
    var a = document.getElementById(parent);

    var l = $(".search_result").length;
    $(".search_result").remove();
    // if(l!=0){
    // for(var i=l-1;i>=0;i--){
    //     console.log( $(".search_result"));
    //     a.removeChild($(".search_result")[i]);
    // }
    // }
}

function writeIntro() {
    clear_result("#show_search");
    var user = {
        "username": sessionStorage.getItem('user'),
    };
    var ID = "";
    var power = "";
    if (checkPower()) {
        $.ajax({
            type: "POST",
            url: baseurl + "checkP/", //默认当前页
            contentType: "application/json;charset=UTF-8;Access-Control-Allow-Origin;",
            data: JSON.stringify(user), //格式{key:value}
            dataType: "json",
            beforeSend: function () {}, //请求发送前回调,常用验证
            success: function (response) { //请求成功回调
                console.log(response);
                ID = response[0];
                power = response[4];
                sessionStorage.setItem('power',power);
                $("#manage_welcome").text("欢迎回来，管理员" + user.username + "~ 你的ID是" + ID + " ，你的权限是【" + power + "】");

            },
            error: function (e) { //请求超时回调
                if (e.statusText == "timeout") {
                    alert("请求超时")
                }
            },
            complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
        })
    }
}
function checkPermission(){
    power = sessionStorage.getItem('power');
    console.log(power);
    if (power == "ALLPOWER"||power == "WRITEONLY"){
        $("#ifManager").fadeIn();
        return true;
    }else{
        alert("您的权限是"+power+"请申请更高权限！");
        return false;
    }
}
$("#addFurni").bind('click',function(e){
    if(checkPermission()){
        $("#addManage").slideToggle();
    }
})
function Aalert(type) {
    var title = "[提示标题]";
    //var message = "";
    switch (type) {
        case 0:
            title = "登录";
            clear_alert();
            createHtml(0, "账号", "#alert", 0);
            createHtml(0, "密码", "#alert", 0);
            createHtml(2, "管理员登录", "#alert", 0);
            createHtml(2, "注册", "#alert", 0);
            $("#管理员登录").bind('click', function (e) {
                Aalert(3);
            })
            $("#注册").bind('click', function (e) {
                Aalert(1);
            })
            break;
        case 1:
            title = "注册";
            clear_alert();
            createHtml(0, "账号", "#alert", 0);
            createHtml(0, "密码", "#alert", 0);
            createHtml(2, "登录", "#alert", 0);
            $("#登录").bind('click', function (e) {
                Aalert(0);
            })
            break;
        case 3:
            title = "管理员登录";
            clear_alert();
            createHtml(0, "账号", "#alert", 0);
            createHtml(0, "密码", "#alert", 0);
            createHtml(2, "普通账户登录", "#alert", 0);
            $("#普通账户登录").bind('click', function (e) {
                Aalert(0);
            })
            createHtml(2, "申请管理员", "#alert", 0);
            $("#申请管理员").bind('click', function (e) {
                Aalert(4);
            })
            break;
        case 4:
            title = "管理员申请";
            clear_alert();
            createHtml(0, "账号", "#alert", 0);
            createHtml(0, "密码", "#alert", 0);
            createHtml(1, "申请权限", "#alert", 0);
            $("#申请权限").append("<option>ALLPOWER</option>");
            $("#申请权限").append("<option>WRITEONLY</option>");
            $("#申请权限").append("<option>READONLY</option>");
            createHtml(2, "普通登录", "#alert", 0);
            $("#普通登录").bind('click', function (e) {
                Aalert(0);
            })
            createHtml(2, "注册普通账户", "#alert", 0);
            $("#注册普通账户").bind('click', function (e) {
                Aalert(1);
            })
        default:
            break;
    }
    $("#alert>h1").text(title);
    //$("#alert_h2").text(message);
}
//渲染搜索结果

function writeBook(obj, parent) {
    var bookhtml = "<div class='search_result'id='result" + obj[0] + "'> \
        <li class='name'>" + obj[2] + "</li><image class='furni_conver' src='" + obj[6] + "'></div>";
    $(parent).append(bookhtml);
    $("#result" + obj[0]).bind('click', function (e) {
        hideResult();
        $("furni_name").text(obj[2]);
        $("#pic2").attr('src', obj[4]);
        $("#pic3").attr('src', obj[5]);
        $("#pic1").attr('src', obj[6]);
        $("#info").text(obj[7]);
        $("#show_manager").fadeOut();
        $("#show_info").fadeIn();
        checkPermission();
    })
}

function hideResult() {
    $("#search_bar").fadeOut();
    $("#search").fadeOut();
    $("#show_search").fadeOut();
    $("#h2_search").fadeOut();
}

function showAll(parent) {
    // if(parent!="#show_search1"){
    //     clear_result(parent);
    // }
    clear_result("#show_search");
    $.ajax({
        type: 'GET',
        url: baseurl + "furni/", //默认当前页
        contentType: "application/json;charset=UTF-8",
        //data: JSON.stringify(user),  //格式{key:value}
        // url: 'backend/book.json',
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i]);
                writeBook(data[i], parent);
            }
            $(parent).css('visibility', 'unset');
        },
        error: function (xhr, type) {}
    });
}
// })