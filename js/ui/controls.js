/**
 * Gallery / Controls
 * @author Victor Duarte G'z
 */

;(function (GW, $) {
	'use strict';

	/**
	 * @namespace UI package
	 */
	GW.ui = GW.ui || {};

	GW.ui.Controls = (function () {
		var _$back = $(".gallery-back"),
			_$next = $(".gallery-next");

		/**
		 * Initializer
		 */
		(function init() {
			_$back.on('click', function (event) {
				event.preventDefault();
				$.event.trigger('SliderController:back');
			});
			_$next.on('click', function (event) {
				event.preventDefault();
				$.event.trigger('SliderController:next');
			});
        }());

		return {}
	}());

}(window.GW || {}, (window.jQuery || {})));