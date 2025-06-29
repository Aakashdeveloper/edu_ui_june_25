let b = {}

var movieName = "Avengers"
var movieRating = 4.5
var movieType="Action"

var movieName1 = "Jab We Met"
var movieRating1 = 4.8
var movieType1="Romantic"


let movie = {
    name:"Avengers",
    rating:4.5,
    type:'Action'
}

movie.name
'Avengers'
movie.rating
4.5
movie['name']
'Avengers'
movie.ind="Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.5, type: 'Action', ind: 'Hollywood'}
delete movie.name
true
movie
{rating: 4.5, type: 'Action', ind: 'Hollywood'}

JSON > JavaScript Object notation
Array of object


let movie = [
    {
        name:"Avengers",
        rating:4.5,
        type:'Action'
    },
    {
        name:"Jab We Met",
        rating:4.8,
        type:'Romantic'
    }
]
movie[1].name
'Jab We Met'