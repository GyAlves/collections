// Maps
const rank = new Map()

rank.set("Slytherin", 500)
rank.set("Griffinfor", 450)
rank.set("Ravenclaw", 300)
rank.set("Hufflepuf", 100)

for ([house, score] of rank) {
    // console.log(`House ${house} has ${score} points`)
}


for (let key of rank.keys()) {
    // console.log(`The key is ${key}`)
}

for (let value of rank.values()) {
    // console.log(`The value is ${value}`)
}

// Transforming maps into array and vice-versa 

const animals = [["Owl", "Harry"], ["Cat", "Hermione"], ["Mice", "Ron"]]
const animals_map = new Map(animals)

// Array to map 
const array_to_map = Array.from(animals_map)
// with spread sintax 
const array_to_map_spread = [...animals_map]

// Convert using for loop
const convert_loop = Array.from(animals_map.keys())

// Cloning maps 

const original = new Map(
    [
        [1, 'one']
    ]
)

const clone_original = new Map(original)

// Merging maps

const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])

const second = new Map([
    [1, 'uno'],
    [2, 'dos']
])
const merged = new Map([...first, ...second])
