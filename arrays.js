let items = ['bread', 'butter', 'salt', 'jam']
console.log(items)
console.log(items[0])
items[0] = 'nutella'
console.log(items)
items.push('blue band')
items.push('joy')
items.pop()

// length
console.log(items.length)

// methods
//console.log(items.join(', '))

console.log(items.indexOf('nutella'))

let products = ['clothes', 'furniture', 'table']

let allItems = items.concat(products)

console.log(allItems)

