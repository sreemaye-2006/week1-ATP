//Write a function that receives 3 number args and  return the big number
function big(a,b,c)
{
    if(a>b && a>c)
    {
        console.log("a is greater")
    }
    else if(b>a && b>c)
    {
        console.log("b is greater")
    }
    else{
        console.log("c is greater")
    }
    return a,b,c
}
big(10,40,30)
