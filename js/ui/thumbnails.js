/**
 * Gallery / Thumbnail manager
 * @author Victor Duarte G'z
 */

;(function (GW, $) {
	'use strict';
	/**
	 * @namespace UI package
	 */
	GW.ui = GW.ui || {};

	GW.ui.Thumbnails = (function () {
		var _$thumbWrapper = $("#thumbnails");
		GW.activeTalk = 0;

		/**
		 * Code to execute when clicked on a thumbnail
		 */
		function clickOnThumbnail(event) {
			event.preventDefault();
			var $this = $(event.currentTarget),
				dataId = $this.data('id');
			// Trigger messages 'objectClicked'
			setSelectedThumbnail(dataId - 1)
		}

		/**
		 * Updates reference of selected thumbnail and DOM
		 */
		function updateThumbnailSelection(talk) {
			_$thumbWrapper.find('li').removeClass('selected');
			_$thumbWrapper.find('li').eq(talk.id - 1).addClass('selected');
		}

		/**
		 * @return {Number} selected thumbnail reference
		 */
		function getSelectedThumbnail() {
			return GW.activeTalk;
		}

		/**
		 * Set the indicated thumbnail
		 */
		function setSelectedThumbnail(id) {
			// TODO: add a range to not allow a value larger than the number of items
			$.event.trigger('set:talk', id)
		}

		/**
		 * Builds thumbnail DOM object
		 */
		function buildThumbnailsObject(photos) {
			var $wrapper = $("#thumbnails"),
				$fragment = $(document.createDocumentFragment());

			$.each(photos, function (i) {
				// TODO: use templating instead of this (sigh)
				var $item = $(document.createElement('li')),
					$link = $(document.createElement('a')),
					$img = $(document.createElement('img'));
				$link.attr({
					"href": "#",
					"data-id" : photos[i].id,
					"title": photos[i].title,
					"target": "_blank"
				});
				$img.attr({
					"src": "../img/" + photos[i].thumb_url,
					"width": 100,
					"height": 60,
					"alt": "",
					"border": 0
				});
				// Building fragment
				$item.append($link.append($img));
				$fragment.append($item);
			});
			// Append to DOM
			$wrapper.append($fragment);
		}

		/**
		 * Initializer
		 */
		function init() {
			$(document).on('data:loaded', function (event, data) {
				buildThumbnailsObject(data.photos);
				setSelectedThumbnail(GW.activeTalk) // select initial
				$("#thumbnails a").on("click", clickOnThumbnail);
			});
			$(document).on('SliderController:itemSet', function (event, talkData) {
				updateThumbnailSelection(talkData);
			});
		};
		init();

		return {
			init: init,
			getSelectedThumbnail: getSelectedThumbnail,
			setSelectedThumbnail: setSelectedThumbnail
		}
	}());

}(window.GW || {}, (window.jQuery || {})));