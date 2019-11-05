
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

$("#btn-submit").click(() => {
  $.ajax({
    url: "/login",
    type: "post",
    data: {
      email: $("#username")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    }
  })
    .then(data => {
      console.log(data);
      setCookie('jwt', data.token, 1)
      window.location.href="/admin"
    })
    .catch(err => {
      console.log("err", err);
    });
});
