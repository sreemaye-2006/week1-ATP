//Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.
function search(key)
{
    let marks=[90,78,89,45]
    for(let index=0;index<marks.length;index++)
    {
        if(marks[index]==key)
            {
            console.log("the index is " ,index)
            return;
        }
    }
    console.log("not found")
}
search(90);