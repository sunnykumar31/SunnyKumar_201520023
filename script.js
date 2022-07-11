window.onload=function(){
    document.getElementById("p1").innerText="Sunny kumar"
    document.getElementById("p2").innerText="201520023"
    document.getElementById("p3").innerText="GLA UNIVERSITY"
    date=new Date();
    year=date.getFullYear();
    mnt=date.getMonth()+1;
    day=date.getDate();
    document.getElementById("p4").innerText= day +"/" + mnt +"/" + year;
}