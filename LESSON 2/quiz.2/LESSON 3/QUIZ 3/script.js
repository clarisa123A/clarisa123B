/**function checkletter(letter){
    const uppercaseletter=letter.uppercaseletter();
    const vowels=['A','E','I','O','U'];
    if(vowels.includes(uppercaseletter)){
        console.log('The letter${letter} is a vowels.');
    } else if (uppercaseletter>='A' & uppercaseletter<= 'Z'){
        console.log('The letter${letter} is a consonant.');
    }else{
        console.log('${letter}is not a valid letter.');

    }
    let input= document.querySelectorAll("input[type='text']");
    input.forEach(function(input){
        input.value="";
    });
}
    */
  const vowel=['a','e','i','o','u'];
  if(input .include(vowel)){
    console.log("vowels");
       
    }else{
        console.log("consonant");
    }
  CHECKVOWCONS('A');
{
    
}