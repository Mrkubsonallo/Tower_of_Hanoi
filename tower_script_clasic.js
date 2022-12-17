let max_length

function start()
{
    let btn_start = document.getElementById('btn_start')
    let time_range = document.getElementById('time_range')
    let max_leng_range = document.getElementById('max_leng_range')
    let span1 = document.getElementById('span1')
    let span2 = document.getElementById('span2')
    let span3 = document.getElementById('span3')
    let span4 = document.getElementById('span4')
    let radio1 = document.getElementById('radio1')
    let radio2 = document.getElementById('radio2')
    
    max_length = max_leng_range.value

    btn_start.remove()
    time_range.remove()
    max_leng_range.remove()
    span1.remove()
    span2.remove()
    span3.remove()
    span4.remove()
    radio1.remove()
    radio2.remove()
    

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
        alert("Gratulacje ołożyłeś/łaś Wieżę Hanoi")
        new_game()
    }  
}

function new_game()
{
    let new_btn = document.createElement('button')
    new_btn.textContent = "Powrót do menu"
    new_btn.setAttribute('onclick', 'document.location.reload(true)')
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

    get_style()        
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

function get_style()
{
    let elements = document.getElementsByClassName('rings')
    for(i=0; i<elements.length; i++)
    {
        elements[i].style.border = '1px solid #8400ff'
        elements[i].style.backgroundColor = '#490497'
        elements[i].style.margin = '2px'
        elements[i].style.height = '35px'
        elements[i].style.borderTopLeftRadius = '50px'
        elements[i].style.borderTopRightRadius = '50px'
        elements[i].style.borderBottomLeftRadius = '50px'
        elements[i].style.borderBottomRightRadius = '50px'
    }

}