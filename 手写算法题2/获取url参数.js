// 1. 使用URLSearchParams
const urlSearch = new URLSearchParams(window.location.search)
// const urlSearch = "?name=123"
// entries  转成  object
const paams = Object.fromEntries(urlSearch.entries())


