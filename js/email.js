

(function() {
    // $("#chk").click(function(){
    //     var chked = $(this).is(":checked");
    //     if(chked){
    //         $("#button").removeAttr('disabled')
    //     }else{
    //         $("#button").attr({ disabled: "ture"});
    //     }
    // })

    emailjs.init("user_FybLvPtCuqUsMsfbvUQCV");
     $('input[name=submit]').click(function(){
        var it = 'IT 사업팀';
        var tech = '화학소재 사업팀';
        var user = document.getElementById("user");
        var id = document.getElementById("id");
        var email_chk = document.getElementById("email_chk");
        var phone = document.getElementById("phone");

        if($("input:checkbox[name=chk]").is(":checked") == false){
            alert("개인정보 활용 체크해주세요.");
            chked.focus();
            return false;
        }

        if (user.value == ""){
            alert("기업명 또는 단체를 입력해주세요.")
            user.focus();
            return false;
        }
        if (id.value == ""){
            alert("성함을 입력해주세요.")
            id.focus();
            return false;
        }
        if (email_chk.value == ""){
            alert("이메일 주소를 입력해주세요.")
            email_chk.focus();
            return false;
        }
        if (phone.value == ""){
            alert("연락처를 입력해주세요.")
            phone.focus();
            return false;
        }
        var templateParams = {
            name: $('select[name=name]').val(),
            phone: $('input[name=phone]').val(), 
            user: $('input[name=user]').val(), 
            id: $('input[name=id]').val(), 
            email : $('input[name=email]').val(),
            message : $('input[name=message]').val()
           };
        

         if($('select[name=name]').val() == it){     
            var result = confirm("이메일을 보내시겠습니까?");     
            $("#button").attr({
                disabled: "false",
                value: "전송완료!"
                });   
            if(result){
                alert("전송하셨습니다. 빠른시일내에 연락드리겠습니다.");
                emailjs.send('service_mv6seew', 'template_pcvw07t', templateParams)
                .then(function(response) {
                       console.log('SUCCESS!', response.status, response.text);
                   }, function(error) {
                       console.log('FAILED...', error);
                   });
            }else{
                alert("취소하셨습니다.");
            }
         }else if($('select[name=name]').val() == tech){
            var result = confirm("이메일을 보내시겠습니까?");    
            if(result){     // service_ID // template_ID
                    // 현재 김선희 주임님으로 되어있음  sseon0417@naver.com
                $("#button").attr({
                disabled: "false",
                value: "전송완료!"
                });     
                alert("전송하셨습니다. 빠른시일내에 연락드리겠습니다.");
                emailjs.send('service_t5ula9a', 'template_i777h4q', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });
            }else{
                alert("취소하셨습니다.");
            }
         }else{
            alert('양식이 제대로 되어있지 않거나, 현재 메일을 받을 수 없는 상태 입니다.');
         }
    });
})();