$(function(){
    $(".input_area input[type='text']").keypress(function(event){ //input에 키가 눌리는 순간 발생하는 이벤트
        console.log()
        if(event.keyCode == 13 && $(this).val().length){ //keyCode 13인 enter키가 눌리고 그순간 입력되는 input 값이 있을 경우만 실행 시키는 조건문
            var _val = $(this).val(); //입력된 input의 내용을 담는 변수
            var _class = $(this).attr("class"); //입력된 input의 클래스명을 담는 변수(나 or 상대방의 메세지인지 확인)
            var _time; //입력되는 순간의 시간을 담는 변수

            //현재 시간 구하기
            var _date = new Date(); //Date 객체 - pc의 전체 시간 정보
            var _hh = _date.getHours(); //시간정보중 시간(hour)만 저장
            var _mm = _date.getMinutes(); //시간정보중 분(minutes)만 저장
            var _apm = "오전"; 
            if(_hh > 12){
                _apm = "오후";
                _hh -= 12;
            }
            _time = _apm+" "+_hh+":"+_mm;

            //말풍선 태그에 변수를 담아서 append로 html에 동적으로 추가
            $(".chat_area").append('<div class="item '+_class+'"><div class="box"><p class="msg">'+_val+'</p><span class="time">'+_time+'</span></div></div>');

            //0.01초 딜레이 후 chat_area 맨 끝 item(말풍선)에게 on 클래스를 추가
            setTimeout(function(){
                $(".chat_area .item").last().addClass("on");
            },10)


            //입력된 input의 값을 지워줌(초기화)
            $(this).val("");


            //채팅창이 맨 밑으로 갈수 있게하는 스크롤 이벤트
            var _itemL = $(".chat_area .item").length; //말풍선의 갯수
            var _itemH = 0;
            for(var i=0; i<_itemL; i++){ //반복문 - 각 말풍선의 높이값을 구해서 _itemH에 더해주는 반복문
                _itemH = _itemH + $(".chat_area .item").eq(i).height() + 15; //15는 말풍선 사이의 마진값
            };

            // console.log(_itemH);

            //scrollTop을 통해 스크롤을 맨 밑으로 이동시키는 애니메이션을 적용
            $(".chat_area").stop().animate({
                scrollTop:_itemH
            });

        };
    });
});