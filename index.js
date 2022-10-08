function search(){
    const input = document.getElementById('input').value ;
    const para = document.getElementById('para');
    const vowel = ['A','a','E','e','I','i','O','o','U','u'];
    let count = 0;
    for(let letter of input){
        if(!isNaN(letter)){
            alert('Please type letter value');
        }
        else if(vowel.includes(letter)){
            count++;
        }
    }
    para.innerText = count;
}