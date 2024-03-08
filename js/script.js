const hEl = document.querySelector(".h");
const mEl = document.querySelector(".m");
const sEl = document.querySelector(".s");
const iEls = document.querySelectorAll("i");

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
  updateTime(h, m, s);
}, 100);
