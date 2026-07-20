class Solution(object):
    def shiftGrid(self, grid, k):
        """
        :type grid: List[List[int]]
        :type k: int
        :rtype: List[List[int]]
        """
        m, n = len(grid), len(grid[0])
        arr = sum(grid, [])

        k %= m*n
        arr = arr[-k:] + arr[:-k]
        return [arr[i:i+n] for i in range(0, len(arr), n)]