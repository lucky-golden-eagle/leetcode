# Write your MySQL query statement below
WITH FriendCounts AS (
    SELECT requester_id AS user_id, COUNT(accepter_id) AS num_friends
    FROM RequestAccepted
    GROUP BY requester_id
    UNION ALL
    SELECT accepter_id AS user_id, COUNT(requester_id) AS num_friends
    FROM RequestAccepted
    GROUP BY accepter_id
),
TotalFriendCounts AS (
    SELECT user_id, SUM(num_friends) AS total_friends
    FROM FriendCounts
    GROUP BY user_id
),
MaxFriends AS (
    SELECT MAX(total_friends) AS max_friends
    FROM TotalFriendCounts
)
SELECT tfc.user_id AS id, tfc.total_friends AS num
FROM TotalFriendCounts tfc
JOIN MaxFriends mf ON tfc.total_friends = mf.max_friends;