var btn1 = document.getElementById("notify");

btn1.addEventListener("click", notifyMe);

function notifyMe() {
    Notification.requestPermission().then(doIhavePermission => {
        if (doIhavePermission === "granted"){
            new Notification("you have been notified", {               // alert("yes got it!")
                body:"There is more than meets the eye.",
                icon: "./images/Cisco Logo.png",
                tag:  "twotime"
                                                                       //pres ctrl + space bar to see actions
            })
        }
    })
}