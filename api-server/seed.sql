DELETE FROM customers *;
DELETE FROM vehicles *;
DELETE FROM servicerepair *;

INSERT INTO customers (id, customer_name, customer_phone_number, customer_feedback) VALUES (1, 'Felicia Goldman', '719-271-xxxx', 'feedback'),
(2, 'Johnathon Kent', '719-271-xxxx', 'feedback'),
(3, 'Christopher Reeves', '719-271-xxxx', 'feedback'),
(4, 'Joe Pesce', '719-271-xxxx', 'feedback'),
(5, 'Ed Sheeran', '719-271-xxxx', 'feedback');

INSERT INTO vehicles (img, id, vin, make, model, veh_year, customer_id) VALUES ('https://vexgateway.fastly.carvana.io/2001989770/hero.jpg?width=449', 1, '6dfasdfka5554fr57e5', 'Toyota', 'Tucson', 2016, 1), 
('https://vexgateway.fastly.carvana.io/2002004453/hero.jpg?width=449', 2, '6dfasdfkakadshf5648', 'Lincoln', 'MKX', 2013, 2),
('https://vexgateway.fastly.carvana.io/2001902251/hero.jpg?width=449', 3, '6dfasdfka5465464648', 'Hyundai', 'Elantra', 2016, 3),
('https://vexgateway.fastly.carvana.io/2001731289/hero.jpg?width=449', 4, '6dfasdfka55das468sd', 'GMC', 'Terrain', 2017, 4),
('https://vexgateway.fastly.carvana.io/2002066367/hero.jpg?width=449', 5, '6dfasdfka5ad5d8e1f2', 'Lexus', 'IS', 2011, 5);

INSERT INTO servicerepair (img, id, symptom, service_repair, repair_duration, tech_name, cust_name, veh_id) VALUES ('https://vexgateway.fastly.carvana.io/2001989770/hero.jpg?width=449', 1, 'Engine collant does not reach proper temperature', 'replaced coolant thermostat', 5, 'Alfred', 'Felicia Goldman', 1),
('https://vexgateway.fastly.carvana.io/2002004453/hero.jpg?width=449', 2, 'tires balding', 'tires replaced', 5, 'Max', 'Johnathon Kent', 3),
('https://vexgateway.fastly.carvana.io/2001902251/hero.jpg?width=449', 3, 'Clunking Noise under hood', 'broken tie rod', 5, 'Sam', 'Christopher Reeves', 3),
('https://vexgateway.fastly.carvana.io/2001731289/hero.jpg?width=449', 4, 'black exhaust', 'replaced headgasket', 5, 'Willis', 'Joe Pesce', 4),
('https://vexgateway.fastly.carvana.io/2002066367/hero.jpg?width=449', 5, 'spatter vision in windshield', 'replaced windshield', 5, 'Danny Boy', 'Ed Sheeran', 5);

--Return the id, title, and released_at all the movies ordered by from oldest to newest.
-- SELECT id, title, released_at FROM movies ORDER BY released_at ASC;
--Return the id, title, genre, and score of all of the PG movies that scored between 7.5 and 8.5
-- SELECT id, title, genre, score FROM movies WHERE rating = 'PG' AND score BETWEEN 7.5 AND 8.5;
--Add a half a point to the score of all Crime movies.
-- UPDATE movies SET score = score + .5 WHERE genre = 'Crime';
--this was from the seed problems we were working on