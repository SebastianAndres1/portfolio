const btnPrev = document.getElementById('btnPrev')
const btnNext = document.getElementById('btnNext')
const dashProject = document.getElementById('dash-project')
const imgProject = document.getElementById('img-project')
const titleProject = document.getElementById('title-project')
const textProject = document.getElementById('text-project')

const data =[
    {
        title:'Laravel & Vuejs',
        text:'Social app',
        img:'img/main.jpg',
        tecnology:{
            icons:'',
            label:''
        },
    },
    {
        title:'Flask & React',
        text:'app task',
        img:'img/hero.gif',
        tecnology:{
            icons:'',
            label:''
        },
    },
    {
        title:'Django & postgress',
        text: `
            app
        
        `,
        img:'img/hero.jpg',
        tecnology:{
            icons:'',
            label:''
        },
    },
    {
        title:'Node js & React',
        text:'i make api rest in flask 2',
        img:'img/main.jpg',
        tecnology:{
            icons:'',
            label:''
        },
    },
    {
        title:'React & Redux',
        text:'i make api rest in flask 2',
        img:'img/hero.gif',
        tecnology:{
            icons:'',
            label:''
        },
    },

] 

let index = 0
let lastIndex = data.length - 1



const reload = (index,lastIndex) =>{
    index <= 0 ? (btnPrev.disabled = true, index = 0) : btnPrev.disabled = false
    index >= lastIndex ? (btnNext.disabled = true, index = lastIndex) : btnNext.disabled = false
    
    imgProject.src = data[index].img
    titleProject.innerHTML = data[index].title
    textProject.innerHTML = data[index].text
   
}

reload(index,lastIndex)

btnPrev.onclick = () => { 
    index = index-1
    dashProject.className = "dash animate__animated animate__backOutRight"
    setTimeout(()=>{reload(index,lastIndex)},300) 
    setTimeout(()=>{dashProject.className = "dash animate__animated animate__backInLeft"},300)
}
btnNext.onclick = () => {
    index = index+1
    dashProject.className = "dash animate__animated animate__backOutLeft"
    setTimeout(()=>{reload(index,lastIndex)},300) 
    setTimeout(()=>{dashProject.className = "dash animate__animated animate__backInRight"},300)
}
