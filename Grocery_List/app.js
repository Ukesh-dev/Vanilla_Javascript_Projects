// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
const search = document.querySelector(".search");
const search_btn = document.querySelector(".search-btn")
const btn = document.querySelector(".btns");
const input = document.querySelector('.fas');
const cover = document.querySelector('.cover');
const wrapper = document.querySelector('.wrapper')


// window.addEventListener("DOMContentLoaded". addItem);
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setupItems)

btn.addEventListener("click", ()=> {
  search.classList.toggle("active");
  if(search.classList.contains("active")){
    search_btn.focus();
  }
})
search.addEventListener("input", searchItem)
document.body.addEventListener("click", (e) => {
  console.log(e.target);
  if(!e.target.classList.contains('fas') && !e.target.classList.contains('search-btn') && !e.target.classList.contains('btns') ){
    if(search.classList.contains("active")){
      search.classList.remove('active');
      search_btn.value = '';
    }
  }
})

// Edit options
let editElemnet = "";
let editFlag = false;
let editID = "";

function searchItem(){
  const titles = document.querySelectorAll(".title");
  const searchItem = search_btn.value.toUpperCase();
  Array.from(titles).forEach((items => {
    const item = items.textContent; 
    if(item.toUpperCase().indexOf(searchItem) > -1){
      console.log(items.parentElement);
      items.parentElement.style.display = "";
    }

    else{
      items.parentElement.style.display = "none"
    }
   
}
  ))
}
function addItem(e){
  e.preventDefault();
  const value = grocery.value;
  if(value && !editFlag){
    editID = new Date().getTime().toString();
    createListItem(editID, value);
    displayAlert("Successfully Added", "success")
    addToLocalStorage(editID, value)
    setBackToDefault();
  }
  else if(value && editFlag){
    editElement.textContent = value;
    displayAlert("Successfully Edited", "success")
    editToLocalStorage(value, editID);
    setBackToDefault();

  }
  else{
    displayAlert("Please Enter a value", "danger")

  }

}

function createListItem(id, value){
  const element = document.createElement("article");
   element.setAttribute("data-id", id);
    element.classList.add("grocery-item");
    element.innerHTML = `<li class="title">${value}</li>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
          console.log(element)
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // appendChild
    list.appendChild(element);
    container.classList.add("show-container");
   

    // search.addEventListener("input", searchItem)

   

}

function displayAlert(text, action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  
  setTimeout(() => {
    alert.textContent="";
    alert.classList.remove(`alert-${action}`);
  }, 2000)
 
}

function deleteItem(e){
  const item = e.currentTarget.parentElement.parentElement;
  const id = item.dataset.id;
  list.removeChild(item);

  displayAlert("Item Deleted", "danger")

  if(list.children.length === 0){
    container.classList.remove("show-container")
  }

  removeFromLocalStorage(id);
}
function editItem(e){
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.textContent;
  submitBtn.textContent = "Edit";
  editFlag = true;
  editID = editElement.parentElement.dataset.id;
  console.log(editID);

}

function clearItems(){
  if(list.children.length > 0){
    list.innerHTML = "";
  }
  container.classList.remove("show-container")
  displayAlert("All Items Deleted", "danger")
  localStorage.removeItem("list");
}


function setBackToDefault(){
  grocery.value = "";
  editID = "";
  editFlag = false; 
  submitBtn.textContent = "Submit";

}

function addToLocalStorage(id, value){
  console.log(id);
  let items = getFromLocalStorage()
  items.push({id, value});
  localStorage.setItem("list", JSON.stringify(items));
}
function editToLocalStorage(value, id){
   let items = getFromLocalStorage()
   items = items.map((item) => {
    if(item.id === id){
      item.value = value;
    }
    return item;
  })
  localStorage.setItem("list", JSON.stringify(items))
}
function removeFromLocalStorage(id){
  let items = getFromLocalStorage()
  items = items.filter((item) => {
    if(item.id !== id){
      return item;
    }
  }) 
  localStorage.setItem("list", JSON.stringify(items));
}
function setupItems(){
  let items = getFromLocalStorage()
  if(items.length > 0){
    items.forEach((items) => {
      createListItem(items.id, items.value)
    })
   
  }
}

function getFromLocalStorage(){
  return  localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}








