console.log('Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.')
var data = ['green', 'red', 'yellow'];
data.forEach((alien_color) => {
    if (alien_color == 'green') {
        console.log('When Green:')
        console.log('player just earned 5 points.');
    } else if (alien_color == 'red') {
        console.log('When red:')
        console.log('player just earned 10 points.');
    } else {
        console.log('When yellow:')
        console.log('player just earned 15 points.');
    }
})