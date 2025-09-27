class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for ast in asteroids:
            append = True
            while stack and (stack[-1] > 0 and ast < 0):
                if ast + stack[-1] == 0:
                    stack.pop()
                    append = False
                    break
                elif ast + stack[-1] > 0:
                    append = False
                    break
                else:
                    stack.pop()
            if append:
                stack.append(ast)
        return stack