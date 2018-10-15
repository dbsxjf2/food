(function($) {
    "use strict"; // Start of use strict

    // Get a reference to the database service
    var database = firebase.database().ref('/purchases/');    

    database.on('child_added', function (data) {
       console.log("date: " + data.val().date);
       console.log("userName: " + data.val().userName);
       console.log("menuName: " + data.val().menuName);
       console.log("count: "+data.val().amount);

       var htmlString = "";

       htmlString += '<tr>';
       htmlString += '<td>'+data.val().date+'</td>';
       htmlString += '<td>'+data.val().userName+'</td>';
       htmlString += '<td>'+data.val().menuName+'</td>';
       htmlString += '<td>'+data.val().amount+'</td>';
       htmlString += '</tr>';
   
       $("#js-table").append(htmlString);

       console.log("sample data added.");

       $(".odd").css("display","none");
    });    

})(jQuery); // End of use strict
