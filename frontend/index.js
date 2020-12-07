$(function () {
    // 首页进入搜索页面
    $("#first").bind('click', function (e) {
        showAll();
        $("#first").fadeOut();
        $(".page").css('display','unset');
        $("#h2_search").css('visibility','unset');
    })
    // 关闭弹窗按钮
    $("#close").bind('click', function (e) {
        $("#alert").fadeOut();
    })
    // 搜索按钮
    $("#search").bind('click', function (e) {
        $("#show_search").css('visibility','unset');
    })
    // 首页搜索按钮
    $("#search0").bind('click', function (e) {
        $("#first").fadeOut();
        $(".page").css('display','unset');
        $("#h2_search").css('visibility','unset');
        $("#show_search").css('visibility','unset');
    })
    // 底部多选按钮
    $("#more").bind('click', function (e) {
        $("#sidebar").slideToggle();
    })
    // 【我的】按钮 登录到个人中心
    $("#user").bind('click', function (e) {
        $("#alert").slideToggle();
        alert(1);
    })
    // 刷新返回主页
    $("#home").bind('click', function (e) {
        window.location.reload();
    })
    //html模板 0 text_input文本 1 section_input选择 
    //pos 0 alert 1search
    //parent 父节点id str
    function createHtml(type,name,parent,pos){
        //type 模板类型 name模板标题 parent父节点 pos是否alert
        var html= "";
        var t = "text";
        if(pos == 0){
            clear_alert();
        }
        if(name == "密码"){
            t = "password"
        }
        switch (type) {
            case 0:
                if(pos==0){
                    html = "<div class='input_container' > <label for='alert_input'>"+name+"</label> <input class='alert_input' type='"+t+"'> <p class='input_attention'></p></div>"
                }else{
                    html = "<div class='input_container' id='name_input'><label class='input' for='furni_name'>"+name+"</label><input class='text_input' type='text' id='"+name+"'></div>"
                }
                break;
            case 1:
                if(pos==0){
                    html = "<div class='selection_container'><label for='"+name+"'>"+name+"</label><select class='alert_input' id='"+name+"'><option class='option'>请选择</option></select></div>"
                }else{
                    html = "<div class='selection_container'><label class='input' for='"+name+"'>"+name+"</label><select class='selection' id='"+name+"'><option class='option'>请选择</option></select></div>"
                }
                break;
            default:
                break;
        }
        $(parent).append(html);
    }
    //alert模板 type = 0 登录 1注册 2修改 3普通提示
    function clear_alert(){
        var a = document.getElementById("alert");
        if($("#alert>.input_container")!=null){
            var l = $("#alert>.input_container").length;
            for(var i =l-1;i>0;i--){
                a.removeChild($("#alert>.input_container")[i]);
            }
        }
        if($("#alert>.selection_container")!=null){
            var l = $("#alert>.selection_container").length;
            for(var i =0;i<l;i++){
                a.removeChild($("#alert>.selection_container")[i]);
            }
        }
    }
    function clear_result(){
        var a = document.getElementById("show_search");
        if($(".search_result")!=null){
            var l = $(".search_result").length;
            for(var i =0;i<l;i++){
                a.removeChild($(".search_result")[i]);
            }
        }
    }

    function alert(type) {
        var title = "[提示标题]";
        //var message = "";
        switch (type) {
            case 0:
                title = "登录";
                createHtml(0,"账号","#alert",0);
                createHtml(0,"密码","#alert",0);
                break;
            case 1:
                title = "注册";
                createHtml(0,"账号","#alert",0);
                createHtml(0,"密码","#alert",0);
            default:
                break;
        }
        $("#alert>h1").text(title);
        //$("#alert_h2").text(message);
    }
    //渲染搜索结果
    function writeBook(obj){
        var bookhtml = "<div class='search_result'id='"+obj.ID+"'> \
        <li class='name'>"+obj.name+"</li><image class='furni_conver' src='"+obj.url+"'></div>";
        $("#show_search").append(bookhtml);
    }
    function showAll(){
        clear_result();
        $.ajax({
            type: 'GET',
            url: "http://localhost:90/furni/",  //默认当前页
            contentType:"application/json;charset=UTF-8",
            //data: JSON.stringify(user),  //格式{key:value}
            // url: 'backend/book.json',
            dataType: 'json',
            success: function(data) { 
                console.log(data);
                for(var i=0;i<data.length;i++){
                    writeBook(data[i]);
                }
                $("#show_search").css('visibility','unset');
            },
            error: function(xhr, type) {
            }
        });
    }
})
// $.ajax({
//     url: "book.json", //json文件位置
//     type: "GET",
//     dataType: "json", //返回数据格式为json
//     success: function(data) {
//         console.log(data);
//         var html = "";
//         console.log(data.name);
//         $.each(data, function(i, item) {
//             })
//             // $(".List").append($(html).hide());
//         $(".List").append($(html).hide().fadeIn(1000));
//         // var node = document.getElementsByTagName("li");
//         // for (i = 0; i < node.length; i++) {
//         //     $("li[i]").show();
//         // }
//     }
// })