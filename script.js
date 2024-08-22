const genreMapping = {
    "joy": ["Comedy", "Musical", "Romance"],
    "excitement": ["Action", "Adventure", "Science Fiction", "Western"],
    "suspense": ["Thriller", "Mystery", "Crime"],
    "fear": ["Horror", "Thriller"],
    "sadness": ["Drama", "Historical", "Romance (Tragic)"],
    "inspiration": ["Biography", "War", "Drama (Inspirational)"],
    "wonder": ["Fantasy", "Science Fiction", "Adventure"],
    "nostalgia": ["Romance (Classic)", "Musical", "Western"],
    "anger": ["Crime", "Thriller (Psychological)"],
    "awe": ["Historical", "Biography"]
};

// const movieMapping = {
//     "Comedy": ["The Big Lebowski", "Groundhog Day", "Superbad", "The Hangover", "Anchorman", "Dumb and Dumber", "Borat", "Step Brothers", "Monty Python and the Holy Grail", "Ferris Bueller's Day Off", "Bridesmaids", "Airplane!", "Caddyshack", "Napoleon Dynamite", "Zombieland"],
//     // Add the other genres with their respective top 15 movies here
//     "Musical": [
//         "The Sound of Music", "Grease", "La La Land", "Moulin Rouge!", 
//         "West Side Story", "Singin' in the Rain", "Chicago", "The Greatest Showman", 
//         "Les Misérables", "Beauty and the Beast", "Mary Poppins", "Cabaret", 
//         "A Star is Born", "Mamma Mia!", "Rent"
//     ],
//     "Romance": [
//         "Pride and Prejudice", "The Notebook", "Titanic", "La La Land", 
//         "Eternal Sunshine of the Spotless Mind", "Romeo + Juliet", "Before Sunrise", 
//         "Casablanca", "A Walk to Remember", "Notting Hill", "Love Actually","Good Will Hunting", "Rocky", "Dead Poets Society", 
//         "Remember the Titans", "Rudy", "Braveheart", 
//         "Million Dollar Baby", "The Blind Side", "Coach Carter", 
//         "The Green Mile", "Stand and Deliver"
//     ],
//     "Fantasy": [
//         "The Lord of the Rings: The Fellowship of the Ring", "Harry Potter and the Sorcerer's Stone", "The Hobbit: An Unexpected Journey", 
//         "Pan's Labyrinth", "The Princess Bride", "Stardust", 
//         "Alice in Wonderland", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", 
//         "Edward Scissorhands", "Big Fish", "The Golden Compass", 
//         "The NeverEnding Story", "The Shape of Water", "Maleficent", 
//         "Percy Jackson & the Olympians: The Lightning Thief"
//     ],
//     "Romance (Classic)": [
//         "Casablanca", "Gone with the Wind", "Pride and Prejudice", "Roman Holiday", 
//         "Breakfast at Tiffany's", "The Philadelphia Story", "Singin' in the Rain", 
//         "West Side Story", "It Happened One Night", "An Affair to Remember", 
//         "Notting Hill", "Sense and Sensibility", "Rebecca", 
//         "Doctor Zhivago", "The African Queen"
//     ],
//     "Thriller (Psychological)": [
//         "Shutter Island", "Se7en", "Memento", "Black Swan", 
//         "Gone Girl", "The Sixth Sense", "Fight Club", 
//         "The Machinist", "Prisoners", "Zodiac", 
//         "The Girl with the Dragon Tattoo", "Taxi Driver", "Donnie Darko", 
//         "American Psycho", "Jacob's Ladder"
//     ],
//     "Fantasy": [
//         "The Lord of the Rings: The Fellowship of the Ring", "Harry Potter and the Sorcerer's Stone", 
//         "The Hobbit: An Unexpected Journey", "Pan's Labyrinth", 
//         "The Princess Bride", "Stardust", "Alice in Wonderland", 
//         "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", 
//         "Edward Scissorhands", "Big Fish", "The Golden Compass", 
//         "The NeverEnding Story", "The Shape of Water", 
//         "Maleficent", "Percy Jackson & the Olympians: The Lightning Thief"
//     ],
//     "Science Fiction": [
//         "Blade Runner 2049", "The Matrix", "Inception", "Star Wars: The Empire Strikes Back", 
//         "Interstellar", "The Terminator", "Back to the Future", 
//         "The Martian", "Guardians of the Galaxy", "District 9", 
//         "Arrival", "The Fifth Element", "Minority Report", 
//         "Children of Men", "Ex Machina"
//     ],
// };

const movieMapping = {
    "Action": [
        "Mad Max: Fury Road", "The Dark Knight", "Die Hard", "Gladiator", 
        "The Avengers", "Inception", "John Wick", "Terminator 2: Judgment Day", 
        "The Matrix", "Skyfall", "Kill Bill: Vol. 1", "Speed", "Heat", 
        "Casino Royale", "Mission: Impossible – Fallout"
    ],
    "Adventure": [
        "Raiders of the Lost Ark", "The Lord of the Rings: The Fellowship of the Ring", 
        "Jurassic Park", "Pirates of the Caribbean: The Curse of the Black Pearl", 
        "Back to the Future", "Jumanji: Welcome to the Jungle", "The Goonies", 
        "The Princess Bride", "Star Wars: A New Hope", "Avatar", 
        "The Hobbit: An Unexpected Journey", "The Mummy (1999)", 
        "Life of Pi", "Cast Away", "King Kong (2005)"
    ],
    "Comedy": [
        "The Big Lebowski", "Groundhog Day", "Superbad", "The Hangover", 
        "Anchorman", "Dumb and Dumber", "Borat", "Step Brothers", 
        "Monty Python and the Holy Grail", "Ferris Bueller's Day Off", 
        "Bridesmaids", "Airplane!", "Caddyshack", "Napoleon Dynamite", 
        "Zombieland"
    ],
    "Drama": [
        "The Shawshank Redemption", "Schindler’s List", "Forrest Gump", "The Godfather", 
        "Fight Club", "Good Will Hunting", "A Beautiful Mind", 
        "The Social Network", "12 Years a Slave", "The Green Mile", 
        "There Will Be Blood", "A Star Is Born (2018)", "The Pursuit of Happyness", 
        "La La Land", "Parasite"
    ],
    "Horror": [
        "The Exorcist", "Halloween (1978)", "The Shining", "Get Out", 
        "Psycho", "A Nightmare on Elm Street", "Hereditary", "It (2017)", 
        "Scream", "The Conjuring", "The Ring", "Saw", 
        "Paranormal Activity", "The Texas Chainsaw Massacre (1974)", 
        "Rosemary’s Baby"
    ],
    "Romance": [
        "Titanic", "Casablanca", "The Notebook", "Pride & Prejudice (2005)", 
        "La La Land", "Eternal Sunshine of the Spotless Mind", "Romeo + Juliet (1996)", 
        "Notting Hill", "When Harry Met Sally...", "Crazy Rich Asians", 
        "A Walk to Remember", "Before Sunrise", "The Fault in Our Stars", 
        "Love Actually", "Jerry Maguire"
    ],
    "Science Fiction": [
        "Blade Runner 2049", "Star Wars: The Empire Strikes Back", "The Matrix", 
        "Interstellar", "Inception", "The Terminator", "2001: A Space Odyssey", 
        "E.T. the Extra-Terrestrial", "Star Trek (2009)", "Arrival", 
        "Jurassic Park", "The Fifth Element", "Minority Report", 
        "Ex Machina", "Gravity"
    ],
    "Fantasy": [
        "The Lord of the Rings: The Return of the King", "Harry Potter and the Sorcerer’s Stone", 
        "Pan’s Labyrinth", "Spirited Away", "The Wizard of Oz", 
        "The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe", 
        "The Dark Crystal", "Stardust", "The Hobbit: The Desolation of Smaug", 
        "Shrek", "Maleficent", "Labyrinth", "Aladdin (1992)", 
        "Alice in Wonderland (2010)", "Big Fish"
    ],
    "Thriller": [
        "Se7en", "Silence of the Lambs", "Gone Girl", "The Girl with the Dragon Tattoo", 
        "Memento", "The Prestige", "Shutter Island", "Zodiac", 
        "Oldboy (2003)", "Prisoners", "No Country for Old Men", "Heat", 
        "Black Swan", "The Sixth Sense", "The Usual Suspects"
    ],
    "Animation": [
        "Toy Story", "The Lion King", "Spirited Away", "Up", 
        "Finding Nemo", "WALL-E", "Inside Out", "Coco", 
        "Frozen", "How to Train Your Dragon", "The Incredibles", "Shrek", 
        "Moana", "Beauty and the Beast (1991)", "My Neighbor Totoro"
    ]
};


function selectEmotion() {
    const emotion = document.getElementById('emotionalState').value;
    const genreSection = document.getElementById('genreSection');
    const genreDropdown = document.getElementById('genre');

    if (emotion) {
        genreDropdown.innerHTML = '';
        genreMapping[emotion].forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.text = genre;
            genreDropdown.add(option);
        });

        genreSection.style.display = 'block';
    }
}

function selectGenre() {
    const genre = document.getElementById('genre').value;
    const movieSection = document.getElementById('movieSection');
    const movieDropdown = document.getElementById('movie');

    if (genre) {
        movieDropdown.innerHTML = '';
        movieMapping[genre].forEach(movie => {
            const option = document.createElement('option');
            option.value = movie;
            option.text = movie;
            movieDropdown.add(option);
        });

        movieSection.style.display = 'block';
    }
}
