(function () {
    var oRight = document.querySelector('.btn-right'),//获取元素
        oLeft = document.querySelector('.btn-left'),
        images = document.querySelectorAll('.art-con-imgs img'),
        index = 0,
        lastIndex = 0;
    console.log(images.length,oRight,oLeft);

    /*自动轮播图*/
    auto();
    function auto() {
        setInterval(btnRight,2000);
    }

    /*点击事件*/
    oRight.onclick= btnRight;
    function btnRight () {
        change();
        index++;
        index %= images.length;
    }
    /*左边点击触发事件*/
    oLeft.onclick = function () {
        change();
        index--;
        index = images.length-1;

    };
    //判断
    /* change(callBack) && change();*/

    /*触发事件*/
    function change() {
        /*清除上一次样式*/
        images[lastIndex].className = "";

        /*当前样式*/
        images[index].className = 'on';
        lastIndex = index;/*纪录当前下标*/
    }
})();


/*二级菜单*/
(function () {
    var oListBox = document.querySelector('.list-box');
    var aLi = document.querySelector('.list-box ul');

    oListBox.onmouseover = function () {
        aLi.style.display = "block";
    }
    oListBox.onmouseout = function () {
        aLi.style.display = "none";
    }
})();

/*回到顶部*/
(function () {
    var oMenu = document.querySelector('.menu');
    onscroll = function () {
        var y = document.documentElement.scrollTop;
        /*if(pageYOffset){
            y = pageYOffset;
        }else{
            y = document.documentElement.scrollTop;
        }*/
        if(y>1000){
            oMenu.style.display = "block"
        }else {
            oMenu.style.display = "none";
        }


    }

})();

/*图片的放大缩小*/
var oImg = document.querySelectorAll('.right li img');
var index = 0;
/*动画*/
for(var i=0;i<oImg.length;i++){
    oImg[i].index = i;
    oImg[i].onmouseenter = function () {
        oImg[index].className = '';
        index = this.index;
        this.className = 'animate';
    }
}



/*获取元素*/
var userName = document.getElementById("userName"),
    tel = document.getElementById("tel"),
    time = document.getElementById("time"),
    card  =document.getElementById("card"),
    n = document.getElementById("s-name"),
    t = document.getElementById("s-tel"),
    ti = document.getElementById("s-time"),
    c = document.getElementById("s-card");

/*// 正则a-zA-Z的内容
var regStr=/[a-zA-Z]/;
// 正则0-9的内容
var regNum=/[0-9]/;
// 特殊字符
var fStrNum=/\W/;*/

/*验证用户名*/
function check() {
    /*输入验证*/
    if(userName.value == ""){
        n.innerHTML = "用户名不能为空！";
        userName.focus();
        return false;
    }
    if(tel.value == ""){
        t.innerHTML = "联系方式不能为空！";
        tel.focus();
        return false;
    }
    if(time.value == ""){
        ti.innerHTML = "请输入预约时间!";
        time.focus();
        return false;
    }if(card.value == ""){
        c.innerHTML = "请输入身份证号码!";
        card.focus();
        return false;
    }
    check();
}

/*表单验证*/
/*格式验证*/
function isChinese(obj) {
    var reg =  /^[\u4E00-\u9FA5]{2,4}$/;

    if(obj.value != "" && !reg.test(obj)){
        n.innerHTML = "请输入中文！";
        userName.value ="";
    }else{
        n.innerHTML = "格式正确";
        n.className = "green";
    }
}
/*验证输入内容*/
function isNum(obj) {
    var phone = /[0-9]/;

    if(obj.value != "" && !phone.test(obj)){
        t.innerHTML = "请输入数字！";

    }if(obj.value.length != 11){
        t.innerHTML = "格式不正确，请重新输入！";
        tel.value = "";
    }
    else{
        t.innerHTML = "格式正确";
        t.className = "green";
    }
}
/*function isDate(obj) {
   /!* /!*var obj_value=obj.replace(/-/g,"/");*!///替换字符，变成标准格式(检验格式为：'2009-12-10')
    var obj_value=obj.replace("-","/");//替换字符，变成标准格式(检验格式为：'2010-12-10 11:12')
    var date1 = new Date();//当前时间
    var date2 = new Date(Date.parse(obj_value));//预约时间
    if( date2 < date1 ){
        ti.innerHTML = "请输入正确的日期！"
    }*!/
    var date = /[0-9]/;

    if(obj.value != "" && !date.test(obj)){
        ti.innerHTML = "请输正确的日期！";

    }else{
        ti.innerHTML = "格式正确";
        ti.className = "green";
    }
}*/
function isId(obj) {
    var num = /^[0-9a-zA-Z]*$/;

    if(obj.value != "" && !num.test(obj)){
        c.innerHTML = "请输身份证号码！";

    }if(obj.value.length != 18){
        c.innerHTML = "格式不正确，请重新输入！";
        card.value = "";
    }
    else{
        c.innerHTML = "格式正确";
        c.className = "green";
    }
}


