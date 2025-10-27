class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        start = bank[0].count("1")
        laserCount = 0
        for row in bank[1:]:
            devices = row.count("1")
            if not devices:
                continue
            laserCount += devices * start
            start = devices
        return laserCount