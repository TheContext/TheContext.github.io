!function(n){var t=[],i=function(){n.each(t,function(){n(this)[0].getBoundingClientRect().top<n(window).height()&&n(this).addClass("appeared")})};n.fn.scrollAppear=function(){return this.each(function(){t.push(n(this)),n(this).addClass("appear")}),i(),n(window).scroll(function(){i()}),this}}(jQuery);