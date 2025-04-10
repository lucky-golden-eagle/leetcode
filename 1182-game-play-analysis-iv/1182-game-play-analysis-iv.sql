# Write your MySQL query statement below
WITH FirstLogin AS (
    SELECT
        player_id,
        MIN(event_date) AS first_date
    FROM
        Activity
    GROUP BY
        player_id
),
PlayersLoggedInNextDay AS (
    SELECT DISTINCT
        fl.player_id
    FROM
        FirstLogin fl
    JOIN
        Activity a ON fl.player_id = a.player_id
    WHERE
        a.event_date = DATE_ADD(fl.first_date, INTERVAL 1 DAY)
)
SELECT
    ROUND(COUNT(pld.player_id) * 1.0 / (SELECT COUNT(DISTINCT player_id) FROM Activity), 2) AS fraction
FROM
    PlayersLoggedInNextDay pld;