(function ($) {
	$.fn.twitParser = function(options) {
		"use strict";

		var defaults = {
			user: false,
			hashtag: false,
			url: false
		};

		var parametres=$.extend(defaults, options);
		var patternTag  	= /\B(#[á-úÁ-Úä-üÄ-Üa-zA-Z0-9_]+)/g;
		var patternUser  	= /\B(@[a-zA-Z0-9_]+)/g;
		var patternUrl  	= /(https?:\/\/[^\s\t\r\n<]*[^\s\t\r\n<)*_?,!\.])/g;
		var toSearch = $(this);

		if(parametres.url) {
			parseUrl(toSearch);
		}
		if(parametres.user) {
			parseUser(toSearch);
		}
		if(parametres.hashtag) {
			parseTag(toSearch);
		}
		function parseTag(node) {
			var content = node.html();
			var matches = content.split(patternTag);
			if(matches != null) {
				for(var j = 0; j < matches.length; j++) {
					var isOk = matches[j].search(patternTag);
						if(isOk != -1) {
							var newMatch = matches[j].replace("#", "");
							matches[j] = "<a href='"+parametres.hashtag+newMatch+"'>"+matches[j]+"</a>";
						}
					
				}
				node.html(matches.join(""));
			}
		}
		function parseUser(node) {
			var content = node.html();
			var matches = content.split(patternUser);
			if(matches != null) {
				for(var j = 0; j < matches.length; j++) {
					var isOk = matches[j].search(patternUser);
						if(isOk != -1) {
							var newMatch = matches[j].replace("@", "");
							matches[j] = "<a href='"+parametres.user+newMatch+"'>"+matches[j]+"</a>";
						}
					
				}
				node.html(matches.join(""));
			}
		}
		function parseUrl(node) {
			var content = node.html();
			var matches = content.split(patternUrl);
			if(matches != null) {
				for(var j = 0; j < matches.length; j++) {
					var isOk = matches[j].search(patternUrl);
						if(isOk != -1) {
							console.log(matches[j]);
							matches[j] = "<a href='"+matches[j]+"'>"+matches[j]+"</a>";
						}
					
				}
				node.html(matches.join(""));
			}
		}
	};
})(jQuery)