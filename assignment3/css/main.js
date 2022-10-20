window.onload = () => {
  var img = document.querySelectorAll(".img");
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  var buttons = document.querySelectorAll("p");

  //Set up an array to hold the id
  idArr = ["first", "second", "right", "left", "left", "left", "last"];

  //Set a variable to be used as the index of the image
  var index = 0;

  initialize();

  //Set a variable to be used as the index of the image
  var timer = setInterval(next, 3000);

  //Bind the arrow to a click event
  left.addEventListener("click", prev);
  //When the mouse is over the arrow, let the timer stop
  left.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  //When the mouse moves away from the arrow, let the timer restart
  left.addEventListener("mouseout", () => {
    timer = setInterval(next, 3000);
  });

  right.addEventListener("click", next);
  right.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  right.addEventListener("mouseout", () => {
    timer = setInterval(next, 3000);
  });

  //Add a click event to the cube
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", () => {
      //Turn off the timer when the user clicks
      clearInterval(timer);
      timer = null;
      //Here, it is necessary to judge the difference between the index of the small square clicked by the user and the current picture. 
      //If it is greater than 0, it indicates that the user needs to replace the later picture; otherwise,
      //it indicates that the user needs to replace the previous picture
      if (index > i) {
        let x = index - i;
        while (x--) {
          prev();
        }
      } else if (index < i) {
        let x = i - index;
        while (x--) {
          next();
        }
      }
    });
  }

  //Creates a toggle image function
  function prev() {
    //Switching the previous slide means that the last element in the array becomes the first element
    idArr.push(idArr.shift());
    initialize();
    if (index === 0) {
      index = buttons.length - 1;
    } else {
      index--;
    }
    clearColor();
  }
  function next() {
    //It's the other way around
    idArr.unshift(idArr.pop());
    initialize();
    if (index === buttons.length - 1) {
      index = 0;
    } else {
      index++;
    }
    clearColor();
  }

  //Create a function to make the cube follow the image
  function clearColor() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "silver";
    }
    //Let the current index change color
    buttons[index].style.backgroundColor = "rgb(20, 134, 187)";
  }

  //Create a function to initialize the image
  function initialize() {
    for (let i = 0; i < img.length; i++) {
      img[i].id = idArr[i];
    }
  }
};
