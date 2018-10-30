/**
 * Serbian cyrillic translation for foundation-datepicker
 * Bojan Milosavlević <milboj@gmail.com>
 */
;(function($){
	$.fn.fdatepicker.dates['rs'] = {
		days: ["Недеља","Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота", "Недеља"],
		daysShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб", "Нед"],
		daysMin: ["Н", "По", "У", "Ср", "Ч", "Пе", "Су", "Н"],
		months: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
		monthsShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
		today: "Данас"
	};

    $.fn.fdatepicker.dates['rs-UL'] = {
        days: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
        daysShort: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
        daysMin: ["Ahd", "Ith", "Thu", "Arb", "Kha", "Jum", "Sab"],
        months: ["Muharram", "Safar", "‎Rabi'ul-Awwal", "Rabi'ul-Akhir", "Jumadal-Ula", "Jumadal-Akhir", "‎Rajab", "Sha'ban", "Ramadan", "Syawwal", "‎Dhul-Qa'da", "Dhul-Hijja"],
        monthsShort: ["Muh", "Saf", "RAw", "RAk", "JAw", "JAk", "Raj", "Sha", "Ram", "Sya", "DhQ", "DhH"],
        today: "Today",
        format: " mm-yyyy"
    }
}(jQuery));
