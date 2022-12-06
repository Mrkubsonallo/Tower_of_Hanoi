let max_length

function menu() 
{
    const stick1 = document.querySelector('#stick1')
    const stick2 = document.querySelector('#stick2')
    const stick3 = document.querySelector('#stick3')
    let new_btn = document.getElementById('button')

    new_btn.removeAttribute("onclick")
    new_btn.remove()
    stick1.remove()
    stick2.remove()
    stick3.remove()


    let btn_start = document.createElement('button')
    btn_start.setAttribute('onclick', 'start()')
    btn_start.setAttribute('id', 'btn_start')
    btn_start.textContent = "Rozpocznij grę"

    let time_range = document.createElement('input') 
    time_range.setAttribute('type', 'range')
    time_range.setAttribute('id', 'time_range')

    let max_leng_range = document.createElement('input')
    max_leng_range.setAttribute('type', 'range')
    max_leng_range.setAttribute('id', 'max_leng_range')

    let span1 = document.createElement('span')
    span1.setAttribute('id', 'span1')
    span1.textContent = "Czas na ułożenie wieży"

    let span2 = document.createElement('span')
    span2.setAttribute('id', 'span2')
    span2.textContent = "Ilość krążków do ułożenia"

    document.body.appendChild(btn_start)
    document.body.appendChild(span1)
    document.body.appendChild(time_range)
    document.body.appendChild(span2)
    document.body.appendChild(max_leng_range)

}

function start()
{
    let btn_start = document.getElementById('btn_start')
    let time_range = document.getElementById('time_range')
    let max_leng_range = document.getElementById('max_leng_range')
    let span1 = document.getElementById('span1')
    let span2 = document.getElementById('span2')
    
    max_length = max_leng_range.value

    btn_start.remove()
    time_range.remove()
    max_leng_range.remove()
    span1.remove()
    span2.remove()

    let stc1 = document.createElement('div')
    stc1.setAttribute('id', 'stick1')
    stc1.setAttribute('class', 'sticks')
    stc1.setAttribute('ondrop', 'drop(event)')
    stc1.setAttribute('ondragover', 'allowDrop(event)')

    let stc2 = document.createElement('div')
    stc2.setAttribute('id', 'stick2')
    stc2.setAttribute('class', 'sticks')
    stc2.setAttribute('ondrop', 'drop(event)')
    stc2.setAttribute('ondragover', 'allowDrop(event)')

    let stc3 = document.createElement('div')
    stc3.setAttribute('id', 'stick3')
    stc3.setAttribute('class', 'sticks')
    stc3.setAttribute('ondrop', 'drop(event)')
    stc3.setAttribute('ondragover', 'allowDrop(event)')

    document.body.appendChild(stc1)
    document.body.appendChild(stc2)
    document.body.appendChild(stc3)

    

    reset_game()
}


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
    const stick1 = document.querySelector('#stick1')
    let drag_id, elem_id
    var data = ev.dataTransfer.getData("Text")

    if(ev.target.getAttribute('id') == "stick1" )
    {
        if(ev.target.children.length > 1)
        {
            if(data[4] < ev.target.children[0].getAttribute('id')[4])
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
            {
                ev.target.insertBefore(document.getElementById(data), ev.target.firstChild)
                ev.preventDefault()
            }
            
        }
    }

    if(ev.target.getAttribute('id') == "stick2" )
    {
        if(ev.target.children.length > 1)
        {
            if(data[4] < ev.target.children[0].getAttribute('id')[4])
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
            {
                ev.target.insertBefore(document.getElementById(data), ev.target.firstChild)
                ev.preventDefault()
            }
            
        }
    }

    if(ev.target.getAttribute('id') == "stick3" )
    {
        if(ev.target.children.length > 1)
        {
            if(data[4] < ev.target.children[0].getAttribute('id')[4])
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
            {
                ev.target.insertBefore(document.getElementById(data), ev.target.firstChild)
                ev.preventDefault()
            }
            
        }
    }

    end_game()
    draggable_attrib()
    
}

function end_game()
{
    if(stick3.children.length == max_length)
    {
        alert("Gratulacje wygrałeś")
        new_game()
    }  
}

function new_game()
{
    let new_btn = document.createElement('button')
    new_btn.textContent = "Nowa gra"
    new_btn.setAttribute('onclick', 'menu()')
    document.body.appendChild(new_btn)
}

function reset_game()
{
    const stick1 = document.querySelector('#stick1')
    const stick2 = document.querySelector('#stick2')
    const stick3 = document.querySelector('#stick3')

    stick1.innerHTML = ''
    stick2.innerHTML = ''
    stick3.innerHTML = ''

    for(i=0; i<=max_length-1; i++)
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