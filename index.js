$(function () {
    $("#search").click(function () {
        $("form").submit(function (e) {
            e.preventDefault();
        });
        console.log($(document.activeElement).val());
        console.log('Output: I got executed');
        var key = $("#keywordSearch").val();
        key = key.toLowerCase();
        var searchres = "We found " + key + " in";
        var a = key;
        $.getJSON("https://storage.googleapis.com/faas-output/reducer_output.json",
            function (data) {
                var student = '';
                // ITERATING THROUGH OBJECTS
                $.each(data, function (key, value) {

                    //CONSTRUCTION OF ROWS HAVING
                    // DATA FROM JSON OBJECT
                    student += '<tr>';
                    student += '<td>' +
                        key + '</td>';

                    student += '</tr>';
                });

                //INSERTING ROWS INTO TABLE 
                $('#table').append(student);
        });
    });
});
