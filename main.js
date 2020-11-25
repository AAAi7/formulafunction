

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



    if( type.checked==true)
    {
        var c;
        c=base*height/2;
        window.alert(c);

    }
    else
    {
        var c;
        c=base*height;
        window.alert(c);

    }




}





}
