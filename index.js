const selectFontSize = document.querySelector("#selectFontSize");
const selectBgColor = document.querySelector("#selectBgColor")
const resetButton = document.querySelector("#resetButton");
const mainElement = document.querySelector("main");
//changeFontSize

const changeFontSize = (event)=>{
    const selectFont = event.target.value;
    mainElement.style.fontSize = selectFont;
    localStorage.setItem("fontSize",event.target.value);
}
const changeBgColor = (event)=>{
    const selectBackground = event.target.value;
    mainElement.style.backgroundColor = selectBackground;
    localStorage.setItem("backgroundColor",selectBackground);
}
const clearLocalStorage = () =>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("backgroundColor");
}
//set values
const setValues = (selectfont, bgColor)=>{
    selectFontSize.value = selectfont;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = selectfont;
    mainElement.style.backgroundColor = bgColor;
}
//localstorage value load
const initialSetup = ()=>{
    const selectfont = localStorage.getItem("fontSize");
    const bgColor = localStorage.getItem("backgroundColor");
    if(selectfont && bgColor){
        setValues(selectfont,bgColor);
    }
}


//add event listener

selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change",changeBgColor);
resetButton.addEventListener("click",clearLocalStorage);
initialSetup();