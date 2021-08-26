class Solution
{
public:
  void rotate(vector<vector<int>> &matrix)
  {
    // get width of matrix
    int n = matrix.size();
    for (int i = 0; i < n / 2; i++)
    {
      for (int j = i; j < n - i - 1; j++) // bound is -1 becuse corner will replace in first loop
      {
        int temp = matrix[i][j];
        matrix[i][j] = matrix[n - j - 1][i];
        matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
        matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
        matrix[j][n - 1 - i] = temp;
      }
    }
  }
};