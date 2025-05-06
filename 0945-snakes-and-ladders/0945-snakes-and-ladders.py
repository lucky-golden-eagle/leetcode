class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        
        def get_pos(num):
            r, c = divmod(num - 1, n)
            row = n - 1 - r
            col = c if r % 2 == 0 else n - 1 - c
            return row, col

        visited = set()
        queue = deque([(1, 0)])
        
        while queue:
            curr, moves = queue.popleft()
            for i in range(1, 7):
                next_cell = curr + i
                if next_cell > n * n:
                    continue
                r, c = get_pos(next_cell)
                if board[r][c] != -1:
                    next_cell = board[r][c]
                if next_cell == n * n:
                    return moves + 1
                if next_cell not in visited:
                    visited.add(next_cell)
                    queue.append((next_cell, moves + 1))
        
        return -1
         