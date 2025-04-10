# Write your MySQL query statement below
WITH SalaryCategories AS (
    SELECT "Low Salary" AS category
    UNION ALL
    SELECT "Average Salary"
    UNION ALL
    SELECT "High Salary"
),
CategorizedAccounts AS (
    SELECT
        CASE
            WHEN income < 20000 THEN "Low Salary"
            WHEN income BETWEEN 20000 AND 50000 THEN "Average Salary"
            WHEN income > 50000 THEN "High Salary"
        END AS category
    FROM
        Accounts
)
SELECT
    sc.category,
    COUNT(ca.category) AS accounts_count
FROM
    SalaryCategories sc
LEFT JOIN
    CategorizedAccounts ca ON sc.category = ca.category
GROUP BY
    sc.category
ORDER BY
    CASE sc.category
        WHEN "Low Salary" THEN 1
        WHEN "Average Salary" THEN 2
        WHEN "High Salary" THEN 3
    END;