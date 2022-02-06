function pageLoaded(){
    const input=document.querySelector(".enter-form__input");
    const selectOnly=document.querySelector(".form__select_only");
    const btn=document.querySelector(".button");
    const spanError=document.querySelector(".error-span");
    const resultP=document.querySelector(".result__p");
    const declension=document.querySelector(".result-div__p-declension_ordinal");
    let regexp1=new RegExp(/([^0-9][а|я]$)/);
let regexp2=new RegExp(/([^0-9][е|о]$)/);
let regexp3=new RegExp(/([^0-9]ь$)/);
    let newString;
    let newString2;
    let newString3;
    input.addEventListener("input", EnterInput)
    function EnterInput(){

        if(input.value!=""&&regexp1.test(input.value)){
            spanError.textContent="";
            declension.textContent="Слово относится к первому склонению"
            console.log(input.value)
        }else if(input.value!=""&&regexp2.test(input.value)){
            spanError.textContent="";
            declension.textContent="Слово относится ко второму склонению"
        } else if(input.value!=""&&regexp3.test(input.value)){
            spanError.textContent="";
            declension.textContent="Слово относится к третьему склонению"
        }
        else{
            console.log(input.value)
              spanError.textContent=`Введите слово (имя существительное в единственном числе)  в указанное поле`;
              declension.textContent=""   
        }
		console.log(input.value);
    }
selectOnly.addEventListener('click', chooseSelect);
function chooseSelect(){ 
    let str=document.querySelector(".enter-form__input").value;
    if (regexp1.test(str)){
        firstTransformWord();
    }else{
        console.log(regexp1.test(str))
    }
    if(regexp2.test(str)){
        SecondTransformWord();
    }else {
        console.log(regexp2.test(str))
    }
    if (regexp3.test(str)){
        ThirdTransformWord();
    }else{
        console.log(regexp3.test(str))
    }
}
function firstTransformWord(newString){
    let valueOption=document.querySelector(".form__select_only").value;
    let str=document.querySelector(".enter-form__input").value;
if(valueOption=="Именительный"){
     newString=str.slice(0, -1).concat("(а,я)");
    
}else if (valueOption=="Родительный"){
      newString=str.slice(0, -1).concat("ы(и)");
    
}else if(valueOption=="Дательный"){
      newString=str.slice(0, -1).concat("е(и)");
      
} else if(valueOption=="Винительный"){
     newString=str.slice(0, -1).concat("у(ю)");
    
}else if(valueOption=="Творительный"){
      newString=str.slice(0, -1).concat("ой(ою)");
      
}else{
     newString=str.slice(0, -1).concat("е(и)"); 
}
return resultP.textContent=`${newString}`
}

function SecondTransformWord(newString2){
    let valueOption=document.querySelector(".form__select_only").value;
    let str=document.querySelector(".enter-form__input").value;
if(valueOption=="Именительный"){
     newString2=str.slice(0, -1).concat("(о,е)");
    
}else if (valueOption=="Родительный"){
      newString2=str.slice(0, -1).concat("(а,я)");
    
}else if(valueOption=="Дательный"){
      newString2=str.slice(0, -1).concat("(у,ю)");
      
} else if(valueOption=="Винительный"){
     newString2=str.slice(0, -1).concat("(о,е)");
    
}else if(valueOption=="Творительный"){
      newString2=str.slice(0, -1).concat("(ом, ем)"); 
}else{
     newString2=str.slice(0, -1).concat("(е,и)");
     
}
return resultP.textContent=`${newString2}`
}
 
function ThirdTransformWord(newString3){
    let valueOption=document.querySelector(".form__select_only").value;
    let str=document.querySelector(".enter-form__input").value;
if(valueOption=="Именительный"){
     newString3=str.slice(0);
    
}else if (valueOption=="Родительный"){
      newString3=str.slice(0, -1).concat("и");
    
}else if(valueOption=="Дательный"){
      newString3=str.slice(0, -1).concat("и");
      
} else if(valueOption=="Винительный"){
     newString3=str.slice(0);
    
}else if(valueOption=="Творительный"){
      newString3=str.slice(0, -1).concat("ю");
      
}else{
     newString3=str.slice(0, -1).concat("и");
     
}
return resultP.textContent=`${newString3}`

}
}
document.addEventListener ("DOMContentLoaded", pageLoaded);