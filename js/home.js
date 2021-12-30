const homeIcons = document.getElementById("home-icons")

let itemsIcon = homeIcons.children

for(i=0;i<itemsIcon.length;i++){
    const icon = itemsIcon[i] 
    icon.onmouseenter = () =>{
        let h5 = document.createElement("h5")
        h5.innerHTML=icon.id
        icon.appendChild(h5)
        icon.onmouseleave = ()=>{
            icon.removeChild(h5)
        }
    }
}

