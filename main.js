document.getElementById("btnsurfacearea").addEventListener("click",surfacearea);
document.getElementById("btnconverttemp").addEventListener("click",converttemp);



function converttemp(c)
{
    var a;


    a=parseInt(c);
    a=a*2;
    a+=30;
    window.alert(c+" Celsius is "+a+" Fahrenheit");

}
function surfacearea()
{
  let base=document.getElementById('txtvalue2').value;
  let height=document.getElementById('txtvalue3').value;
  let type=document.getElementById('rad1').checked;
  


    if( type==true)
    {
        var c;
        c=base*height/2;
        window.alert("surface area is "+c);

    }
    else
    {
        var c;
        c=base*height;
        window.alert("surface area is "+c);

    }




}





