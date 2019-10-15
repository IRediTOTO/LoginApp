$('#btn-submit').click((e)=>{
  $.ajax({
    type: "POST",
    url: "/signin",
    data: {
      username: $('#exampleInputEmail1').val()

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