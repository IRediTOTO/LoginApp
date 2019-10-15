$('#createNewUser').click(function(e){
  $.ajax({
    type: "POST",
    url: "/createUser",
    data: {
      firstName:$('#firstName').val(),
      lastName:$('#lastName').val(),
      email:$('#email').val(),
      password:$('#password').val(),
    },
    success: function (response) {
      console.log(response)
    }
  });
})

$('#button-load-all').click((err)=>{
  // $.ajax({
  //   type: "POST",
  //   url: "/getAnUser",
  //   data: {
  //     email: $('#email1')
  //   },
  //   success: function (response) {
      
  //   }
  // });
  $('#my-tbody').append(`<tr>
  <th scope="row">
    <input type="name" class="form-control-plaintext" id="firstName" name="firstName" value="First Name" readonly>
  </th>
  <td>
    <input type="name" class="form-control-plaintext" id="firstName" name="firstName" value="Last Name" readonly>
  </td>
  <td>
    <input type="name" class="form-control-plaintext" id="firstName" name="firstName" value="Email" readonly>
  </td>
  <td>
    <input type="name" class="form-control-plaintext" id="firstName" name="firstName" value="Role" readonly>
  </td>
  <td>
    <input type="name" class="form-control-plaintext" id="firstName" name="firstName" value="Action" readonly>
  </td>
  <td>
    <button type="button" name="" id="" class="btn btn-primary btn-sm" >Edit</button>
    <button type="button" name="" id="" class="btn btn-primary btn-sm" >Delete</button>
  </td>
</tr>`)
  
})