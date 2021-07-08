Player1name = localStorage.getItem("p1name");
Player2name = localStorage.getItem("p2name");
document.getElementById("p1_name").innerHTML = Player1name + " : ";
document.getElementById("p2_name").innerHTML = Player2name + " : ";
player1score = 0;
player2score = 0;
document.getElementById("p1score").innerHTML = player1score;
document.getElementById("p2score").innerHTML = player2score;
document.getElementById("pq").innerHTML = "Question turn : " + Player1name;
document.getElementById("pa").innerHTML = "Answer turn : " + Player2name;

function send() {
    getword = document.getElementById("word").value;
    finalword = getword.toLowerCase();

    c1 = finalword.charAt(1);

    count = Math.floor(finalword.length / 2);
    c2 = finalword.charAt(count);

    len = finalword.length - 1;
    c3 = finalword.charAt(len);

    removec1 = finalword.replace(c1, "_");

    removec2 = removec1.replace(c2, "_");

    removec3 = removec2.replace(c3, "_");

    qword = "<h4 id='wordisplay'>Q: " + removec3 + "</h4>";
    ibox = "<br>type answer: <input type ='text'id= 'checkans'> ";
    cbutton = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    total = qword + ibox + cbutton;
    document.getElementById("output").innerHTML = total;
    document.getElementById("word").value = "";
}

questionturn = "player1";
answerturn = "player2";

function check() {
    getans = document.getElementById("checkans").value;
    finalans = getans.toLowerCase();
    if (finalans == finalword) {
        if (answerturn == "player1") {
            player1score = player1score + 1;
            document.getElementById("p1score").innerHTML = player1score;
        } else {
            player2score = player2score + 1;
            document.getElementById("p2score").innerHTML = player2score;
        }
    }
    if (questionturn == "player1") {
        questionturn = "player2";
        document.getElementById("pq").innerHTML = "question turn: " + Player2name;
    } else {
        questionturn = "player1";
        document.getElementById("pq").innerHTML = "question turn : " + Player1name;
    }
    if (answerturn == "player1") {
        answerturn = "player2";
        document.getElementById("pa").innerHTML = "answer turn : " + Player2name;
    } else {
        answerturn = "player1";
        document.getElementById("pa").innerHTML = "answer turn : " + Player1name;
    }
    document.getElementById("output").innerHTML = "";

}
