$(function(){

$('.slider1').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
var nav = $("#main-nav");
$("<select class='nav-select visible-xs' />").appendTo(nav);
var select = nav.find("select");

// Populate dropdown with menu items
nav.find("a").each(function() {
 var el = $(this);
  $("<option />", {
  "value"  : el.attr("href"),
  "text"  : el.text()
 }).appendTo(select);
});
 })