# Write your MySQL query statement below
WITH RECURSIVE EmployeeHierarchy AS (
    SELECT
        employee_id,
        employee_name,
        salary,
        1 AS level,
        CAST(employee_id AS CHAR(1000)) AS path
    FROM
        Employees
    WHERE
        manager_id IS NULL

    UNION ALL

    SELECT
        e.employee_id,
        e.employee_name,
        e.salary,
        eh.level + 1,
        CONCAT(eh.path, '/', e.employee_id)
    FROM
        Employees e
    INNER JOIN
        EmployeeHierarchy eh ON e.manager_id = eh.employee_id
)

SELECT
    m.employee_id,
    m.employee_name,
    m.level,
    COALESCE(COUNT(s.employee_id), 0) AS team_size,
    m.salary + COALESCE(SUM(s.salary), 0) AS budget
FROM
    EmployeeHierarchy m
LEFT JOIN
    EmployeeHierarchy s
    ON s.path LIKE CONCAT(m.path, '/%')

GROUP BY
    m.employee_id,
    m.employee_name,
    m.level,
    m.salary,
    m.path -- Include path in GROUP BY as it's used in the JOIN condition logic implicitly

ORDER BY
    m.level ASC,       -- Primary sort: level ascending
    budget DESC,       -- Secondary sort: budget descending
    m.employee_name ASC; -- Tertiary sort: employee name ascending