const list = [
  { id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 3, name: 3 }
]
const newList = list.map(item => {
  item.name = 33
})
console.log(list, newList)