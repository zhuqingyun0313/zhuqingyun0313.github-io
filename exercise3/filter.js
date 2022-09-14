function filterCategory(filterSelection, filterBy){
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    /* Run four authors cycle */
    for(let listItem of itemsToFilter){
        // Hide mismatching word
        // Screening out matching words
        if(listItem.dataset[filterSelection] === filterBy){
            listItem.style.display = "flex";
        } else {
            listItem.style.display = "none";
        }
}
}

function filterAll(){
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of itemsToFilter){
        // Cancel words which are hidding
            listItem.style.display = "flex";
        }
}
