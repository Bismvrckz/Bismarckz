function rotateArrow(obj) {
  let pos1 = document.getElementById("arrow1");
  let pos2 = document.getElementById("arrow2");
  let elementText = obj.innerHTML;
  if (elementText.includes("Advertise")) {
    pos1.style.transform = "rotate(90deg)";
    pos1.style.color = "white";
  } else if (elementText.includes("Supports")) {
    pos2.style.transform = "rotate(90deg)";
    pos2.style.color = "white";
  }
}

function unRotateArrow(obj) {
  let pos1 = document.getElementById("arrow1");
  let pos2 = document.getElementById("arrow2");
  let elementText = obj.innerHTML;
  if (elementText.includes("Advertise")) {
    pos1.style.transform = "rotate(0deg)";
    pos1.style.color = "#56BBD0";
  } else if (elementText.includes("Supports")) {
    pos2.style.transform = "rotate(0deg)";
    pos2.style.color = "#56BBD0";
  }
}
