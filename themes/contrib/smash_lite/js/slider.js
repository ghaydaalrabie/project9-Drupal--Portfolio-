/*! Morphist - v3.0.0 - 2016-03-28 */!function(a){"use strict";function b(b,c){this.element=a(b),this.settings=a.extend({},d,c),this._defaults=d,this._init()}var c="Morphist",d={animateIn:"bounceIn",animateOut:"rollOut",speed:2e3,complete:a.noop};b.prototype={_init:function(){this._animationEnd="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",this.children=this.element.children(),this.element.addClass("morphist"),this.index=0,this.loop()},_shouldForceReflow:function(a){this.settings.animateIn===this.settings.animateOut&&a[0].offsetWidth},_animate:function(a,b,c){a.addClass("animated "+b).one(this._animationEnd,function(){c()})},loop:function(){var b=this,c=this.children.eq(this.index),d=function(){b.timeout=setTimeout(function(){c.removeClass(),b._shouldForceReflow(c),b._animate(c,"mis-out "+b.settings.animateOut,function(){b.index=++b.index%b.children.length,c.removeClass(),b.loop()})},b.settings.speed)};this._animate(c,"mis-in "+this.settings.animateIn,function(){d(),a.isFunction(b.settings.complete)&&b.settings.complete.call(b)})},stop:function(){clearTimeout(this.timeout)}},a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(this,d))})}}(jQuery);
(function($){
  Drupal.behaviors.light_slider = {
    attach: function (context, settings) {
      jQuery(document).ready(function ($) {
        $(".js-rotating").Morphist({
          animateIn: 'bounceIn',
          animateOut: 'fadeOutLeft',
          speed: 5000,
        });
      });
    }
  };
})(jQuery);
  