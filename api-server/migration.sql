DROP TABLE customers CASCADE;
DROP TABLE vehicles CASCADE;
DROP TABLE servicerepair CASCADE;



 CREATE TABLE customers(
    id serial PRIMARY KEY,
    customer_name text,
    customer_phone_number text

    
);

CREATE TABLE vehicles(
    id serial PRIMARY KEY,
    vin text,
    make text,
    model text,
    veh_year integer,
    customer_id serial,
        FOREIGN KEY (customer_id) REFERENCES customers(id)
            ON DELETE CASCADE
    );



CREATE TABLE servicerepair(
    id serial PRIMARY KEY,
    symptom text,
    service_repair text,
    repair_duration integer,
    tech_name text,
    cust_name text,
    veh_id serial,
        FOREIGN KEY (veh_id) REFERENCES vehicles(id)
            ON DELETE CASCADE
) 



