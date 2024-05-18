const hEl = document.querySelector(".h");
const mEl = document.querySelector(".m");
const sEl = document.querySelector(".s");
const iEls = document.querySelectorAll("i");
const timeH = document.querySelector(".time-h");
const timeM = document.querySelector(".time-m");
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const bs = document.querySelectorAll(".block b");
bs.forEach((i) => {
  const iText = i.textContent;
  i.style.position = "relative";
  switch (String(iText)) {
    case "12":
      i.innerHTML += `<span style="position:absolute;top:-24px;right:0">${iText}</span>`;
      break;
    case "3":
      i.innerHTML += `<span style="position:absolute;right:-35px;top:0">${iText}</span>`;
      break;
    case "6":
      i.innerHTML += `<span style="position:absolute;bottom:-24px;left:0">${iText}</span>`;
      break;
    case "9":
      i.innerHTML += `<span style="position:absolute;left:-36px;top:0">${iText}</span>`;
      break;
    default:
      break;
  }
  i.lastChild.style.fontWeight = "900";
  i.lastChild.style.transition = "0.5s";
});
iEls.forEach((i, index) => {
  i.style.transform = `rotate(${index * 30}deg)`;
});
const updateTime = (h, m, s) => {
  hEl.style.transform = `rotate(${h * 30 + m / 2}deg)`;
  mEl.style.transform = `rotate(${m * 6 + s / 10}deg)`;
  sEl.style.transform = `rotate(${s * 6}deg)`;
};
setInterval(() => {
  const date = new Date();
  let h = date.getHours();
  if (h > 12) h -= 12;
  const m = date.getMinutes();
  const s = date.getSeconds();
  timeH.textContent = h;
  timeM.textContent = String(m).length === 1 ? `0${m}` : m;
  if (s >= 45 && s <= 51) {
    circle1.style.backgroundColor = "#ff5f24";
  } else {
    circle1.style.backgroundColor = "#ff4805";
  }
  if (s >= 15 && s <= 22) {
    circle2.style.backgroundColor = "#09ff00";
  } else {
    circle2.style.backgroundColor = "#07c400";
  }
  if (s === 0) {
    bs[0].lastChild.style.color = "red";
    bs[0].lastChild.style.transform = "scale(2)";
    bs[0].lastChild.style.display = "block";
  } else {
    bs[0].lastChild.style.color = "white";
    bs[0].lastChild.style.transform = "scale(1)";
    bs[0].lastChild.style.display = "none";
  }
  if (s === 15) {
    bs[1].lastChild.style.color = "red";
    bs[1].lastChild.style.transform = "scale(2)";
    bs[1].lastChild.style.display = "block";
  } else {
    bs[1].lastChild.style.color = "white";
    bs[1].lastChild.style.transform = "scale(1)";
    bs[1].lastChild.style.display = "none";
  }
  if (s === 30) {
    bs[2].lastChild.style.color = "red";
    bs[2].lastChild.style.transform = "scale(2)";
    bs[2].lastChild.style.display = "block";
  } else {
    bs[2].lastChild.style.color = "white";
    bs[2].lastChild.style.transform = "scale(1)";
    bs[2].lastChild.style.display = "none";
  }
  if (s === 45) {
    bs[3].lastChild.style.color = "red";
    bs[3].lastChild.style.transform = "scale(2)";
    bs[3].lastChild.style.display = "block";
  } else {
    bs[3].lastChild.style.color = "white";
    bs[3].lastChild.style.transform = "scale(1)";
    bs[3].lastChild.style.display = "none";
  }
  updateTime(h, m, s);
}, 200);
