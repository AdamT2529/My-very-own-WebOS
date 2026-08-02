// Make the DIV element draggable:
function setImageAnother() {
    document.body.style.backgroundImage = "url('./images/another_lightning.jpg')";
    document.body.style.backgroundPosition = "center";
  }
dragElement(document.getElementById("window"));
dragElement(document.querySelector("#lightningwindow"))
dragElement(document.querySelector("#materwindow"))
dragElement(document.querySelector("#desktopwindow"))
// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  var welcomeScreen = document.querySelector("#window")
  var welcomeScreenClose = document.querySelector("#windowclose")
  var welcomeScreenOpen = document.querySelector("#windowopen")
  var selectedIcon = undefined
  var lightningIcon = document.querySelector("#lightningIcon")
  var lightningWindow = document.querySelector("#lightningwindow");
  var lightningClose = document.querySelector("#lightningclose")
  var materIcon = document.querySelector("#materIcon")
  var materWindow = document.querySelector("#materwindow");
  var materClose = document.querySelector("#materclose")
  var desktopIcon = document.querySelector("#desktopIcon")
  var desktopWindow = document.querySelector("#desktopwindow");
  var desktopClose = document.querySelector("#desktopclose")
  var restartbutton = document.querySelector("#restartbutton")


  function closeWindow(element) {
    element.style.display = "none"
}

lightningIcon.addEventListener("click", function () {
    openWindow(lightningWindow);
});
materIcon.addEventListener("click", function () {
  openWindow(materWindow)
});
desktopIcon.addEventListener("click", function () {
  openWindow(desktopWindow)
});

function openWindow(element) {
  element.style.display = "block"
}
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});
lightningClose.addEventListener("click", function () {
  closeWindow(lightningWindow)
});
materClose.addEventListener("click", function () {
  closeWindow(materWindow)
});
desktopClose.addEventListener("click", function () {
  closeWindow(desktopWindow)
});

restartbutton.addEventListener("click", function () {
  location.reload();
});
function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 
function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}
function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}
window.addEventListener("load", () => {
  setTimeout(() => {
  document.getElementById("loading_screen").style.display = "none";
  }, ); // Dont forget to change it back to 3000
});

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}