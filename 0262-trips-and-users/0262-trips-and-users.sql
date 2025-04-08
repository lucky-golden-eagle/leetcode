# Write your MySQL query statement below
SELECT
    t.request_at AS Day,
    ROUND(
        SUM(CASE 
                WHEN t.status = 'cancelled_by_driver' OR t.status = 'cancelled_by_client' THEN 1 
                ELSE 0 
            END)
        / 
        COUNT(t.id)
    , 2) AS "Cancellation Rate"
FROM
    Trips t
JOIN
    Users u_client ON t.client_id = u_client.users_id
JOIN
    Users u_driver ON t.driver_id = u_driver.users_id
WHERE
    t.request_at BETWEEN '2013-10-01' AND '2013-10-03'
    AND u_client.banned = 'No'
    AND u_driver.banned = 'No'
GROUP BY
    t.request_at
ORDER BY
    Day;