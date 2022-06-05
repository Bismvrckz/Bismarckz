function rotateArrow(obj) {
  let pos1 = document.getElementById("arrow1");
  let pos2 = document.getElementById("arrow2");
  let elementText = obj.innerHTML;
  if (elementText.includes("Advertise")) {
    pos1.style.transform = "rotate(90deg)";
  } else if (elementText.includes("Supports")) {
    pos2.style.transform = "rotate(90deg)";
  }
}

function unRotateArrow(obj) {
  let pos1 = document.getElementById("arrow1");
  let pos2 = document.getElementById("arrow2");
  let elementText = obj.innerHTML;
  if (elementText.includes("Advertise")) {
    pos1.style.transform = "rotate(0deg)";
  } else if (elementText.includes("Supports")) {
    pos2.style.transform = "rotate(0deg)";
  }
}
