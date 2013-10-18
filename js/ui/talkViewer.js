/**
 * Gallery / Talk Viewer
 * @author Victor Duarte G'z
 */

;(function (GW, $) {
	'use strict';

	var settings = {
		SRC: "../img/image/"
	}
	/**
	 * @namespace UI package
	 */
	GW.ui = GW.ui || {};

	GW.ui.TalkViewer = (function () {
		var _$talkImage = $("#gallery-screen img");

		/**
		 * Set the indicated talk info
		 * @param {Object} object talk info
		 */
		function setTalkImage(object) {
			_$talkImage.attr('src', settings.SRC + object.image);
		}

		/**
		 * Initializer
		 */
		(function init() {
			$(document).on('SliderController:itemSet', function (event, talkData) {
				setTalkImage(talkData);
			});
        }());

		return {
			setTalkImage: setTalkImage,
		}
	}());

}(window.GW || {}, (window.jQuery || {})));