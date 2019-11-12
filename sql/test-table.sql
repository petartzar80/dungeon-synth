CREATE TABLE test (
    id SERIAL PRIMARY KEY,
    grid_id INT NOT NULL,
    n INT,
    s INT,
    w INT,
    e INT,
    item VARCHAR(300),
    door_loc INT
);

SELECT * from test;
