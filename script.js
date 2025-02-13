
const inputfield = document.querySelector('#myInput')
const parentContain = document.querySelector('#container')


parentContain.style.display = 'flex'
parentContain.style.flexDirection = "column" ;
parentContain.style.boxSizing = "border-box" ;

let color = "white"

const buttons = document.querySelectorAll('.color') ;
buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        color = button.id  
    })    
})

const btn = document.querySelectorAll('.toggle-button')
btn.forEach(function(butt){
    butt.addEventListener('click',function(e){
        btn.forEach((bt)=>{
            bt.style.backgroundColor = 'grey' ;
            butt.style.backgroundColor = 'rgb(35, 35, 85)' ;
        })
    })
})

document.querySelector('.reset').addEventListener('click', () => parentContain.innerHTML = 'Enter the size of the grid') ;
document.querySelector('.erase').addEventListener('click', () => color = 'white') 

parentContain.innerHTML = 'Enter the size of the grid' ;  

inputfield.addEventListener('keydown',(e) => {
    if(e.key === 'Enter'){

        inputfield.addEventListener('focus', () => {
            inputfield.value = ""; 
        });        
        
        const n = Number(inputfield.value)
        let count = 0 ;
        if(isNaN(n) || n < 2 || n > 100){
            parentContain.innerHTML = 'Enter a VALID input' ;
            inputfield.value = "";
            const inter = setInterval( () => {
                count++ ;
                if(count == 1){
                    clearInterval(inter) ;
                    parentContain.innerHTML = "Enter the size of the grid " ;
                }
            },1000)
            return ;            
        }

        const element = document.createElement('div') ;
        const size = 512/n + "px" ;

        parentContain.innerHTML = "" ;

        const toggle = document.querySelectorAll('.toggle-button') ;

        for(let i=1 ; i<=n ; i++){
            const div = document.createElement('div') ;
            div.style.display = 'flex' ;
            div.style.boxSizing = 'border-box' ;
            for(let j=1 ; j<=n ;j++){
                const element = document.createElement('div') ;
                element.style.height = size ;
                element.style.width = size ;
                element.style.border = "1px solid black" ;
                element.style.boxSizing = 'border-box' ;
                div.appendChild(element) ;
                element.addEventListener('mouseenter',(e) =>{
                    element.style.backgroundColor = color ;
                }) ;
            }
            parentContain.appendChild(div); 

        }
        parentContain.style.overflow = "hidden";
    }


})
