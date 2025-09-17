class FoodRatings:

    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        self.foodInfo = {}  # food -> (cuisine, rating)
        self.heaps = defaultdict(list)  # cuisine -> [(-rating, name)]
        for f, c, r in zip(foods, cuisines, ratings):
            self.foodInfo[f] = (c, r)
            heapq.heappush(self.heaps[c], (-r, f))


    def changeRating(self, food: str, newRating: int) -> None:
        cuisine, _ = self.foodInfo[food]
        self.foodInfo[food] = (cuisine, newRating)
        heapq.heappush(self.heaps[cuisine], (-newRating, food))

    def highestRated(self, cuisine: str) -> str:
        heap = self.heaps[cuisine]
        # Discard stale entries
        while heap:
            neg_r, name = heap[0]
            cur_c, cur_r = self.foodInfo[name]
            if cur_c == cuisine and -neg_r == cur_r:
                return name
            heapq.heappop(heap)
        return ""  # should never happen given constraints

# Your FoodRatings object will be instantiated and called as such:
# obj = FoodRatings(foods, cuisines, ratings)
# obj.changeRating(food,newRating)
# param_2 = obj.highestRated(cuisine)