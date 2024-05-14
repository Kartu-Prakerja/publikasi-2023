(function ($) {window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; fnames[1] = 'FNAME'; ftypes[1] = 'text'; fnames[2] = 'LNAME'; ftypes[2] = 'text'; fnames[6] = 'FUNCTION'; ftypes[6] = 'dropdown'; fnames[3] = 'COMPANY'; ftypes[3] = 'text'; fnames[4] = 'TITLE'; ftypes[4] = 'text'; }(jQuery)); 
var $mcj = jQuery.noConflict(true);
/* on scroll functon */
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
        $('header').addClass("header-fixed");
    } else {
        $('header').removeClass("header-fixed");
    }

    // for scroll-top trigger
    if (scroll >= 400) {
        $('.scroll-top').addClass("is-show");
    } else {
        $('.scroll-top').removeClass("is-show");
    }

    // Scroll to top 
    $(".scroll-top").on("click", function() {
        $(window).scrollTop(0);
    });

});

/* form on submit */
$('.button.btn-primary').on("click", function(e,f) {
    var _this = $(this);
    var success = $('.alert-success.align-items-start');
    _this.addClass('disabled').val('Mengirim...');
    window.setTimeout(function () {
        var error = $('div.mce_inline_error');
        if (error.length > 0) {
            _this.removeClass('disabled').val('Kirim')
        }
    }, 1000);

    $('#mce-success-response').bind('DOMSubtreeModified', function(e) {
        if (e.target.innerHTML.length > 0) {
            success.addClass('d-flex');
            _this.removeClass('disabled').val('Kirim')

            window.setTimeout(function () {
                success.removeClass('d-flex').hide();
            }, 2000);
        }
    });
})