$(document).ready(function () {
  $.ajax({
    method:'POST',
    url: "./api/",
    headers:{"token":"999999"},
    success: function (result) {
      if (result > 0) {
        console.log("day la ket qua:",result)
        taonut(result);
        getDataFirstTime(result);

      } 
    }
  })
  function taonut(pages) {
    var temp = 0;
    if (pages % 15 == 0) { temp = pages / 15 } else { temp = pages / 15  }
    for (let i = Math.round(temp); i > 0; i--) {
      $('#navigation-custom .page-item:first').after('<li class="page-item num"><div class="page-link" data="' + i + '" >' + i + '</div></li>');
    }
    clickToPanigation(Math.round(temp));
  }

  function clickToPanigation(pagenum) {
    var btn = document.querySelectorAll('#navigation-custom li.num');
    for (let i = 0; i <= pagenum; i++) {
      $(btn[i]).click(function () {
        getdata(i);
        for (let j = 0; j < pagenum; j++) {
          $(btn[j]).removeClass('active');

        }
        $(btn[i]).addClass('active');

      })
    }
  }
  function getDataFirstTime(result) {
    getdata(0);
    $('#navigation-custom .page-item:nth(1)').addClass('active')
  }
  function getdata(pagenum) {
    $.ajax({
      method:"POST",
      url: "./api/" + pagenum + "",
      data:{ 
        skip:15
      },
      success: function (result) {
        $('.card-ajax').fadeIn();
        var containter = $('.card-ajax');
        containter.empty();
        console.log(this.url);
        console.log(result)
        if (result == '') {
          containter.append("<h1>Không có dữ liệu nào</h1>")
        } else {
          var html1 = ` <div class="col-md-4 my-3 px-2 my-cards">
          <div class="card border-0" >
              <img class="card-img-top lazy" src="h./images/product-1-1.jpg" alt="Card image cap">
              <div class="card-body mt-2 p-0">
              <div class="product-brand">Cashew</div>
                <h5 class="card-title product-tittle">Card title</h5>
                <div class="product-price-group nav align-items-center">
                          <div class="nav-item product-price mr-2">1.000.000<span>đ</span></div>
                          <div class="product-sale-price nav-item">780.000<span>đ</span></div>
                        </div>
              </div>
              </div>
          </div>`

          var $aaa = $('<div />', { html: html1 }); // câu này khó hiểu quá :(

          for (let i = 0; i < Object.keys(result).length; i++) {
            $aaa.find('img').attr('src', "/uploads/"+result[i].productImage);
            $aaa.find('.card-title').text(result[i].title);
            $aaa.find('.btn.btn-primary').text(result[i].bt_content);
            containter.append($aaa.html())

          }
        }
      },
      error: function (error) {
        console.log(error);
      } 
    });
  }





})


