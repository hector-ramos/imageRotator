/* */
var loginName = prompt("Who are you?");


if (loginName === "hector") {
    alert("Welcome to your first plugin!");
} else {
    var answer = prompt("Are you a friend of Hector?");
    if (answer === "yes") {
        alert("Ok you can enter my sample plugin");
    } else {
        alert("Ooopppssss!!!!! Impakto ka!");
    }
}

