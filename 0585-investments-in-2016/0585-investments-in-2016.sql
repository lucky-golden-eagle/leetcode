# Write your MySQL query statement below
SELECT ROUND(SUM(i.tiv_2016), 2) AS tiv_2016
FROM Insurance i
WHERE i.tiv_2015 IN (SELECT tiv_2015 FROM Insurance GROUP BY tiv_2015 HAVING COUNT(*) > 1)
  AND NOT EXISTS (SELECT 1 FROM Insurance j WHERE i.pid != j.pid AND i.lat = j.lat AND i.lon = j.lon);