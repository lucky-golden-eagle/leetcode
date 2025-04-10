# Write your MySQL query statement below
WITH StudentCount AS (
    SELECT COUNT(*) AS total_students FROM Seat
)
SELECT
    s.id,
    CASE
        WHEN s.id % 2 = 1 AND s.id < (SELECT total_students FROM StudentCount) THEN LEAD(s.student, 1, s.student) OVER (ORDER BY s.id)
        WHEN s.id % 2 = 0 THEN LAG(s.student, 1, s.student) OVER (ORDER BY s.id)
        ELSE s.student
    END AS student
FROM
    Seat s
ORDER BY
    s.id;