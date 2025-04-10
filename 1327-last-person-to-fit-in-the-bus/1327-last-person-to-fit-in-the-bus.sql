# Write your MySQL query statement below
WITH CumulativeWeight AS (
    SELECT
        person_name,
        turn,
        SUM(weight) OVER (ORDER BY turn ASC) AS cumulative_weight
    FROM
        Queue
)
SELECT
    person_name
FROM
    CumulativeWeight
WHERE
    cumulative_weight <= 1000
ORDER BY
    turn DESC
LIMIT 1;