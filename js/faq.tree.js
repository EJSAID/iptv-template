jQuery('.faq-q').click(function(){
    if (jQuery(this).siblings().find('.faq-a').is(':visible')) {
        jQuery(this).removeClass('faq-q-open');
        jQuery(this).siblings().find('.faq-a').removeClass('faq-a-open').slideUp();
} 
else {
    jQuery(this).addClass('faq-q-open');
    jQuery(this).siblings().find('.faq-a').addClass('faq-a-open').slideDown();
    }
})