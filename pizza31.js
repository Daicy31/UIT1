$('.tab1').click(function(){
  $('.vegpizza1').css('display','block');
  $('.nonvegpizza1').css('display', 'none');
  $('.beverages1').css('display', 'none');
});
$('.tab2').click(function(){
  $('.nonvegpizza1').css('display', 'block')
  $('.beverages1').css('display', 'none');
  $('.vegpizza1').css('display', 'none');
  
}); 
$('.tab3').click(function(){
  $('.beverages1').css('display', 'block')
  $('.vegpizza1').css('display', 'none');
  $('.nonvegpizza1').css('display', 'none');
})