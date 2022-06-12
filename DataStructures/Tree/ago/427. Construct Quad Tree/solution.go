/**
 * Definition for a QuadTree node.
 * type Node struct {
 *     Val bool
 *     IsLeaf bool
 *     TopLeft *Node
 *     TopRight *Node
 *     BottomLeft *Node
 *     BottomRight *Node
 * }
 */

func construct(grid [][]int) *Node {
    return genNode(grid, 0, len(grid), 0, len(grid))
}

func genNode(grid [][]int, xStart, xEnd, yStart, yEnd int)*Node {
    var node Node;
    half := (xEnd - xStart) / 2
    xMiddle := xStart + half
    yMiddle := yStart + half

    if isLeaf(grid, xStart, xEnd, yStart, yEnd) {
        node.Val = grid[xStart][yStart] == 1
        node.IsLeaf = true
    } else {
        node.Val = true
        node.IsLeaf = false
        node.TopLeft = genNode(grid, xStart, xMiddle, yStart, yMiddle)
        node.TopRight = genNode(grid, xStart, xMiddle, yMiddle, yEnd)
        node.BottomLeft = genNode(grid, xMiddle, xEnd , yStart, yMiddle)
        node.BottomRight = genNode(grid, xMiddle, xEnd, yMiddle, yEnd)
    }
    return &node;
}

func isLeaf(grid [][]int, xStart, xEnd, yStart, yEnd int) bool {
    val := grid[xStart][yStart]
    for i := xStart; i < xEnd; i += 1 {
        for j := yStart; j < yEnd; j += 1 {
            if val != grid[i][j] { return false }
        }
    }
    return true
}