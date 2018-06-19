require(['jquery'], function($) {
    $.ajax({
        url: '/api/data',
        dataType: 'json',
        success: function(res) {
            console.log(res)
        },
        ereror: function(err) {
            console.warn(err)
        }
    })
})