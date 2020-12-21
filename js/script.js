/* ページトップへ戻る */
$(function(){
  // クリック時
  $('a.page-top').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  // フェードイン・フェードアウト
  var pagetop = $('a.page-top');
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
});

// 年（From、To）の入力チェック
function checkInputedYear() {
    // 年（From）
    yearfrom = document.forms.sitesearch.yearfrom.value;
    // 年（To）
    yearto = document.forms.sitesearch.yearto.value;

    if (isNaN(yearfrom)) {
        alert('作成年には数値を入力してください。');
        document.forms.sitesearch.yearfrom.focus();
        return false;
    }
    if (isNaN(yearto)) {
        alert('作成年には数値を入力してください。');
        document.forms.sitesearch.yearto.focus();
        return false;
    }
    if (yearfrom !="" && String(yearfrom).length != 4) {
        alert('作成年には4桁の数値を入力してください。');
        document.forms.sitesearch.yearfrom.focus();
        return false;
    }
    if (yearto !="" &&String(yearto).length != 4) {
        alert('作成年には4桁の数値を入力してください。');
        document.forms.sitesearch.yearto.focus();
        return false;
    }
    if (yearfrom =="") {
        document.forms.sitesearch.yearfrom.value = 'null';
    }
    if (yearto =="") {
        document.forms.sitesearch.yearto.value = 'null';
    }
    return true;
}