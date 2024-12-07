const course = document.getElementById("Result");
const SelectCourse= document.querySelector("select");
const btnSearch = document.getElementById("btnSearch");

SelectCourse.addEventListener("change",()=>{
course.innerText = SelectCourse.value ;
});
btnSearch.addEventListener('click',e=>{
    const typesearch=window.prompt("search course").toUpperCase();
    console.log(typesearch);
    SelectCourse.vale=typesearch;
    course.innerText=SelectCourse.value;
})
