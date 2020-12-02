document.getElementById("btnsurfacearea").addEventListener("click",surfacearea1);
document.getElementById("btnconverttemp").addEventListener("click",converttemp1);

function surfacearea1()
{
    let base=document.getElementById('txtvalue2').value;
  let height=document.getElementById('txtvalue3').value;
  let type=document.getElementById('rad1').checked;
  surfacearea(base,height,type);

}
function converttemp1()
{
    c=document.getElementById("txtvalue1").value;
    converttemp(c);


}

function converttemp(c)
{
    var a;


    a=parseInt(c);
    a=a*2;
    a+=30;
    window.alert(c+" Celsius is "+a+" Fahrenheit");

}
function surfacearea(base,height,type)
{
  
  


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
