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

function loadCountryRestrictionModal() {
    var hours = 60; // country restriction pop apear time
    var now = new Date().getTime();
    var setupTime = localStorage.getItem('setupTime');
    var isCountrySelected = localStorage.getItem('isCountrySelected');
    if (setupTime == null || isCountrySelected == null) {
        $('#country-access-modal').modal({
            show: true,
            backdrop: 'static',
            keyboard: false
        });
        localStorage.setItem('setupTime', now)
    } else {
        if(now-setupTime > hours*60*60*1000) {
            $('#country-access-modal').modal({
                show: true,
                backdrop: 'static',
                keyboard: false
            });
            localStorage.clear()
            localStorage.setItem('setupTime', now);
        }
    }
}

let proceedContent = `IMPORTANT INFORMATION 

You have indicated that you are located in the United States. These materials are not intended for, directed at or accessible by persons located in the United States. However, persons located in the United States that make the certifications below can access these materials. Please read the certifications below carefully and provide the information requested in order to receive these materials. If you cannot make the certifications below, please choose “I DO NOT AGREE” below. 

Certifications 

“We are a “qualified institutional buyer” (a “QIB”) as defined in Rule 144A under the US Securities Act of 1933, as amended (the “Securities Act”). Further, if we are acting as a fiduciary or agent for one or more investor accounts, (a) each such account is a QIB, (b) we have investment discretion with respect to each account, and (c) we have full power and authority to make the representations, warranties, agreements and acknowledgements herein on behalf of each such account.” 

“We acknowledge that the materials relate to a transaction that is not subject to, or is only available in the United States pursuant to an exemption from, the registration requirements of the Securities Act.” 

By clicking “I AGREE” below, you are certifying that the certifications and information provided are accurate and that you would like to access the materials. You agree that the materials you receive are for your own use and will not be distributed to any person outside of your organisation.  `;


$(document).ready(function(){
    var url = window.location.href;
    var lastPart = url.substr(url.lastIndexOf('/') + 1);
    if (lastPart === "ar") {
       $("body").css("direction", "rtl")
    }else{
        $("body").css("direction", "ltr")
    }


    loadCountryRestrictionModal()

    $('#section-management .collapse').on('shown.bs.collapse', function () {
        let id = $(this).attr("id").split("-")[1];
        let manId = $(`#management-image-${id}`).attr("id");
        $(`#management-image-${id}`).css("display","none");
        console.log("*slide opened", manId)
     });
     
     $('#section-management .collapse').on('hidden.bs.collapse', function () {
        let id = $(this).attr("id").split("-")[1];
        $(`#management-image-${id}`).css("display","block");
        console.log("*slide closed", id)
     });
     
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

    $(".collapse-item").click(function(){
        let src = $(this).find(".collapse-icon").attr("src")
        if(src === "assets/images/down-icon.png"){
            $(this).find(".collapse-icon").attr("src", "assets/images/up-icon.png")
        }else{
            $(this).find(".collapse-icon").attr("src", "assets/images/down-icon.png")
        }
    })

    $('#select-country').change(function(){
        let selectedCountry = $('#select-country').val()
        if(selectedCountry){
            localStorage.setItem("isCountrySelected",1)
            $(".select-country-error").css("display", "none")
        }else{
            $(".select-country-error").css("display", "block")
        }
    })
    $('.proceed-btn').click(function(){
        let selectedCountry = $('#select-country').val()
        if(["Canada", "Australia", "Japan", "South Africa"].includes(selectedCountry)){
            console.log('*here')
            $("#redirect-btn1").css("display", "block")
            $(".modal-not-agree").css("display", "block")
            $(".modal-not-agree .c-modal-content").text(`You have indicated that you are located in Australia, Canada, South Africa or Japan. We therefore regret that we cannot provide you with access to these materials. `);
            $(".modal-initial-content").css("display", "none")
        }else if(["UAE", "USA", "Others"].includes(selectedCountry)){
            $(".modal-initial-content").css("display", "none")
            if(selectedCountry === "USA"){
                $(".modal-proceed-content c-modal-content").text(proceedContent)
            }
            $(".modal-proceed-content").css("display", "block")
        }else{
            $(".select-country-error").css("display", "block")
        }

        $(".not-agree-btn").click(function(){
            if(selectedCountry === "USA"){
                $(".modal-not-agree .c-modal-content").text(`Due to legal restrictions, these materials are not directed at or accessible by persons located in the United States (except to qualified institutional buyers within the meaning of the US Securities Act of 1933, as amended). We apologise for any inconvenience this may cause. `)
                $("#redirect-btn2").css("display", "block")
                $(".modal-not-agree").css("display", "block")
            }else{
                $(".modal-not-agree .c-modal-content").text(`Not Agreed. We regret that, due to regulatory restrictions, we are unable to provide you with access to this section of our website.`)
                $(".modal-not-agree").css("display", "block")
            }
                $(".modal-proceed-content").css("display", "none")
            
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