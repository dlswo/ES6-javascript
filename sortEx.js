
class Score{
    constructor(name, value){
        this.name = name
        this.value = value
    }
}

const scores = [
    new Score("user0", 55),
    new Score("user1", 65),
    new Score("user5", 95),
    new Score("user3", 25),
]

scores.sort((s1, s2) => s1.name.localeCompare(s2.name))

console.log(scores)