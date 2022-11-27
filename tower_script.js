window.onload = ring_check(), reset_game()

function allowDrop(ev) 
{
    ev.preventDefault()
}
  
function drag(ev) 
{
    ev.dataTransfer.setData("Text", ev.target.id)
}
  
function drop(ev) 
{
    var data = ev.dataTransfer.getData("Text")
    ev.target.insertBefore(document.getElementById(data), ev.target.firstChild)
    ev.preventDefault()
    ring_check()
    end_game()
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
    let tower_height = 7
    let count = 0
    const rings_array = []
    const win_array = ['ring0', 'ring1', 'ring2', 'ring3', 'ring4', 'ring5', 'ring6', 'ring7']
    console.log(tower_height)
    for(i=0; i<=tower_height; i++)
    {
        rings_array.push(stick3.children[i].getAttribute('id'))
        console.log("")
        console.log(rings_array)
        console.log(win_array)
        if(stick3.children.length == 8)
        {
            alert("Gratulacje wygrałeś")
            reset_game()
        }
            
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
        stick1.innerHTML += "<div id='ring"+i+"'"+"class=rings draggable=true ondragstart=drag(event)></div>"
}