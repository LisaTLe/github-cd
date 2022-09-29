// forEach, filter, map

// This is from Danny's demo on 06/13

const basketballTeams = [
    {name: 'Nuggets', location: 'Denver'},
    {name: 'Heat', location: 'Miami'},
    {name: 'Lakers', location: 'Los Angeles'},
    {name: 'Warriors', location: 'San Francisco'},
    {name: 'Celtics', location: 'Boston'},
    {name: 'Clippers', location: 'Los Angeles'}
]

const getTeamName = (team) => {
    return team.name
}

const teamNames = basketballTeams.map((team) => team.name)
const teamLocations = basketballTeams.map(team => team.location)
const laTeams = basketballTeams.filter((team, index) => team.location === 'Los Angeles' && index < 4)

console.log(teamNames)
console.log(teamLocations)
console.log(laTeams)


// if/else statement
if (conditional) {
    console.log(true)
} else {
    console.log(false)
}
// ternary operator
console.log(conditional ? true : false)
