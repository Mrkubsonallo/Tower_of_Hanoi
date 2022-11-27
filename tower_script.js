window.onload = ring_check(), add_attribute()

function allowDrop(ev) 
{
    ev.preventDefault();
}
  
function drag(ev) 
{
    ev.dataTransfer.setData("Text", ev.target.id);
}
  
function drop(ev) 
{
    var data = ev.dataTransfer.getData("Text");
    ev.target.insertBefore(document.getElementById(data), ev.target.firstChild);
    ev.preventDefault();
    ring_check();
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

