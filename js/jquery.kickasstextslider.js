if ( typeof Object.create !== 'function') {
    Object.create = function ( obj ) {
        function F(){};
        F.prototype = obj;

        return new F();
    };
}

(function( $, window, document, undefined ) {
    var defaultOptions = {
        nav: '.kickass-slider-nav',
        speed: 150
    };

    var KickassTextSlider = {
        init: function ( options, elem ) {
            var self = this;
            self.elem = elem;
            self.$elem = $( elem );

            if( options === undefined ) {
                self.nav = '.kickass-slider-nav';
            } else if ( typeof options === 'string' ) {
                self.nav = options;
            } else {
                self.nav = options.nav
            }

            self.options = $.extend( {}, defaultOptions, options );

            self.containerWidth     = self.$elem.width(),
            self.containerHeight    = self.$elem.find('li > a'),
            self.listElems          = self.$elem.find('li'),
            self.totalListElem      = self.listElems.length,
            self.current            = 0;

            if( self.nav === undefined ) {
                self.nav = self.options.nav;
            }

            this.handleProcess();
        },

        handleProcess: function() {
            var self = this;

            self.responsiveElemWidth();
            $(this.nav).find('button').on('click', function(){
        		self.setCurrent( $(this).data('dir') );
        		self.transition();
        	});
        },

        responsiveElemWidth: function () {
        	var self = this;

        	self.listElems.find('a').css('width', self.containerWidth);

            $(window).on('resize', function() {
                self.containerWidth     = self.$elem.width();
                self.listElems.find('a').css('width', self.containerWidth);
                self.transition();
            });
        },


        transition: function (coords) {
    		this.$elem.find('ul').animate({
    			'left': coords || -(this.current * this.containerWidth)
    		}, this.options.speed);
    	},

        setCurrent: function ( dir ) {
    		var pos = this.current
    		pos += ( ~~( dir === 'next') ) || -1;
    		this.current = ( pos < 0 ) ? this.totalListElem - 1 : pos % this.totalListElem;
    		this.setActiveClass();
    		return pos;
    	},

        setActiveClass: function (){
    		var currElem 		= $(this.listElems[this.current]),
    			currElemChild 	= currElem.find('a'),
    			currElemTarget 	= currElemChild.attr('href');

    		currElem.addClass('active')
    			.siblings()
    			.removeClass('active');

    		$(currElemTarget)
    			.addClass('active')
    			.siblings()
    			.removeClass('active');

    	}
    };

    $.fn.kickassTextSlider = function ( options ) {
        return this.each(function() {
            var kickass = Object.create( KickassTextSlider );
            kickass.init( options, this )
        });
    };

    $.fn.kickassTextSlider.options = {
        nav: '.kickass-slider-nav'
    }


})( jQuery, window, document );
