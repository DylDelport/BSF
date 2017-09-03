    $(".block-welcome-button").hover(function() {
            
        $(this).animate({background: blue, opacity: 0.6}, 1000);
                
    });
    
    $(".submit").click(function(){
        
        var email = "";
        email = $(".email").html();
        
        alert("Submit");
        if(email == ""){
            alert("No email has been entered for the Newsletter Subscription.");
        } else{
            alert(email + "has been added to the Newsletter Subscription database.");
        }
        
    })
            
    //document.getElementById("Suscribe").onclick = function(){
                  
        //var emailEntered = "";
        //emailEntered = document.getElementsByClassName("email").value;    
                
        //alert(" has been added to the newsletter subscription");
    //}
        