var personas = new Map()
personas.set(1,"Juan")
personas.set("A","Luis")
personas.set(3,"Pedro")

console.log(personas.get("A"))
console.log(personas.has(1))

console.log(personas)
personas.delete("A")
console.log(personas)

