# Write your MySQL query statement below
SELECT product_name, SUM(unit) AS unit
FROM Orders 
    JOIN Products USING(product_id)
WHERE order_date between "2020-02-01" AND "2020-02-29"
GROUP BY 1
HAVING SUM(unit) >= 100;