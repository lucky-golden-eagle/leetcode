# Write your MySQL query statement below
select 
	sell_date, 
	COUNT(product) num_sold,  
	group_concat(product order by product) products 
from (SELECT DISTINCT * FROM Activities) Activities
group by sell_date
order by sell_date