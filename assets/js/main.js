$(document).ready(function(){
    // $('#country-access-modal').modal({
    //     show: true,
    //     backdrop: 'static',
    //     keyboard: false
    // });

    $('.watch-btn').click(function(){
        $('#video-modal').modal('toggle')
    })

    $('.proceed-btn').click(function(){
        let selectedCountry = $('#select-country').val()
        if(selectedCountry){
            $(".modal-initial-content").css("display", "none")
            $(".modal-proceed-content").css("display", "block")
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