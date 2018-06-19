require(['jquery', 'render'], function($) {
    $.ajax({
        url: '/api/data',
        dataType: 'json',
        success: function(res) {
            render('#tpl', '#warp', res)
        },
        ereror: function(err) {
            console.warn(err)
        }
    })
})