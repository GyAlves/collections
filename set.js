let my_set = new Set()
my_set.add("fruits")
my_set.add("pizzas")

for (let item of my_set) {
    console.log(item)
}

console.log(my_set.has("fruits"))