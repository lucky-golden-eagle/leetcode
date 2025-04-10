# Write your MySQL query statement below
WITH RankedPrices AS (
    SELECT
        product_id,
        new_price,
        change_date,
        ROW_NUMBER() OVER(PARTITION BY product_id ORDER BY change_date DESC) as rn
    FROM
        Products
    WHERE
        change_date <= '2019-08-16'
)
SELECT
    DISTINCT p.product_id,
    COALESCE(rp.new_price, 10) AS price
FROM
    Products p
LEFT JOIN
    RankedPrices rp ON p.product_id = rp.product_id AND rp.rn = 1
LEFT JOIN
    (SELECT DISTINCT product_id FROM Products) AS all_products ON p.product_id = all_products.product_id
WHERE p.product_id IN (SELECT DISTINCT product_id FROM Products)
UNION
SELECT
    DISTINCT product_id,
    10 AS price
FROM
    Products
WHERE
    product_id NOT IN (SELECT DISTINCT product_id FROM RankedPrices)
    AND product_id NOT IN (SELECT DISTINCT product_id FROM (SELECT
        product_id
    FROM
        Products
    WHERE
        change_date <= '2019-08-16') AS A)
UNION
SELECT DISTINCT product_id, 10 AS price
FROM (SELECT DISTINCT product_id FROM Products) AS all_products
WHERE product_id NOT IN (SELECT DISTINCT product_id FROM Products WHERE change_date <= '2019-08-16')
AND product_id NOT IN (SELECT DISTINCT product_id FROM RankedPrices)
;