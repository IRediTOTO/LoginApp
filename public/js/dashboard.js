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


var memory=-1;
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
      if ($('#my-tbody')[0].childElementCount > 0) {
        $('#my-tbody').empty()
      }
      for (let i = 0; i < (response).length; i++) {

        $('#my-tbody').append(`<tr>
  <th scope="row" id="row${i}" name="row${i}" value="${response[i]._id}">
    <input type="name" class="form-control-plaintext" id="firstName${i}" name="firstName${i}" value="${response[i].name.firstName}" readonly>
  </th>
  <td>
    <input type="name" class="form-control-plaintext" id="lastName${i}" name="lastName${i}" value="${response[i].name.lastName}" readonly>
  </td>
  <td>
    <input type="name" class="form-control-plaintext" id="email${i}" name="email${i}" value="${response[i].email}" readonly>
  </td>
  <td>
    <input type="name" class="form-control-plaintext" id="password${i}" name="password${i}" value="${response[i].password}" readonly>
  </td>
  <td>
    <input type="name" class="form-control-plaintext" id="role${i}" name="role${i}" value="${response[i].role}" readonly>
  </td>
  <td>
    <button type="button" name="" id="btn-edit-${i}" class="btn btn-primary btn-sm" >Edit</button>
    <button type="button" name="" id="btn-delete-${i}" class="btn btn-primary btn-sm" >Delete</button>
    <button type="button" name="" id="btn-ok-${i}" class="btn btn-primary btn-sm" style="     visibility: hidden;
    ">ok</button>
    <button type="button" name="" id="btn-cancel-${i}" class="btn btn-primary btn-sm" style="visibility: hidden;
    ">cancel</button>
     </td>
</tr>`);

        
        $('#btn-edit-' + i).click((err) => {
          if(memory<0){ memory=i}
          else{
            $('#firstName'+memory).attr('readonly','');
            $('#lastName'+memory).attr('readonly','');
            $('#email'+memory).attr('readonly','');
            $('#password'+memory).attr('readonly','');
            $('#role'+memory).attr('readonly','');
          $('#firstName'+memory).css('border', '');
          $('#lastName'+memory).css('border', '');
          $('#email'+memory).css('border', '');
          $('#password'+memory).css('border', '');
          $('#role'+memory).css('border', '');
          $('#btn-ok-'+memory).css('visibility','hidden');
          $('#btn-cancel-'+memory).css('visibility','hidden');

          memory=i
          }
          $('#firstName' + i).removeAttr('readonly')
          $('#lastName' + i).removeAttr('readonly')
          $('#email' + i).removeAttr('readonly')
          $('#password' + i).removeAttr('readonly')
          $('#role' + i).removeAttr('readonly')
          $('#firstName' + i).css('border', ' 1px solid red')
          $('#lastName' + i).css('border', ' 1px solid red')
          $('#email' + i).css('border', ' 1px solid red')
          $('#password' + i).css('border', ' 1px solid red')
          $('#role' + i).css('border', ' 1px solid red')
          
          $('#btn-ok-'+memory).css('visibility','visible');
          $('#btn-cancel-'+memory).css('visibility','visible');
        })
        $(`#btn-ok-${i}`).click(()=>{
          $.ajax({
            type: "PUT",
            url: "/UserEdit",
            data: {
              firstName: $('#firstName'+i).val(),
              lastName: $('#lastName'+i).val(),
              email: $('#email'+i).val(),
              password: $('#password'+i).val(),
              id:$('#row'+i).attr('value')
            },
            dataType: "dataType",
            success: function (response) {
              
            }
          });
        })
      }
    }
  });
})