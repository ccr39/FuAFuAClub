// JavaScript Document

// FADEROLL


// フェードインで表示するコンテンツをdisplay:noneで非表示にする
$('head').append('<style type="text/css">body{display:none;}</style>');
$(function() {
  // フェードインidを指定と表示速度ミリ秒
  $('body').fadeIn(800);
  // ページ遷移時にフェードアウトさせるclickイベントの要素を指定。
  $('a.windowFade').click(function() {
    var url = $(this).attr("href");
    // アニメーションで透過0になるまでフェードアウトさせる。速度ミリ秒
    $('body').animate({"opacity": 0}, 800, function() {
      location.href = url;
    });
    return false;
  });
});
