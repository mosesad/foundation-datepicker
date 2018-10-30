/**
 * Hebrew translation for foundation-datepicker
 * Sagie Maoz <sagie@maoz.info>
 */
;(function($){
  $.fn.fdatepicker.dates['he'] = {
      days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"],
      daysShort: ["א", "ב", "ג", "ד", "ה", "ו", "ש", "א"],
      daysMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש", "א"],
      months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
      monthsShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
      today: "היום",
      rtl: true
  };

  $.fn.fdatepicker.dates['he-UL'] = {
    days: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
    daysShort: ["Ahad", "Ithnin", "Thulatha", "Arba'a", "Khams", "Jumu'ah", "Sabt"],
    daysMin: ["Ahd", "Ith", "Thu", "Arb", "Kha", "Jum", "Sab"],
    months: ["Muharram", "Safar", "‎Rabi'ul-Awwal", "Rabi'ul-Akhir", "Jumadal-Ula", "Jumadal-Akhir", "‎Rajab", "Sha'ban", "Ramadan", "Syawwal", "‎Dhul-Qa'da", "Dhul-Hijja"],
    monthsShort: ["Muh", "Saf", "RAw", "RAk", "JAw", "JAk", "Raj", "Sha", "Ram", "Sya", "DhQ", "DhH"],
    today: "Today",
    format: " mm-yyyy"
}
}(jQuery));
