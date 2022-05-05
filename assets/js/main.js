$(document).ready(function(){
    // $('#country-access-modal').modal({
    //     show: true,
    //     backdrop: 'static',
    //     keyboard: false
    // });

    $(".bank-list-item").click(function(){
        let bankName = $(this).text()
        $(this).addClass('active').siblings().removeClass('active');
        $(".bank-name").text(bankName)
    })

    $(".faq-item").click(function(){
        let src = $(this).find(".faqs-icon").attr("src")
        if(src === "assets/images/down-icon.png"){
            $(this).find(".faqs-icon").attr("src", "assets/images/up-icon.png")
        }else{
            $(this).find(".faqs-icon").attr("src", "assets/images/down-icon.png")
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

    $('.watch-btn').click(function(){
        $('#video-modal').modal('toggle')
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