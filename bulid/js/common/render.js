define(["jquery","handlebars"],function(l,u){return function(n,e,r){var t=l(n).html(),i=u.compile(t)(r);l(e).html(i)}});