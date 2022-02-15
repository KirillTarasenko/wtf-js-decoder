const map = [
  { key: "u", value: "[[][[]]+[]][+[]][[+[]][+[]]]" },
  { key: "n", value: "[[][[]]+[]][+[]][[++[+[]][+[]]][+[]]]" },
  { key: "d", value: "[[][[]]+[]][+[]][++[++[+[]][+[]]][+[]]]" },
  { key: "e", value: "[[][[]]+[]][+[]][++[++[++[+[]][+[]]][+[]]][+[]]]" },
  {
    key: "f",
    value: "[[][[]]+[]][+[]][++[++[++[++[+[]][+[]]][+[]]][+[]]][+[]]]",
  },
  {
    key: "i",
    value: "[[][[]]+[]][+[]][++[++[++[++[++[+[]][+[]]][+[]]][+[]]][+[]]][+[]]]",
  },
  {
    key: "a",
    value: "[![]+[]+[]][+[]][++[+[]][+[]]]",
  },
  {
    key: "l",
    value: "[![]+[]][+[]][++[++[+[]][+[]]][+[]]]",
  },
  {
    key: "s",
    value: "[![]+[]][+[]][++[++[++[+[]][+[]]][+[]]][+[]]]",
  },
  {
    key: "t",
    value: "[!![]+[]][+[]][+[]]",
  },
  {
    key: "r",
    value: "[!![]+[]][+[]][++[+[]][+[]]]",
  },
  {
    key: "-",
    value: "[![]-!![]+[]][+[]][+[]]",
  },
  {
    key: " ",
    value: "[(( )=>{})+[]][+[]][!![]+![]]",
  },
];

const input = document.getElementById("input");
const output = document.getElementById("output");
const symbols = document.getElementById("symbols");
symbols.innerHTML = map
  .map((e) => `['${e.key}']`)
  .sort()
  .join(" ");
const result = "";
let prevValue = "";
if (input.addEventListener) {
  input.addEventListener(
    "input",
    (event) => {
      const currentValue = event.target.value;
      const findedItem = map.find((e) => e.key === currentValue.slice(-1));
      if (prevValue?.length <= currentValue?.length) {
        if (findedItem) {
          output.value =
            `${output.value ? output.value + "+" : ""}` + findedItem.value;
        } else if (currentValue.slice(-1)) {
          output.value = `${
            output.value && output.value + "+"
          }"${currentValue.slice(-1)}"`;
        }
      } else {
        output.value = "";
        input.value = "";
      }
      prevValue = currentValue;
    },
    false
  );
}
