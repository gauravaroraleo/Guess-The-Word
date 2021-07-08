function login(){
    n1=document.getElementById("player1_name").value;
    n2=document.getElementById("player2_name").value;
    localStorage.setItem("p1name",n1);
    localStorage.setItem("p2name",n2);
    window.location="game.html";
    
    
    
    
    
}