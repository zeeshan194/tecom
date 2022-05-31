function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


$(document).ready(function(){
    var url = window.location.href;
    var lastPart = url.substr(url.lastIndexOf('/') + 1);
    if (lastPart === "ar") {
       $("body").css("direction", "rtl")
    }else{
        $("body").css("direction", "ltr")
    }

    // $('#country-access-modal').modal({
    //     show: true,
    //     backdrop: 'static',
    //     keyboard: false
    // });

    $(".service-box-inner").mouseover(function(){
        var imgSrc = $(this).find("img").attr("src")
        console.log('*imgSrc: ', imgSrc)
      });

    $('.image1-inner img').on('click', function(){
        $(this).css("display","none");
        $(".image1-container iframe").css("display","block")
    })

    $('.navbar li a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $(".truncated-link").click(function () {
        if($(this).hasClass("show-more-link")) {
            $(this).css("display", "none");
            $(this).siblings('.show-less-link').css("display", "block")
            $(this).siblings('.truncated-text').css("display", "block")
        } else {
            $(this).css("display", "none");
            $(this).siblings('.show-more-link').css("display", "block")
            $(this).siblings('.truncated-text').css("display", "none")
        }

        // $(".truncated-text").toggleClass("show-more");
    });

    $(".bank-list-item").click(function(){
        let id = $(this).attr("idattr")
        $(this).addClass('active').siblings().removeClass('active');
        $(".bank-details").css("display","none")
        $('#'+id).css("display","block");
    })

    $(".faq-item").click(function(){
        let src = $(this).find(".faqs-icon").attr("src")
        if(src === "assets/images/down-icon.png"){
            $(this).find(".faqs-icon").attr("src", "assets/images/up-icon.png")
        }else{
            $(this).find(".faqs-icon").attr("src", "assets/images/down-icon.png")
        }
    })

    $(".management-item").click(function(){
        let src = $(this).find(".management-icon").attr("src")
        if(src === "assets/images/down-arrow.png"){
            $(this).find(".management-icon").attr("src", "assets/images/up-arrow.png")
        }else{
            $(this).find(".management-icon").attr("src", "assets/images/down-arrow.png")
        }
    })

    $(".bank-item").click(function(){
        $("#section-banks").find(".bank-list-item").removeClass("active")
        $(this).find(".bank-list-item").addClass("active")
        let src = $(this).find(".bank-icon").attr("src")
        if(src === "assets/images/down-icon.png"){
            $(this).find(".bank-icon").attr("src", "assets/images/up-icon.png")
        }else{
            $(this).find(".bank-icon").attr("src", "assets/images/down-icon.png")
        }
    })

    $('#select-country').change(function(){
        let selectedCountry = $('#select-country').val()
        if(selectedCountry){
            $(".select-country-error").css("display", "none")
        }else{
            $(".select-country-error").css("display", "block")
        }
    })
    $('.proceed-btn').click(function(){
        let selectedCountry = $('#select-country').val()
        if(selectedCountry){
            $(".modal-initial-content").css("display", "none")
            $(".modal-proceed-content").css("display", "block")
        }else{
            $(".select-country-error").css("display", "block")
        }

        $(".not-agree-btn").click(function(){
            $(".modal-proceed-content").css("display", "none")
            $(".modal-not-agree").css("display", "block")
        })

        $(".agree-btn").click(function(){
            $('#country-access-modal').modal('hide')
        })

        $(".back-to-home-btn").click(function() {
            $('#country-access-modal').modal('hide')
        })
    })


/*****************district script start******************************/

$(".district-box-inner").mouseover(function(){
    $(this).find(".district-hover-image").show();
    $(this).find(".district-image").hide();
})
$(".district-box-inner").mouseout(function(){
    $(this).find(".district-hover-image").hide();
    $(this).find(".district-image").show();
})
/*****************district script start******************************/

/*****************management carousel script start*******************/
    $('.carousel').carousel({
		interval: false,
	});
	
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	
    $('.section-4-container').backstretch("assets/img/backgrounds/bg.jpg");
    
	new WOW().init();

	$('#carousel-management').on('slide.bs.carousel', function (e) {

	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.carousel-item').eq(i).appendTo('.carousel-inner');
	            }
	            else {
	                $('.carousel-item').eq(0).appendTo('.carousel-inner');
	            }
	        }
	    }
	});
/*****************management carousel script end*******************/
    
    // let options = {
    //     series: [58, 23, 10, 9],
    //     labels: ["1st Qtr", "2nd Qtr", "3rd Qtr", "4th Qtr"],
    //     colors:['#101820', '#da291b', '#5b6770', '#a4dbe8'],
    //     legend: {
    //         horizontalAlign: 'bottom', 
    //     },
    //     chart: {
    //     type: 'donut',
    //   },
    //   responsive: [{
    //     breakpoint: 480,
    //     options: {
    //       chart: {
    //         width: 400
    //       },
    //       legend: {
    //         position: 'bottom'
    //       }
    //     }
    //   }]
    //   };

    //   var chart = new ApexCharts(document.querySelector("#donut-chart"), options);
    //   chart.render();
})