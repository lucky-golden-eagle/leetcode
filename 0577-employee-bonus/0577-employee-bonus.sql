# Write your MySQL query statement below
SELECT e.name, b.bonus
FROM Employee e
INNER JOIN Bonus b ON e.empId = b.empId
WHERE b.bonus < 1000
UNION ALL
SELECT e.name, NULL AS bonus
FROM Employee e
WHERE e.empId NOT IN (SELECT empId FROM Bonus);