# Shortest Path for a Knight's Movement

This JavaScript program is part of TOP JS assignment which finds the shortest path for a knight's movement on a chessboard from one position to another.

## Code And Logic

- `Game` Class: The `Game` class generates a chessboard of a specified size (default is 8x8) to represent the chessboard where the knight will make its moves.

- `knightMoves` Function: This function takes two positions on the chessboard as input and finds the shortest path for a knight to move from the start position to the end position. It uses a breadth-first search algorithm to explore possible moves. `possibleMoves` defines an array of all possible L-shaped moves the knight can make from a position. Each move is represented as [row, col], where row is the change in the row coordinate, and col is the change in the column coordinate on the chessboard.

- `isInsideBoard` Function: This helper function checks if a given coordinate is inside the boundaries of the chessboard.

## Note

- The chessboard is represented as a 2D grid with `[0, 0]` being the top-left corner.
- The program uses a breadth-first search algorithm to find the shortest path for the knight's movement.
- If a valid path exists, it will be displayed as an array of positions or returns `null` if it doesn't exists.
