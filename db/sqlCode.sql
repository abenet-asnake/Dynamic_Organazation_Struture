CREATE TABLE department (
    department_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR,
    parent_department_id INTEGER REFERENCES department(department_id),
    ceo_id INTEGER REFERENCES ceo(ceo_id)
);
CREATE TABLE ceo (
    ceo_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    title VARCHAR DEFAULT 'CEO'
);

CREATE TABLE employee (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    department_id INTEGER REFERENCES department(department_id)
);
