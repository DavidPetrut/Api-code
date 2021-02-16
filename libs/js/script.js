$('#BUTTON').click(function() {

    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#countryCode').html(result['data'][0]['countryCode']);
                $('#countryName').html(result['data'][0]['countryName']);
                $('#city').html(result['data'][0]['city']);
                $('#name').html(result['data'][0]['name']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});

