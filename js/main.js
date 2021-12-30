let activar = true;
const bloque1 = document.getElementById("bloque1");
const bloque2 = document.getElementById("bloque2");
const btnIcon = document.getElementById("btn")


btnIcon.onclick = () => {
    let menuLines = btnIcon.children
    if(activar){
        activar=false;
        bloque1.classList.add('bloque1-active');
        bloque2.classList.add('bloque2-active');
        for(i=0;i<menuLines.length;i++){
            menuLines[i].classList.add('line-burger'+(i+1))
        }
    }else{
        activar=true;
        bloque1.classList.remove('bloque1-active');
        bloque2.classList.remove('bloque2-active');
        for(i=0;i<menuLines.length;i++){
            menuLines[i].classList.remove('line-burger'+(i+1))
        }     
    }
}

