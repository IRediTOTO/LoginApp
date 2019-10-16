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


var memory = -1;
$('#button-load-all').click((err) => {
  $.ajax({
    type: "POST",
    url: "/getManyUser",
    data: {
      number: 5
    },
    success: function (response) {
      if ($('#my-tbody')[0].childElementCount > 0) {
        $('#my-tbody').empty()
      }
      for (let i = 0; i < (response).length; i++) {

        $('#my-tbody').append(`<tr id="row${i}" name="row${i}" value="${response[i]._id}">
  <th scope="row" >
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
    <div  name="" id="btn-edit-${i}" class="d-inline-block" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><title>settings</title><g><path fill="#8E8E8E" d="M21,18.69922l-6.42957-6.42957l0.86511-2.59583c0.12012-0.35938,0.02637-0.75586-0.24121-1.02344 L9.53809,2.99414c-0.39062-0.39062-1.02344-0.39062-1.41406,0L2.4668,8.65039C2.2793,8.83789,2.17383,9.0918,2.17383,9.35742 S2.2793,9.87695,2.4668,10.06445l5.65723,5.65723c0.19043,0.19043,0.44629,0.29297,0.70703,0.29297 c0.10547,0,0.21289-0.0166,0.31641-0.05176l2.59497-0.86499l6.42944,6.42944c0.39061,0.39062,0.90234,0.58594,1.41406,0.58594 S20.60938,21.91797,21,21.52734C21.78125,20.74609,21.78125,19.48047,21,18.69922z"></path> <path fill="#E86C60" d="M20.73654,31.26346l12.701,12.70101c2.76142,2.76142,7.23857,2.76142,9.99999,0l0.00001-0.00001 c2.76142-2.76142,2.76142-7.23857,0-9.99999l-12.701-12.70101L20.73654,31.26346z"></path> <path fill="#C9514B" d="M39.32031,40.84668c-0.25586,0-0.51172-0.09766-0.70703-0.29297L30.1543,32.0957 c-0.39062-0.39062-0.39062-1.02344,0-1.41406s1.02344-0.39062,1.41406,0l8.45898,8.45801c0.39062,0.39062,0.39062,1.02344,0,1.41406 C39.83203,40.74902,39.57617,40.84668,39.32031,40.84668z"></path> <path fill="#B3B3B3" d="M45.85059,9.26562c-0.10742-0.33105-0.37891-0.58203-0.7168-0.66406 c-0.3418-0.08105-0.69531,0.01953-0.94141,0.26562l-5.24023,5.23926l-5.65723-5.65723l5.24023-5.23926 c0.24609-0.24609,0.34668-0.60254,0.26562-0.94043c-0.08203-0.33887-0.33301-0.61035-0.66406-0.71777 c-1.53906-0.49902-3.13477-0.68066-4.73633-0.54199c-6.14941,0.53223-11.06641,5.9873-10.96094,12.1582 c0.0166,0.95117,0.14551,1.89648,0.38574,2.81738L4.07617,32.53516c-1.59863,1.41211-2.51465,3.36328-2.58105,5.49414 s0.72754,4.13477,2.23535,5.64258c1.44922,1.44922,3.35742,2.23828,5.39648,2.23828c0.08203,0,0.16504-0.00098,0.24707-0.00391 c2.13086-0.06641,4.08203-0.9834,5.49316-2.58105l16.54883-18.74805c1.76855,0.46289,3.58789,0.51172,5.4209,0.14844 c4.35057-0.86621,7.93555-4.16895,9.13184-8.41309C46.62695,13.97461,46.58691,11.53809,45.85059,9.26562z M10,39 c-1.10455,0-2-0.89545-2-2c0-1.10461,0.89545-2,2-2s2,0.89539,2,2C12,38.10455,11.10455,39,10,39z"></path></g></svg></div>
    <div  name="" id="btn-delete-${i}" class="d-inline-block" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><title>remove</title><g><path fill="#E86C60" d="M45,1H3C1.89543,1,1,1.89543,1,3v42c0,1.10457,0.89543,2,2,2h42c1.10457,0,2-0.89543,2-2V3 C47,1.89543,46.10457,1,45,1z"></path> <path fill="#FFFFFF" d="M34.29289,30.29289L28,24l6.29289-6.29289c0.39053-0.39053,0.39053-1.02369,0-1.41422l-2.58578-2.58579 c-0.39053-0.39052-1.02369-0.39052-1.41422,0L24,20l-6.29289-6.29289c-0.39053-0.39052-1.02369-0.39052-1.41422,0l-2.58579,2.58579 c-0.39052,0.39053-0.39052,1.02369,0,1.41422L20,24l-6.29289,6.29289c-0.39052,0.39053-0.39052,1.02369,0,1.41422l2.58579,2.58578 c0.39053,0.39053,1.02369,0.39053,1.41422,0L24,28l6.29289,6.29289c0.39053,0.39053,1.02369,0.39053,1.41422,0l2.58578-2.58578 C34.68342,31.31658,34.68342,30.68342,34.29289,30.29289z"></path></g></svg></div>
    <div  name="" id="btn-ok-${i}" class="d-inline-block" style="     visibility: hidden;
    "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><title>c-check</title><g><path fill="#72C472" d="M24,47C11.31738,47,1,36.68213,1,24S11.31738,1,24,1s23,10.31787,23,23S36.68262,47,24,47z"></path> <polygon fill="#FFFFFF" points="20,34.82861 9.17188,24 12,21.17139 20,29.17139 36,13.17139 38.82812,16 "></polygon></g></svg></div>
    <div  name="" id="btn-cancel-${i}" class="d-inline-block" style="visibility: hidden;
    "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64"><title>e-remove</title><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="#373333" stroke="#373333"><line x1="51.092" y1="12.908" x2="12.908" y2="51.092" fill="none" stroke="#373333" stroke-miterlimit="10"></line><line x1="51.092" y1="51.092" x2="12.908" y2="12.908" fill="none" stroke="#373333" stroke-miterlimit="10"></line></g></svg></div>
     </td>
</tr>`);

        $('#btn-delete-'+i).click((err)=>{
          $.ajax({
            type: "DELETE",
            url: "/UserEdit",
            data: {id: $('#row' + i).attr('value')},
            success: function (response) {
              if(response=='deleted'){
                $('#row'+i).remove();
              }
              else console.log(response)
            }
          });
        })
        $('#btn-edit-' + i).click((err) => {
          if (memory < 0) { memory = i }
          else {
            closeEdit (memory);
            showMainBtn(memory)
            memory = i
          }
          openEdit(i);
          hideMainBtn(i)

        })
        $(`#btn-cancel-${i}`).click(()=>{
          closeEdit(i);
          showMainBtn(i)

        })
        $(`#btn-ok-${i}`).click(() => {
          
          $.ajax({
            type: "PUT",
            url: "/UserEdit",
            data: {
              firstName: $('#firstName' + i).val(),
              lastName: $('#lastName' + i).val(),
              email: $('#email' + i).val(),
              password: $('#password' + i).val(),
              role: $('#role' + i).val(),
              id: $('#row' + i).attr('value')
            },
            success: function (response) {
              console.log(JSON.stringify(response))
              closeEdit(i);
              showMainBtn(i)
            }
          });
        })
      }
    }
  });
})

function openEdit(i) {
  
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

          $('#btn-ok-' + memory).css('visibility', 'visible');
          $('#btn-cancel-' + memory).css('visibility', 'visible');
}
function closeEdit(i){
  $('#firstName'+i).attr('readonly','');
  $('#lastName'+i).attr('readonly','');
  $('#email'+i).attr('readonly','');
  $('#password'+i).attr('readonly','');
  $('#role'+i).attr('readonly','');
$('#firstName'+i).css('border', '');
$('#lastName'+i).css('border', '');
$('#email'+i).css('border', '');
$('#password'+i).css('border', '');
$('#role'+i).css('border', '');
$('#btn-ok-'+i).css('visibility','hidden');
$('#btn-cancel-'+i).css('visibility','hidden');
}

function hideMainBtn(i){
  
  
$('#btn-edit-'+i).css('visibility','hidden');
$('#btn-delete-'+i).css('visibility','hidden');
}
function showMainBtn(i){
  
  
  $('#btn-edit-'+i).css('visibility','visible');
  $('#btn-delete-'+i).css('visibility','visible');
  }
