document.getElementById("btnsurfacearea").addEventListener("click",surfacearea1);
document.getElementById("btnconverttemp").addEventListener("click",converttemp1);

function surfacearea1()
{
    let base=document.getElementById('txtvalue2').value;
  let height=document.getElementById('txtvalue3').value;
  let type=document.getElementById('rad1').checked;
  
  window.alert("surface area is "+surfacearea(base,height,type));
   

}
function converttemp1()
{
    c=document.getElementById("txtvalue1").value;
    window.alert(" Celsius is "+converttemp(c)+" Fahrenheit");


}

function converttemp(c)
{
    var a;


    a=parseInt(c);
    a=a*2;
    a+=30;
    return a;

}
function surfacearea(base,height,type)
{
  
  


    if( type==true)
    {
        var c;
        c=base*height/2;
        return c;
    }
    else
    {
        var c;
        c=base*height;
        return c;

    }




}
