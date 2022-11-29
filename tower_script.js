window.onload = ring_check(), reset_game()

function allowDrop(ev) 
{
    ev.preventDefault()
}
  
function drag(ev) 
{
    ev.dataTransfer.setData("Text", ev.target.id)
    //console.log(ev.dataTransfer.setData("Text", ev.target.id))
}
  
function drop(ev) 
{
    const stick1 = document.querySelector('#stick1')
    let drag_id, elem_id
    var data = ev.dataTransfer.getData("Text")
    console.log(data[4])

    if(ev.target.children.length > 1)
    {
        let fc = ev.target.children[0]
        let par = ev.target.children[1]
        let id_del = fc.getAttribute('id')
        let elem = document.getElementById(id_del)
        console.log(par.getAttribute('id')[4])
        if(fc.getAttribute('id')[4] < par.getAttribute('id')[4])
        {
            ev.target.insertBefore(document.getElementById(data), ev.target.firstChild)
            ev.preventDefault()
        }
            
    }
    else if(ev.target.children.length == 0)
    {
        ev.target.insertBefore(document.getElementById(data), ev.target.firstChild)
        ev.preventDefault()
    }
    else if(ev.target.children.length == 1)
    {
        if(data[4] < ev.target.children[0].getAttribute('id')[4])
        ev.target.insertBefore(document.getElementById(data), ev.target.firstChild)
        ev.preventDefault()
    }

    //ring_check()
    end_game()
    draggable_attrib()
    
}


function ring_check()
{
    console.clear()
    const stick1 = document.querySelector('#stick1')
    const stick2 = document.querySelector('#stick2')
    const stick3 = document.querySelector('#stick3')
    console.log("stick1")
    for(i=0; i<=stick1.children.length-1; i++)
        console.log(stick1.children[i].getAttribute('id'))

    console.log("")
    console.log("stick2")
    for(i=0; i<=stick2.children.length-1; i++)
        console.log(stick2.children[i].getAttribute('id'))
    
    console.log("")
    console.log("stick3")
    for(i=0; i<=stick3.children.length-1; i++)
        console.log(stick3.children[i].getAttribute('id'))  
}

function end_game()
{
    if(stick3.children.length == 8)
    {
        alert("Gratulacje wygrałeś")
        reset_game()
    }  
}

function reset_game()
{
    const stick1 = document.querySelector('#stick1')
    const stick2 = document.querySelector('#stick2')
    const stick3 = document.querySelector('#stick3')

    stick1.innerHTML = ''
    stick2.innerHTML = ''
    stick3.innerHTML = ''

    for(i=0; i<=7; i++)
        if(i == 0)
            stick1.innerHTML += '<div id="ring'+i+'" class="rings draggable" draggable="true" ondragstart="drag(event)"></div>'
            
        else
            stick1.innerHTML += '<div id="ring'+i+'" class="rings" ondragstart="drag(event)"></div>'
}

function draggable_attrib()
{
    const stick1 = document.querySelector('#stick1')
    const stick2 = document.querySelector('#stick2')
    const stick3 = document.querySelector('#stick3')

    if(stick1.children.length > 0)
    {
        stick1.firstChild.setAttribute('draggable', 'true')
        stick1.firstChild.classList.add('draggable')
    }
    

    for(i=0; i <= stick2.children.length-1; i++)
    {
        stick2.children[i].removeAttribute('draggable')
        stick2.children[i].classList.remove('draggable')
    }

    if(stick2.children.length > 0)
    {
        stick2.firstChild.setAttribute('draggable', 'true')
        stick2.firstChild.classList.add('draggable')
    }
    

    for(i=0; i <= stick3.children.length-1; i++)
    {
        stick3.children[i].removeAttribute('draggable')
        stick3.children[i].classList.remove('draggable')
    }
    
    if(stick3.children.length > 0)
    {
        stick3.firstChild.setAttribute('draggable', 'true')
        stick3.firstChild.classList.add('draggable')
    }
    
}

console.log(document.querySelector('#stick1').childNodes)