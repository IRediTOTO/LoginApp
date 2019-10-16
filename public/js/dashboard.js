$('#createNewUser').click(function (e) {
  $.ajax({
    type: "POST",
    url: "/createUser",
    data: {
      firstName: $('#firstName').val(), 
      lastName: $('#lastName').val(),
      email: $('#email').val(),
      password: $('#password').val(),
    },
    success: function (response) {
      console.log(response)
    }
  });
})

$('#button-load-all').click((err) => {
  $.ajax({
    type: "POST",
    url: "/getManyUser",
    data: {
      number: 5
    },
    success: function (response) {

      console.log("Something need happen here");
      console.log(response);
      for (let i = 0; i < (response).length; i++) {
        $('#my-tbody').append(`<tr><form>
  <th scope="row">
    <input type="name" class="form-control-plaintext" id="firstName${i}" name="firstName" value="${response[i].name.firstName}" readonly>
  </th>
  <td>
    <input type="name" class="form-control-plaintext" id="LastName${i}" name="LastName" value="${response[i].name.lastName}" readonly>
  </td>
  <td>
    <input type="name" class="form-control-plaintext" id="Email${i}" name="Email" value="${response[i].email}" readonly>
  </td>
  <td>
    <input type="name" class="form-control-plaintext" id="Password${i}" name="Password" value="${response[i].password}" readonly>
  </td>
  <td>
    <input type="name" class="form-control-plaintext" id="Role${i}" name="Role" value="${response[i].role}" readonly>
  </td>
  <td>
    <button type="button" name="" id="btn-edit-${i}" class="btn btn-primary btn-sm" >Edit</button>
    <button type="button" name="" id="btn-delete-${i}" class="btn btn-primary btn-sm" >Delete</button>
  </td></form>
</tr>`);

        $('#btn-edit-'+i).click((err)=>{
          $('#Password'+i).removeAttr('readonly')
        })

      }


    }
  });


})