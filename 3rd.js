let string='abc12&bd3&+@))hjskf'
let string1='sai}^bhanu68sekhar@+/reddy;[,1bandi\$'
function longest_word(string)
{
    string = string.match(/[a-zA-Z]+/gi);
    let long_word = '';
    for(let i of string)
    {
        if(i.length>long_word.length)
        {
            long_word=i
        }
    }
    console.log(long_word);
}
longest_word(string1)