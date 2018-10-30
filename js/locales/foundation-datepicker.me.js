/**
 * Montenegrin translation for foundation-datepicker, language file from bootstrap-datepicker
 * Miodrag Nikač <miodrag@restartit.me>
 */
;(function($){
	$.fn.fdatepicker.dates['me'] = {
		days: ["Nedjelja","Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
		daysShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
		daysMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
		months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
		monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
		today: "Danas",
		weekStart: 1,
		clear: "Izbriši",
		format: "dd.mm.yyyy"
	};

    $.fn.fdatepicker.dates['me-UL'] = {
        days: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
        daysShort: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
        daysMin: ["Ahd", "Ith", "Thu", "Arb", "Kha", "Jum", "Sab"],
        months: ["Muharram", "Safar", "‎Rabi'ul-Awwal", "Rabi'ul-Akhir", "Jumadal-Ula", "Jumadal-Akhir", "‎Rajab", "Sha'ban", "Ramadan", "Syawwal", "‎Dhul-Qa'da", "Dhul-Hijja"],
        monthsShort: ["Muh", "Saf", "RAw", "RAk", "JAw", "JAk", "Raj", "Sha", "Ram", "Sya", "DhQ", "DhH"],
        today: "Today",
        format: " mm-yyyy"
    }
}(jQuery));
