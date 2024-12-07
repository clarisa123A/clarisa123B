/**
  function Student(Name,lastname){
    console.log("my name is\n"+Name+"\n"+lastname);
}
Student("beverly","bonggay");
Student("beverly");

function CheckEmail(UserEmail){
    return UserEmail.include('@')?true:false;
}
const email =CheckEmail("beverly@gmail.com");
console.log(email);
console.log(CheckEmail("beverly@gmail.com"));

const sum =function(x,y){
    return x+y;
}
alert(sum(4,5));

const Diff=(x,y,z)=>{
    return x-y-z;
}
alert(Diff(10,10,10));
*/
const Multi=(x,y)=> x*y;
console.log(Multi(4,6));