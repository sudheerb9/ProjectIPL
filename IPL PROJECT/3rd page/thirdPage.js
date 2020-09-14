function detailsValidat(){
    
    //alert(document.getElementsByClassName("mom").value);
        var a=document.getElementsByClassName("player");
        var b=document.getElementsByClassName("player1");
        var i=0;
        var count=0;
        for(i=0;i<50;i++)
            {
                if(i<25 && a[i].checked==true)
                    count+=1;
                if(i>=25 && b[i%25].checked==true)
                    count+=1;   
            }
       
        if(count<22)
            {
                alert("please select 11 player from each team");
                return false;
            }
        var manOfTheMatch = $(".mom");

        if(manOfTheMatch.val().trim() == "")
            {
                alert("please select man of the match");
                return false;
            }

        return true;
    }



function myfn1(){
    var i=0;
    var countCheckbox=0;
    var a=document.getElementsByClassName("player");
    for(i=0;i<a.length;i++)
        {
            
            if(a[i].checked==true)
                countCheckbox+=1;
 
        }

    if(countCheckbox>11)
    {
        alert("You can not select more than 11 players");
        return false;
    }
    return true;
}

function validate1(){
    var i=0;
    var countCheckbox=0;
    var a=document.getElementsByClassName("player");
    for(i=0;i<a.length;i++)
        {

            if(a[i].checked==true)
                countCheckbox+=1;
 
        }

    if(countCheckbox<11)
    {
        alert("please select 11 player");
        return false;
    }
    return true;
   
}

function myfn2(){
    var i=0;
    var countCheckbox=0;
    var a=document.getElementsByClassName("player1");
    for(i=0;i<a.length;i++)
        {

            if(a[i].checked==true)
                countCheckbox+=1;
 
        }

    if(countCheckbox>11)
    {
        alert("You can not select more than 11 players");
        return false;
    }
    return true;
}

function validate2(){
    var i=0;
    var countCheckbox=0;
    var a=document.getElementsByClassName("player1");
    for(i=0;i<a.length;i++)
        {

            if(a[i].checked==true)
                countCheckbox+=1;
 
        }

    if(countCheckbox<11)
    {
        alert("please select 11 player");
        return false;
    }
    return true;
   
}
