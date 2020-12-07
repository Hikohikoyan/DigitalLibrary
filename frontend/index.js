$(function () {
    // 首页进入搜索页面
    $("#first").bind('click', function (e) {
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
    })
    // 刷新返回主页
    $("#home").bind('click', function (e) {
        window.location.reload();
    })
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