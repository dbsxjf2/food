(function($) {
    "use strict"; // Start of use strict

    // Get a reference to the database service
    var database = firebase.database();

    function _writeUserData(date, id, userName, menuName, amount,resultNum) {
        firebase.database().ref('purchases/' + date).set({
          date: date,
          id: id,
          userName: userName,
          menuName : menuName,
          amount: amount,
          resultNum: resultNum,
        });
    }

    $("#btnPurchase").click(function(){
        console.log("Menu: " + $("#menuName").val() );
        console.log("Name: " + $("#userName").val() );
        var dt = new Date();
        var time = "" + dt.getFullYear() + ("0" + (dt.getMonth() + 1)).slice(-2) + ("0" + (dt.getDate())).slice(-2) + dt.getHours() + ("0" + (dt.getMinutes())).slice(-2) + ("0" + (dt.getSeconds())).slice(-2);
        console.log("Time: " + time );
        console.log("userId: " + time);
        _writeUserData(time, time, $("#userName").val(), $("#menuName").val(), $("#amount").val());
        console.log("Count: "+ $("#amount").val());
        console.log("result: "+$("#resultNum").val());
    });

    $("#js-plus").click(function(){
        console.log("Amount: " + $("#amount").val() );
    });

    $("#js-minus").click(function(){
        console.log("Amount: " + $("#amount").val() );
    });

})(jQuery); // End of use strict
