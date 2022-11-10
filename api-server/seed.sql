DELETE FROM customers *;
DELETE FROM vehicles *;
DELETE FROM servicerepair *;

INSERT INTO customers (id, customer_name, customer_phone_number) VALUES (1, 'Felicia Goldman', '719-271-xxxx'),
(2, 'Johnathon Kent', '719-271-xxxx'),
(3, 'Christopher Reeves', '719-271-xxxx'),
(4, 'Joe Pesce', '719-271-xxxx'),
(5, 'Ed Sheeran', '719-271-xxxx');
INSERT INTO vehicles (id, vin, make, model, veh_year, customer_id) VALUES (1, '6dfasdfka5554fr57e5', 'Nissan', 'Pathfinder', 2015, 1), 
(2, '6dfasdfka55djkahd47', 'Nissan', 'Murano', 2014, 2),
(3, '6dfasdfka5465464648', 'Chevy', 'Malibu', 2007, 3),
(4, '6dfasdfka55das468sd', 'Subaru', 'Outback', 2010, 4),
(5, '6dfasdfka5ad5d8e1f2', 'Rolls', 'Kenardly', 2003, 5);
INSERT INTO servicerepair (id, symptom, service_repair, repair_duration, tech_name, cust_name, veh_id) VALUES (1, 'Engine collant does not reach proper temperature', 'replaced coolant thermostat', 5, 'Alfred', 'Felicia Goldman', 1),
(2, 'bald tires', 'replaced tires', 5, 'Butler', 'Johnathon Kent', 2),
(3, 'Clunking Noise under hood', 'broken tie rod', 5, 'Sam', 'Christopher Reeves', 3),
(4, 'black exhaust', 'replaced headgasket', 5, 'Willis', 'Joe Pesce', 4),
(5, 'spatter vision in windshield', 'replaced windshield', 5, 'Danny Boy', 'Ed Sheeran', 5);

--Return the id, title, and released_at all the movies ordered by from oldest to newest.
-- SELECT id, title, released_at FROM movies ORDER BY released_at ASC;
--Return the id, title, genre, and score of all of the PG movies that scored between 7.5 and 8.5
-- SELECT id, title, genre, score FROM movies WHERE rating = 'PG' AND score BETWEEN 7.5 AND 8.5;
--Add a half a point to the score of all Crime movies.
-- UPDATE movies SET score = score + .5 WHERE genre = 'Crime';
--this was from the seed problems we were working on