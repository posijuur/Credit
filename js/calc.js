;(function ($) {
  $('.input-range').on('input', function(e){
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;
    
    $(e.target).css({
      'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
  }).trigger('input');

  $('.change-view_label').click(function(event) {
    $(this).parent().find('.change-view_label').removeClass('activer');
    $(this).addClass('activer');
  });

  var data = 1;
  // data = $('.change-view_label').data();
  $('.change-view_label').click(function(event) {
    data = $(this).data().action;
    $('.js-range_1').trigger('input');
  });

  $('.js-range_1').on('input', function(e){
    var parentAll = $(e.target).parent().parent();
    var valPersent = $(parentAll).find('.js-range_2').val();
    var val = e.target.value;
    var summa = val * 10000;
    var summaPersent = summa/100*valPersent;
    $(e.target).parent().find('.price_js_1').attr('value', summa);
    $(parentAll).find('.price_js_2').attr('value', summaPersent);
    get_data(parentAll)
    price_bot(parentAll);
  }).trigger('input');

  $('.js-range_2').on('input', function(e){
    var parentAll = $(e.target).parent().parent();
    var val = e.target.value;
    var valSumma = $(parentAll).find('.price_js_1').val();
    var summaPersent = valSumma/100*val;
    $(e.target).parent().find('.price_js_2').attr('value', summaPersent);
    get_data(parentAll)
    price_bot(parentAll);
  }).trigger('input');

  $('.js-range_3').on('input', function(e){
    var parentAll = $(e.target).parent().parent();
    var val = e.target.value;
    $(e.target).parent().find('.price_js_3').attr('value', val);
    get_data(parentAll)
    price_bot(parentAll);
  }).trigger('input');

  function get_data(parentAll) {
   data = $(parentAll).parent().find('.activer').data().action;
  }

  function price_bot(parentAll) {
    var rightBlock = $(parentAll).parent().next();
    var monthInput = $(rightBlock).find('.top-js_1');
    var pereplataInput = $(rightBlock).find('.top-js_3');
    var allSummaInput = $(rightBlock).find('.top-js_2');

    var zaim = $(parentAll).find('.price_js_2').val();
    var countMonth = $(parentAll).find('.price_js_3').val();
    var zaimOneMonth = zaim/countMonth;
    var decreaseZaim = zaim;
    var decrease = null;
    var averageInMonth = null;
    var AllsummaTwo = null;
    if (data) {
      var month = zaim/100*5;
      var pereplata = month*countMonth;
      var allSumma = +(zaim) + +(pereplata);
      $(monthInput).attr('value', month.toFixed());
      $(pereplataInput).attr('value', pereplata.toFixed());
      $(allSummaInput).attr('value', allSumma.toFixed());
      date(countMonth);
    } else {
      decrease = decrease + zaim/100*5;

      for (var i = 0; i < countMonth; i++) {
        decreaseZaim = +decreaseZaim - +zaimOneMonth;
        decrease = decrease + (decreaseZaim/100*5);
      }
      AllsummaTwo = +zaim + +decrease;
      if (countMonth == 1) {
        averageInMonth = +decrease + +zaimOneMonth;
      } else {
      averageInMonth = +decrease/countMonth + +zaimOneMonth;
      }
      $(monthInput).attr('value', averageInMonth.toFixed());
      $(pereplataInput).attr('value', decrease.toFixed());
      $(allSummaInput).attr('value', AllsummaTwo.toFixed());
      date(countMonth);
    }
  }

  function date(countMonth) {
    var date2 = new Date(); 
    var dateMon = date2.getMonth() + +countMonth;
    var newDate = new Date(date2.getFullYear(), dateMon, date2.getDate());
    var str = null;
    var tt = newDate.getMonth() + 1;
    if (tt == 0) {
      var str = newDate.getDate() + '.' + 01+ '.' + newDate.getFullYear();
    } else if (tt < 10) {
      var str = newDate.getDate() + '.'+ 0 + tt+ '.' + newDate.getFullYear();
    } else {
      var str = newDate.getDate() + '.'+ tt + '.' + newDate.getFullYear();
    }
    $('.input-date2-js').attr('value', str);
  }

  var date1 = new Date(); 
  var str = date1.getDate() + '.' + (date1.getMonth()+1)+ '.' + date1.getFullYear();
  $('.input-date1-js').attr('value', str);
  $('.input-date2-js').attr('value', str);


  //modal window
  $('.view_desc_link').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().parent().find('.side-left_modal').show();
    $('.close-block_link').one('click', function(event) {
      event.preventDefault();
      $(this).parent().parent().hide();
    });

  });
    //show modal window
    $('.submit').click(function(event) {
      event.preventDefault();
      var name = $(this).parent().parent().find('.llist_item_text').text();
      console.log(name);
      var summaAll = $(this).parent().find('.top-js_2').val();
      var month = $(this).parent().find('.top-js_1').val();
      var pereplata = $(this).parent().find('.top-js_3').val();
      $('.modal-call').show();

      $('.modal-call').find('.form-send_price_input1').attr('value', name);
      $('.modal-call').find('.form-send_price_input2').attr('value', summaAll);
      $('.modal-call').find('.form-send_price_input3').attr('value', month);
      $('.modal-call').find('.form-send_price_input4').attr('value', pereplata);
    });
    $('.modal-call_close').on('click', function(event) {
        $(this).parent().parent().parent().parent().hide();
      });

    //modal fone
    $('.phone_butn').on('click', function(event) {
      event.preventDefault();
      var target = event.target;
      $('.modal-call__mod').show();
    });

    $('.contacts_link').on('click', function(event) {
      event.preventDefault();
      var target = event.target;
      $('.modal-call__mod').show();
    });
})(jQuery);



