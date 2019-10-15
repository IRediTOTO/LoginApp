$('#btn-submit').click((e)=>{
    $.ajax({
      type: "POST",
      url: "/signup",
      data: {
        username: $('#exampleInputEmail1').val(),
        pass:$('#exampleInputPassword1').val()
      },
      success: (success)=>{
        if(success=='ok'){
            window.location.href='/admin';
  
        }else{
          console.log(success)
        }
      }
  
    });
  })