/*
 *  Simple Slides - v0.0.0
 *  A super simple, lightweight plugin for generating slide shows from list elements.
 *  https://github.com/ErikPeterson/simple-slides/
 *
 *  Made by Erik Sälgström Peterson
 *  Under GPL License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

        // undefined is used here as the undefined global variable in ECMAScript 3 is
        // mutable (ie. it can be changed by someone else). undefined isn't really being
        // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
        // can no longer be modified.

        // window and document are passed through as local variable rather than global
        // as this (slightly) quickens the resolution process and can be more efficiently
        // minified (especially when both are regularly referenced in your plugin).

        // Create the defaults once
        var pluginName = 'simpleSlides',
            defaults = {
                slideClass: 'slide',
                controlsClass: 'ss-controls'
            };

        // The actual plugin constructor
        function SimpleSlides ( element, options ) {
            this.element = element;
            // jQuery has an extend method which merges the contents of two or
            // more objects, storing the result in the first object. The first object
            // is generally empty as we don't want to alter the default options for
            // future instances of the plugin
            this.options = $.extend( {}, defaults, options );
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }

        SimpleSlides.prototype = {
                init: function(){
                        this.$el = $(this.element);
                        this.$slides = this.$el.children('li').addClass('slide');

                        this.$controls = $('<li class="' + this.options.controlsClass + '"> <i class="prev-slide fa fa-arrow-circle-left"></i><i href="#" class="next-slide fa fa-arrow-circle-right"></i></li>').appendTo(this.$el);
                        this.$counter = $('<span class="counter">1</span>').insertAfter(this.$controls.children('.prev-slide'));
                        this.$el.addClass('loaded');
                        this.len = this.$slides.length;
                        this.$counter.after('<span class="length">/' + this.len + '</span>');
                        this.setSlide(0);
                        this.bindEvents();
                    },
                bindEvents: function(){
                    var that = this;

                    this.$controls.children('.next-slide').on('click', function(){ that.nextSlide(); });
                    this.$controls.children('.prev-slide').on('click', function(){ that.prevSlide(); });
                },
                nextSlide: function(){
                    var curIndex = this.$slides.filter('.active').index();
                    if(curIndex + 1 <= this.len - 1){
                        this.setSlide(curIndex + 1);
                    }
                },
                prevSlide: function(){

                    var curIndex = this.$slides.filter('.active').index();

                    if(curIndex - 1 >= 0){
                        this.setSlide(curIndex - 1);
                    }
                },
                setSlide: function(slidenum){

                    var $slide = this.$slides.filter(function(i){
                            return i === slidenum;
                        });

                    this.$slides.filter('.active').removeClass('active');

                    $slide.addClass('active');

                    this.$el.removeClass('first-slide last-slide');

                    if(slidenum === 0){ this.$el.addClass('first-slide');}
                    if(slidenum === this.len - 1){ this.$el.addClass('last-slide');}

                    this.setCounter(slidenum);
                },
                setCounter: function(num){
                    this.$counter.text(num + 1);
                }
            };

        // A really lightweight plugin wrapper around the constructor,
        // preventing against multiple instantiations
        $.fn[ pluginName ] = function ( options ) {
                return this.each(function() {
                        if ( !$.data( this, 'plugin_' + pluginName ) ) {
                            $.data( this, 'plugin_' + pluginName, new SimpleSlides( this, options ) );
                        }
                    });
            };

    })( jQuery, window, document );
