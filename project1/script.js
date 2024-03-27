//get access of buttons 
const buttons = document.querySelectorAll('.button');
//console.log(buttons);

//get access of bg i.e, body so that on clicking button bgcolor changes
const body = document.querySelector("body")

//since we get node therefore we can use for loop
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event)
        console.log(event.target)
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id //or grey directly
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id 
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id 
        }
        if(event.target.id === 'red'){
            body.style.backgroundColor = event.target.id 
        }
        if(event.target.id === 'green'){
            body.style.backgroundColor = event.target.id 
        }
        if(event.target.id === 'black'){
            body.style.backgroundColor = event.target.id 
        }    
    
            })// it means when click event occur it will notice and do changes
})