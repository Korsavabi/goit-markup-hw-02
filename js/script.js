//Заказать услугу
function choose(el) {
    $(el).addClass("selected");
}
$(".order-service-btn").click(function() {
  $('.form__box').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".order-service-btn").length) {
    $('.form__box').hide();
  }
  e.stopPropagation();
  
});