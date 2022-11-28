const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder();
    removeShow();
    //add border to current tab 
    //this will get current item clicked
    this.classList.add('tab-border');


    //grab content item from DOM
    const tabItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabItem.classList.add('show');

}


function removeBorder(){
   tabItems.forEach(item =>item.classList.remove('tab-border')); 
}

//listen for tab click 
tabItems.forEach(item=> item.addEventListener('click',selectItem));

function removeShow(){
    tabContentItems.forEach(item=>item.classList.remove('show'));
}