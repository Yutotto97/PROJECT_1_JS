var itemlist = document.getElementById("items");
var filter = document.getElementById("filter");

//add submit event
var submit = document.getElementById("submit").addEventListener("click",SubmitClick);

//add delete event
itemlist.addEventListener("click",DelClick);

//add filter event
filter.addEventListener("keyup",FindItem);

//add item
function SubmitClick(event){
    event.preventDefault();
    //console.log("Submitted");
    //document.querySelector("#main").style.backgroundColor = "#f4f4f4";
    //document.querySelector("#header-title").textContent = "Changed";

    //get input value
    var newItem = document.getElementById("item").value;
    //create new li element
    var li = document.createElement("li");
    //add class
    li.className = "list-group-item";
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    //add delete button in li
    var delete_button = document.createElement("button");
    delete_button.className = "btn btn-danger btn-sm float-right delete";
    delete_button.appendChild(document.createTextNode("X"));
    li.appendChild(delete_button);
    
    //add li element in items list
    itemlist.appendChild(li);
}

function DelClick(event){
    //event happens if delete button clicked
    if (event.target.classList.contains("delete")){
        var text = event.target.parentElement.firstChild.textContent;
        //console.log(text);
        //ask for confirmation
        if (confirm('Are you sure to erase '+ text+'?')){
            //find the li element from the delete button
            var li = event.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

function FindItem(event){
    //convert text to lower case
    var text = event.target.value.toLowerCase();
    //get item list
    var items = document.getElementsByTagName("li");
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //condition if text from list elements match with Search Item
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        //hide if doesn't match
        } else {
            item.style.display = "none";
        }

    });

}