/**
 * Gallery / Talk Title
 * @author Victor Duarte G'z
 */

;(function (GW, $) {
	'use strict';
	/**
	 * @namespace UI package
	 */
	GW.ui = GW.ui || {};

	GW.ui.TalkTitle = (function () {
		var _$talkTitle = $("#talk");

		/**
		 * Set the indicated talk info
		 * @param {Object} object talk info
		 */
		function setTalkTitle(object) {
			_$talkTitle.find('h2').text(object.title);
			_$talkTitle.find('h3').html('In the wild, a ' + object.animal + ' on '
			 + object.date);
		}

		/**
		 * Initializer
		 */
		(function init() {
			$(document).on('SliderController:itemSet', function (event, talkData) {
				setTalkTitle(talkData);
			});
        }());

		return {
			setTalkTitle: setTalkTitle,
		}
	}());

}(window.GW || {}, (window.jQuery || {})));