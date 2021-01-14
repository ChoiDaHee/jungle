$(function(){
    var loadData;
    var loadData.length; 

    //자리셋팅 버튼
    $(".btn_setting").click(function(){
        $(".section.box_intro").removeClass("on");
        loadDataFn();
    });

    var loadData; //json데이터를 담는 변수
    function loadDataFn(){
        $.ajax({
            url:"js/data.json", //데이터 경로
            dataType:"json",
            success:function(result){
                loadData = result.seatInfo;
                settingSeatFn();
            }
        });
    };


    //자리 배치
    function settingSeatFn(){
        // console.log(loadData.length);
        $(".section.reservation").addClass("on"); //자리배치 보임
        loadDataLength = loadData.length;
        for(var i = 0; i<loadData.length; i++){
            var n = loadData[i].name;
            var p = loadData[i].price;
            var r = loadData[i].reserve;
            // console.log(n, p, r);
            $(".section.reservation > ol").append('<li class="unit"><button data-price="'+p+'" '+r+'>'+n+'</button>');
        }

        $(".section.reservation > ol button").click(function(){
            $(this).addClass("select");

        });
     }
    
     //자리값 업데이트
     function updateInfoFn(){
         var selectArr = []; //배열 초기화&정의
         for(var i = 0; i< loadDataLength; i++){
            if($(".section.reservation > ol button").eq(i).hasClass("select") == true){
                selectArr.push(i);   //선택된 자리의 index 값을 배열에 저장
            }
        }
     }
})