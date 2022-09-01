let string1='Race CAR'
let string2='Ginger Green'
let string3='sai bhanu bandi'
function Non_rep_char(string)
{
    string=string.toLowerCase()
    let is_contain=false
    for(let i of string)
    {
        if(string.indexOf(i)===string.lastIndexOf(i))
        {
            console.log(i)
            is_contain=true
            break
        }
    }
    if (is_contain===false) 
    {
        console.log('empty');
    }
}
Non_rep_char(string2)