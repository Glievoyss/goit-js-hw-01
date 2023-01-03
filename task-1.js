//srick

const arrReestr = [8, 3, 3, 3, 0, 0];

const parsProebanyh = (arrReestr) => {
  let listProebanyh = [];
  const min = Math.min(...arrReestr);
  const max = Math.max(...arrReestr);

  for (let i = min; i <= max; i++) {
    if (!arrReestr.includes(i)) {
      listProebanyh.push(i);
    }
  }

  return { min: min, max: max, proebanye: listProebanyh };
};

const listPr = parsProebanyh(arrReestr);

console.log(
  "Минимальное:",
  `${listPr.min},`,
  "Максимальное:",
  `${listPr.max},`,
  "Список проебаных:",
  listPr.proebanye
);
let count = {};

for (let elem of arrReestr) {
  if (count[elem] === undefined) {
    count[elem] = 1;
  } else {
    count[elem]++;
  }
}

const keyObj = Object.keys(count);

keyObj.forEach((item) => {
  if (count[item] === 1) {
    delete count[item];
  }
});

console.log("Дубликаты", count);
