(function($) {
    "use strict"; // Start of use strict

    // Get a reference to the database service
    var database = firebase.database();

    function _writeUserData(date, id, userName, menuName) {
        firebase.database().ref('purchases/' + date).set({
          date: date,
          id: id,
          userName: userName,
          menuName : menuName
        });
    }

    $("#btnPurchase").click(function(){
        console.log("Menu: " + $("#menuName").val() );
        console.log("Name: " + $("#userName").val() );
        var dt = new Date();
        var time = "" + dt.getFullYear() + ("0" + (dt.getMonth() + 1)).slice(-2) + ("0" + (dt.getDate())).slice(-2) + dt.getHours() + ("0" + (dt.getMinutes())).slice(-2) + ("0" + (dt.getSeconds())).slice(-2);
        console.log("Time: " + time );
        console.log("userId: " + time);
        _writeUserData(time, time, $("#userName").val(), $("#menuName").val());
    });

})(jQuery); // End of use strict