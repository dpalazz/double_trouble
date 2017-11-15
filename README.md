# Double Trouble

A new take on the original race-and-chase Pop-o-matic Trouble Game. The game features two players who compete to move their game piece around the board and return it back to its safe place. If the players land on each other's piece, it's returned to its original safe place and starts from the beginning. Whoever gets their game piece around the board and back to its safe place first wins! This was the first project as a part of General Assembly's Web Development Immersive Remote program.

## Deployment

To deploy this on a live system, visit https://dpalazz.github.io/double_trouble/.

## Built With

* HTML, CSS, JavaScript, and jQuery.
* [Atom](https://atom.io/) - The text editor used

## The Approach

I hard coded the game board in order to create a square of circles in the middle with the players on either side to emulate the actual game board. I used jQuery to then produce event listeners which would generate "die rolls" and movement of the game pieces. By creating objects for each player which contained whether their game pieces were safe and on which game board circle they were positioned, and by creating arrays which held the names of the game board circles and whether they were filled, I could then advance the game pieces.

## Author

* **Dana Palazzo**
 [GitHub Account](https://github.com/dpalazz)

## Acknowledgments

* Hat tip to 2017/18 WDIR classmates
* Inspiration from The Trouble Game produced by Milton Bradley
