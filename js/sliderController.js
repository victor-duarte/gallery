/**
 * Gallery / Slider manager
 * @author Victor Duarte G'z
 */

;(function (GW, $) {
	'use strict';
	/**
	 * @namespace
	 */
	GW = GW || {};

	GW.SliderController = (function () {
		var $gallery = $("#gallery-widget");

		/**
		 * Set the object
		 */
		function setTalk(index) {
			GW.index = index;
			$.event.trigger('SliderController:itemSet', GW.talks[GW.index]);
			if(GW.index === 0) {
				$gallery.removeClass('last').addClass('first');
			} else if (GW.index === GW.talks.length - 1){
				$gallery.removeClass('first').addClass('last');
			} else {
				$gallery.removeClass('first').removeClass('last');
			}
		}

		/**
		 * Get the object
		 */
		function getTalk() {}

		/**
		 * Update reference of required item
		 */
		function previous() {
			if(GW.index === 0) {
				return false;
			}
			setTalk(GW.index - 1);
		}

		/**
		 * Update reference of required item
		 */
		function next() {
			if(GW.index === GW.talks.length - 1) {
				return false;
			}
			setTalk(GW.index + 1);
		}

		/**
		 * @constructer
		 */
		(function init() {
			$(document).on("set:talk", function (e, id) {
				setTalk(id);
			});

			$(document).on("SliderController:back", function (event) {
				previous();
			});

			$(document).on("SliderController:next", function (event) {
				next();
			});
		}());

		return {
			setTalk: setTalk,
			getTalk: getTalk
		}
	}());

}(window.GW || {}, (window.jQuery || {})));