const PersonForm=document.getElementById('PersonForm');
const PersonInfo=document.getElementById('PersonInform');

//contructor
function Person(FisrtName,MiddleName,LastName,NickName,Birthday,Address,Age,Status,Work){
    this.FisrtName=FisrtName,
    this.MiddleName=MiddleName,
    this.LastName=LastName,
    this.NickName=NickName,
    this.Birthday= Birthday,
    this.Address=Address,
    this.Age= this.Age
    this.Status=Status
    this.Work=Work
} 
const Person1=new Person(FisrtName,MiddleName,LastName,NickName,Birthday,Address,Age,Status,Work);
const Person2=new Person(I,love,you,love,11,sky,14,single,student);
const Person3=new Person(I,miss,you,to,22,hgb,21,maried,teacher);

dislayPersonInfo(Person1, "Person1");
dislayPersonInfo(Person2, "Person2")
dislayPersonInfo(Person3, "Person3");

alert(JSON.stringify(studentform[1]));









const studentform=document.getElementById("PersonFrom");
const FisrtName=document.getElementById("FisrtName");
const MiddleName=document.getElementById("MiddleName");
const LastName=document.getElementById("LastName");
const NickName=document.getElementById("NickName");
const Birthday=document.getElementById("Birthday");
const Address=document.getElementById("Address");
const Age=document.getElementById("Age");
const Status=document.getElementById("Status");
const Work=document.getElementById("Work");
const btnSubmit=document.getElementById("btnSubmit");