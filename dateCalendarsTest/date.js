

$(function () {
   
    function getCalendarOptions(calType){

        $(dateCtr).calendarsPicker('destroy')
        $(dateCtr).calendarsPicker('clear');

        $(dateCtr).calendarsPicker({
            calendar: $.calendars.instance(calType, 'en'),
            onSelect: date => {
                console.log(date);
            }
        });
    }

    // $('#dateTextbox').calendarsPicker();
    var dateCtr = $('#dateTextbox');
    getCalendarOptions("Gregorian");

    $("#lstDateType").change(function () {
        dateCtr.val("");

        var calType = this.value;
        if (calType != -1) {
           getCalendarOptions(calType);
            console.log(calType);
        }
    });
});