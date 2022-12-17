// json to html dom table using ce: createElement
// https://drive.google.com/file/d/1t6M91f-wodPiefHfaNwIiHIw5omOmsuy/view?usp=sharing

var json = [{
  "MAC": "ABC",
  "IP": "10.10.10.10",
  "ZONE": "Inside"
}, {
  "MAC": "DEF",
  "IP": "20.20.20.20",
  "ZONE": "Outside"
}];

const makeCell = (content) => {
  return `<td>${content}</td>`
}

const makeRow = (content) => {
  return `<tr>${content}</tr>`
}

f('body getn: 0 i: table ce: ac:')

// const table = document.querySelector('.table')
const table = document.querySelector('table')
const colHeaders = Object.keys(json[0]).map(key => makeCell(key)).join('')
const bodyRows = json.map(row => {
  return makeRow(Object.keys(row).map(col => makeCell(row[col])).join(''))
}).join('')


// document.querySelector('thead tr').innerHTML = colHeaders
// document.querySelector('tbody').innerHTML = bodyRows

f('table getn: 0 i:')
f('tbody ce: ac:')
document.querySelector('tbody').innerHTML = bodyRows

f('thead ce: tr ce: ac:')
f('ac:')
document.querySelector('thead tr').innerHTML = colHeaders

