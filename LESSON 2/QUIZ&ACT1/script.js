let array=["push","pop"];
const dataView = document.getElementById("Dataview");
const inputVal = document.getElementById("inputval");
const btnPush = document.getElementById("btnPush");
const btnPop = document.getElementById("btnPop");
const Filter = document.getElementById("Filter");
const Includes = document.getElementById("Includes");
const Sort = document.getElementById("Sort");
const Join = document.getElementById("Join");

const ArrayData = [];

//push function
btnPush.addEventListener("click",()=>{
    if(ArrayData.includes(InputData.Value)){
    alert("The data exist on array");    
    }else{
        ArrayData.push(InputData.Value)
        alert("success data push");
        dataView.textContent=`${ArrayData}`;
    }

});
pop.addEventListener("click",()=>{
    if(ArrayData.includes(InputData.Value)){
    alert("not  exist on array");    
    }else{
        ArrayData.pop(InputData.Value)
        alert('the data is not exist.');
        dataView.textContent=`${ArrayData}`;
    }
});
filter.addEventListener("click",()=>{
    if(ArrayData.includes(InputData.Value)){
    alert("not  exist on array");    
    }else{
        ArrayData.pop(InputData.Value)
        alert("no  data  to pop");
        dataView.textContent=`${ArrayData}`;
    }
});
Filter.addEventListener("click",()=>{
    if(ArrayData.includes(InputData.Value)){
    alert("not  exist on array");    
    }else{
        ArrayData.pop(InputData.Value)
        alert('the data is not exist.');
        dataView.textContent=`${ArrayData}`;
    }
});
includes.addEventListener("click",()=>{
    if(ArrayData.includes(InputData.Value)){
    alert("not  exist on array");    
    }else{
        ArrayData.pop(InputData.Value)
        alert('the data is not exist.');
        dataView.textContent=`${ArrayData}`;
    }
});
sort.addEventListener("click",()=>{
    if(ArrayData.includes(InputData.Value)){
    alert("not  exist on array");    
    }else{
        ArrayData.pop(InputData.Value)
        alert('the data is not exist.');
        dataView.textContent=`${ArrayData}`;
    }
});
join.addEventListener("click",()=>{
    if(ArrayData.includes(InputData.Value)){
    alert("not  exist on array");    
    }else{
        ArrayData.pop(InputData.Value)
        alert('the data is not exist.');
        dataView.textContent=`${ArrayData}`;
    }
});
displaydata();


