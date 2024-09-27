const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target)

        if(e.target.id == 'gray'){
            body.style.backgroundColor ='gray'
        }
        if(e.target.id == 'purple'){
            body.style.backgroundColor ='purple'
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor ='blue'
        }
        if(e.target.id == 'yellow'){
            body.style.backgroundColor ='yellow'
        }
    })
})
