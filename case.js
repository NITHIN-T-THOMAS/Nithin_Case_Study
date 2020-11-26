function home(){
    window.location.replace("index.html");
}


$(document).ready(function(){
    $("#btn").click(function(){
        var a="";
        a= $("#use").val();
        console.log(a);
        var b=  $("#pwd").val();
        if(a==""||b==""){
            alert("enter all fields");
        }
        else if(a=="admin"&&b=="12345"){
            window.location.href = "main.html";
        }
        else{
            alert("invalid username or password");
        }
    });
});

function todo(){
    //Creating an XHR Object
var xhttp = new XMLHttpRequest();
//Eventlistener
xhttp.onreadystatechange = function(){
    //condition
    if(this.readyState==4 && this.status==200){
        var resoponse = JSON.parse(this.responseText);
        //console.log(resoponse);
        var thetable = resoponse;
        // console.log(thetable[1].title);
        var output1=""
        var output2="<tr><th>Completed</th> <th>Titled</th></tr>"
        var check = ""
        for(var i=0; i<thetable.length; i++){
            if(thetable[i].completed != false){
                check = "checked"
            }
            else{
                check = ""
            }
            output1 +="<tr><td class='yup' >"+ "<input class='checker' type='checkbox'"+ check +">" +"</td>"
            output1 +="<td>"+ thetable[i].title +"</td></tr>"

        }
        // console.log(output1);
        var out =output2+output1;
        document.getElementById("custom").innerHTML=out;
    }

        var count=0;
        $(".checker").click(function(){
            var prom  = new Promise(function(resolve,reject){
                count = count + 1;
                if(count == 5){
                    resolve("Congrats!!");
                }
            })

            prom
            .then(function(s){
                alert(s+"5 Tasks have been Successfully Completed ");
            })

        });

}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}


