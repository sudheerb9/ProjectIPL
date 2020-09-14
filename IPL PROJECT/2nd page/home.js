function myfn()
{
  var a=document.getElementsByClassName("team");
  var x=0;
  var i;
  for(i=0;i<a.length;i++)
  {
    if(a[i].checked==true)
    x++;
  }
  if(x>=5)
  {
    var s=document.getElementById("not-valid");
    s.innerHTML="**Please select exactly four";
    return false;
  }
}

function mybtn()
{
  var a=document.getElementsByClassName("team");
  var x=0;
  var i;
  for(i=0;i<a.length;i++)
  {
    if(a[i].checked==true)
    x++;
  }
  if(x<4)
  {
    alert("kindly fill all the details");
    return false;
  }
  var y=document.getElementById("branch").selectedIndex;
  var z=document.getElementById("branchw").selectedIndex;
  if(document.getElementsByTagName("option")[y].value=="select"||document.getElementsByTagsName("option")[z].value=="select")
  {
    alert("kindly fill all the details");
    return false;
  }
}
