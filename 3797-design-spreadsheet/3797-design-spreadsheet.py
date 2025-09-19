class Spreadsheet:

    def __init__(self, rows: int):
        self.rows = rows
        self.data = {}

    def setCell(self, cell: str, value: int) -> None:
        row, col = self._parse_cell(cell)
        self.data[(row, col)] = value

    def resetCell(self, cell: str) -> None:
        row, col = self._parse_cell(cell)

        if (row, col) in self.data:
            del self.data[(row, col)]

    def getValue(self, formula: str) -> int:
        expr = formula[1:]
        x, y = expr.split('+')
        return self._resolve(x) + self._resolve(y)

    def _parse_cell(self, cell: str):
        # first char is column (A-Z)
        col_char = cell[0]
        col = ord(col_char) - ord('A')
        # remaining is row number (1-indexed)
        row = int(cell[1:])
        return row, col

    def _resolve(self, token: str) -> int:
        # token is either a number or a cell reference
        if token[0].isdigit():
            return int(token)
        row, col = self._parse_cell(token)
        return self.data.get((row, col), 0)

# Your Spreadsheet object will be instantiated and called as such:
# obj = Spreadsheet(rows)
# obj.setCell(cell,value)
# obj.resetCell(cell)
# param_3 = obj.getValue(formula)