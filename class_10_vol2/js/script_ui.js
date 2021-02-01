$(function(){
    init();
});


//기본 시작 함수
function init(){
    // 풀스크린 플러그인
    $("#fullpage").fullpage({
        sectionsColor:['','#eaeef2',"#b6e4fe","#e2dcd4","#666"],
        navigation:true,
        navigationTooltips:["MAIN","PROFILE","SKILL","PORTFOLIO","CONTACT"],
        anchors:["main","profile","skill","portfolio","contact"],
        scrollingSpeed:1500
    });

    // main
    // 링크에 마우스를 올렸을때
    $("#section0 .wrap-link .unit > a").mouseover(function(){
        var _idx = $(this).parent().index() //순서(index) 찾기
        var _class = "select-" + (_idx + 1); //"select-" 문자열에 위에서 찾은 순서(index)값 + 1 더하기
        $("#section0 .wrap-bg").removeClass("select-1 select-2 select-3"); //초기화(모든 select클래스 삭제)
        $("#section0 .wrap-bg").addClass(_class); //해당 select클래스 추가
    });
    // 링크에 마우스를 뺐을때
    $("#section0 .wrap-link .unit > a").mouseout(function(){
        $("#section0 .wrap-bg").removeClass("select-1 select-2 select-3"); //초기화(모든 select클래스 삭제)
    });
    //패럴럭스 배경 효과
    $("#section0").parallax({
        imageSrc:"img/bg_main.png"
    });
}