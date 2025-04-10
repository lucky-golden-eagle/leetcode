# Write your MySQL query statement below
SELECT class
FROM (
    SELECT class, COUNT(*) AS student_count
    FROM Courses
    GROUP BY class
) AS class_counts
WHERE student_count >= 5;