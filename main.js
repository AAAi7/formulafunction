

function converttemp()
{
    var a;
    var c = document.getElementById("txtvalue1").value;

    a=parseInt(c);
    a=a*2;
    a+=30;
    window.alert(c+" Celsius is "+a+" Fahrenheit");

}
function surfacearea()
{
    var base = document.getElementById("txtvalue2").value;
    var height = document.getElementById("txtvalue3").value;
    var type = document.getElementById("inputtype1").value;


    if( document.getElementById("inputtype1").checked)
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