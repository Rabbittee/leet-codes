class Solution
{
public:
  int minPathSum(vector<vector<int>> &grid)
  {
    vector<vector<int>> weight = grid; // init vector to store road map score
    int i; // x axis
    int j; // y axis
    for (i = 0; i < weight.size(); i++)
    {
      for (j = 0; j < weight[i].size(); j++)
      {
        if (i == 0 && j == 0) // if origin skip
          continue;
        if (i == 0) // if first row, weight should be left hand + grid value
        {
          weight[i][j] = grid[i][j] + weight[i][j - 1];
          continue;
        }
        if (j == 0) // if first column, weight should be upper + grid value
        {
          weight[i][j] = grid[i][j] + weight[i - 1][j];
          continue;
        }
        // compare upper one and left hand one, which is smaller and + grid value.
        weight[i][j] = min(weight[i - 1][j], weight[i][j - 1]) + grid[i][j];
      }
    }
    return weight[i - 1][j - 1];
  }
};