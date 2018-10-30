/**
 * Hungarian localisation
 */
;(function($){
	$.fn.fdatepicker.dates['hu'] = {
        days: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"],
        daysShort: ["Vas", "Hét", "Kedd", "Sze", "Csü", "Pén", "Szo", "Vas"],
        daysMin: ["Va", "Hé", "Ke", "Sz", "Cs", "Pé", "Sz", "Va"],
        months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
        monthsShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
        today: "Ma"
        };

        $.fn.fdatepicker.dates['hu-UL'] = {
                days: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
                daysShort: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
                daysMin: ["Ahd", "Ith", "Thu", "Arb", "Kha", "Jum", "Sab"],
                months: ["Muharram", "Safar", "‎Rabi'ul-Awwal", "Rabi'ul-Akhir", "Jumadal-Ula", "Jumadal-Akhir", "‎Rajab", "Sha'ban", "Ramadan", "Syawwal", "‎Dhul-Qa'da", "Dhul-Hijja"],
                monthsShort: ["Muh", "Saf", "RAw", "RAk", "JAw", "JAk", "Raj", "Sha", "Ram", "Sya", "DhQ", "DhH"],
                today: "Today",
                format: " mm-yyyy"
            }
}(jQuery));
