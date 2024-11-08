let create = document.getElementById('create');
let ul = document.querySelector('#contactlist');

let isDisabled = true

create.addEventListener('click', function (e) {
    e.preventDefault()
    let addlist = document.createElement('li');
    let input = document.createElement('input');
    let input2 = document.createElement('input');
    let change = document.createElement('button');
    let remove1 = document.createElement('button');

    change.innerHTML = 'Ändra'
    remove1.innerHTML = 'Radera'

    let firstName = document.getElementById('name');
    let lastName = document.getElementById('number');

    input.value = firstName.value
    input2.value = lastName.value

    input.disabled = isDisabled
    input2.disabled = isDisabled

    change.addEventListener('click', function (e) {
        e.preventDefault()

        isDisabled = !isDisabled

        change.innerText = isDisabled ? 'Ändra' : 'Spara' 
        
        input.disabled = isDisabled
        input2.disabled = isDisabled
    })

    remove1.addEventListener('click', function(e) {
        e.preventDefault()

        ul.removeChild(addlist)
    })

    addlist.append(input, input2, remove1, change)

    ul.appendChild(addlist)

    firstName.value = ''
    lastName.value = ''


})