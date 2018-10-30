/**
 * Polish translation for foundation-datepicker
 * Robert <rtpm@gazeta.pl>
 */
;(function($){
        $.fn.fdatepicker.dates['pl'] = {
                days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
                daysShort: ["Nie", "Pn", "Wt", "Śr", "Czw", "Pt", "So", "Nie"],
                daysMin: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So", "N"],
                months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                monthsShort: ["Sty", "Lu", "Mar", "Kw", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa", "Lis", "Gru"],
                today: "Dzisiaj",
                weekStart: 1
        };

    $.fn.fdatepicker.dates['pl-UL'] = {
        days: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
        daysShort: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
        daysMin: ["Ahd", "Ith", "Thu", "Arb", "Kha", "Jum", "Sab"],
        months: ["Muharram", "Safar", "‎Rabi'ul-Awwal", "Rabi'ul-Akhir", "Jumadal-Ula", "Jumadal-Akhir", "‎Rajab", "Sha'ban", "Ramadan", "Syawwal", "‎Dhul-Qa'da", "Dhul-Hijja"],
        monthsShort: ["Muh", "Saf", "RAw", "RAk", "JAw", "JAk", "Raj", "Sha", "Ram", "Sya", "DhQ", "DhH"],
        today: "Today",
        format: " mm-yyyy"
    }
}(jQuery));
