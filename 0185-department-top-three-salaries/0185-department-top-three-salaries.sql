# Write your MySQL query statement below
WITH RankedEmployees AS (
    SELECT
        e.name AS Employee,
        e.salary AS Salary,
        d.name AS Department,
        DENSE_RANK() OVER(PARTITION BY e.departmentId ORDER BY e.salary DESC) as rank_num
    FROM
        Employee e
    JOIN
        Department d ON e.departmentId = d.id
)
SELECT
    Department,
    Employee,
    Salary
FROM
    RankedEmployees
WHERE
    rank_num <= 3;