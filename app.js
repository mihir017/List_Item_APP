//form id
let formcontrol = document.getElementById('formcontrol');
formcontrol.addEventListener('submit',addItem);

// ul id
var items = document.getElementById('items');
items.addEventListener('click',delItem);

// search id
var filter = document.getElementById('filter');
filter.addEventListener('keyup',searchItem);

// add item to the list
function addItem(e){
    e.preventDefault();
    var textValue = document.getElementById('inputItem').value;
    console.log(textValue);

    // create li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(textValue));
    console.log(li);

    //create button
    var button = document.createElement('button');
    button.setAttribute('type','button');
    button.className = 'btn btn-danger btn-sm float-right delete';
    button.appendChild(document.createTextNode('X'));
    console.log(button);

    //add button to li
    li.appendChild(button);
    //add item to display
    items.appendChild(li);
}

// delete the item
function delItem(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure!')){
            var li = e.target.parentElement;
            console.log(li);
            items.removeChild(li);
        }
    }
}

// searchItem to the list
function searchItem(e) {
    // var output = document.getElementById('output');
    // output.innerHTML = "<h3>"+ filter.value +"</h3>";

    var s_value = e.target.value.toLowerCase();

    var item1 = items.getElementsByTagName('li');
    console.log(item1);
    Array.from(item1).forEach( (item) => {
        // console.log(item.firstChild.textContent);
        var itemText = item.firstChild.textContent;
        if(itemText.toLowerCase().indexOf(s_value) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}