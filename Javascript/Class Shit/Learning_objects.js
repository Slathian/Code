var user = {
    name: 'Lucy Elizabeth',
    age: 20,
    city: 'Beaverton',
    love: {
        sex: 'regular, doggy, anal, eating out',
        loveLanguage: 'touch and verbal',
        habbits: 'staying up too late, pouting when doing homework. Progressing pretty good with doing homework without pouting. STILL GETS DISTRACTED WHEN DOING HOMEWORK THOUGH.....',
        cuteLevels: 'fucking infinite...'

    }
}
// console.log(user)


// changing the specifics inside of the object user
user.name = 'Lucy <3'
// console.log(user)
// console.log(user.love)
// console.log(user.love.sex)

console.log(user.love)
user.love.herLoveForMe = true
console.log(user.love)