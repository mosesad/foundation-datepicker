/**
 * Occitan translation for foundation-datepicker, language file from bootstrap-datepicker
 * Alejandro Touza <atouza@opentrends.net>
 */
;(function($){
	if($.fn.fdatepicker){
		$.fn.fdatepicker.dates['oc'] = {
			days: ["Dimenge", "Diluns", "Dimars", "Dimècres", "Dijòus", "Divendres", "Dissabte"],
			daysShort: ["Dim",  "Dil", "Dmt", "Dmc", "Dij", "Div", "Dis"],
			daysMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
			months: ["Genièr", "Febrièr", "Març", "Abril", "Mai", "Junh", "Julh", "Agóst", "Setembr", "Octobre", "Novembre", "Decembre"],
			monthsShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dec"],
			today: "Uèi",
			clear: "Escafar",
			weekStart: 1,
			format: "dd/mm/yyyy"
		};

		$.fn.fdatepicker.dates['oc-UL'] = {
			days: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
			daysShort: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
			daysMin: ["Ahd", "Ith", "Thu", "Arb", "Kha", "Jum", "Sab"],
			months: ["Muharram", "Safar", "‎Rabi'ul-Awwal", "Rabi'ul-Akhir", "Jumadal-Ula", "Jumadal-Akhir", "‎Rajab", "Sha'ban", "Ramadan", "Syawwal", "‎Dhul-Qa'da", "Dhul-Hijja"],
			monthsShort: ["Muh", "Saf", "RAw", "RAk", "JAw", "JAk", "Raj", "Sha", "Ram", "Sya", "DhQ", "DhH"],
			today: "Today",
			format: " mm-yyyy"
	}
	}
}(jQuery));
