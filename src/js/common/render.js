define(["jquery", "handlebars"], function($, handlebars) {
    function render(src, target, data) {
        var tpl = $(src).html();
        var template = handlebars.compile(tpl);
        var html = template(data);
        $(target).html(html);
    }
    return render;
})