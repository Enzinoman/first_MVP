const express = require('express');
const { Client } = require('pg');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const PORT = 8000;


const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/autoshop';
const client = new Client({
    connectionString: connectionString,
});
client.connect();





/* const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/autoshop';
const client = new Client({
    connectionString: connectionString,
});
client.connect(); */

/* app.get('/', (req, res) => {
    res.send('Hello World!');


}); */

/* app.get('/customers', (req, res) => {
    // client.query('SELECT * FROM customers')
    pool.query('SELECT * FROM customers')
    .then(result => {
        //console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
});  */
/* app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
}); */

app.get('/', (req,res)=>{
  client.query('SELECT * FROM servicerepair')
  .then(result => {
 
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
}); 

app.get('/customers', (req, res) => {
  client.query('SELECT * FROM customers')
  .then(result => {
      //console.log(result.rows[0])
      res.send(result.rows);
  })
  .catch(e => console.error(e.stack))
}); 


app.get('/vehicles', (req, res) => {
    client.query('SELECT * FROM vehicles')
    .then(result => {
        //console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
}); 


app.get('/servicerepair', (req, res) => {
    client.query('SELECT * FROM servicerepair')
    .then(result => {
        //console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
}); 


app.post('/customers', (req, res) => {
    let customers = req.body;
    let id = customers.id;
    let customerName = customers.customer_name;
    let phone = customers.customer_phone_number;
    let feedback = customers.customer_feedback;
    console.log(customers);
    client.query(`INSERT INTO customers (id, customer_name, customer_phone_number)
    VALUES (${id}, '${customerName}', '${phone}', '${feedback}') RETURNING *`)
    .then(result =>{
        
        res.status(200).send(result.rows);
    })
});

app.post('/vehicles', (req, res) => {
    let vehicles = req.body;
    let carImage = vehicles.img;
    let id = vehicles.id;
    let vin = vehicles.vin;
    let make = vehicles.make;
    let model = vehicles.model;
    let vehYear = vehicles.veh_year;
    let customerId = vehicles.customer_id;
    console.log(vehicles);
    client.query(`INSERT INTO vehicles (img, id, vin, make, model, veh_year, customer_id)
    VALUES ('${carImage}', ${id}, '${vin}', '${make}', '${model}', ${vehYear}, ${customerId}) RETURNING *`)
    .then(result =>{
        
        res.status(200).send(result.rows);
    })
});

app.post('/servicerepair', (req, res) => {
    let services = req.body;
    let carImage = services.img;
    let servicesId = services.id;
    let symptom = services.symptom;
    let repair = services.service_repair;
    let repairTime = services.repair_duration;
    let techName = services.tech_name;
    let custName = services.cust_name;
    let vehId = services.veh_id;
    console.log(services);
    client.query(`INSERT INTO servicerepair (id, syptom, service_repair, repair_duration, tech_name, cust_name, veh_id)
    VALUES ('${carImage}', ${servicesId}, '${symptom}', '${repair}', ${repairTime}, '${techName}', '${custName}', ${vehId}) RETURNING *`)
    .then(result =>{
        
        res.status(200).send(result.rows);
    })
});


app.patch("/customers/:id", (req, res) => {
    console.log(req.body);
    let customer = req.body;
    let elements = [];
    for (element in customer) {
      console.log(element, customer[element]);
      elements.push(element + "='" + customer[element] + "'");
    }
    console.log(elements.toString());
    // Example Syntax: http PATCH localhost:3000/customers/2 customer_name='Joe'
    client.query(`UPDATE customers SET ${elements.toString()} WHERE id=${req.params.id} `)
      .then((result) => {
        res.send(req.body);
      });
  });


  app.patch("/vehicles/:id", (req, res) => {
    console.log(req.body);
    let vehicle = req.body;
    let elements = [];
    for (element in vehicle) {
      console.log(element, vehicle[element]);
      elements.push(element + "='" + vehicle[element] + "'");
    }
    console.log(elements.toString());
    // Example Syntax: http PATCH localhost:3000/vehicles/2 model='Murano'
  
    client.query(`UPDATE vehicles SET ${elements.toString()} WHERE id=${req.params.id} `)
      .then((result) => {
        res.send(req.body);
      });
  });


  app.patch("/servicerepair/:id", (req, res) => {
    console.log(req.body);
    let service = req.body;
    let elements = [];
    for (element in service) {
      console.log(element, service[element]);
      elements.push(element + "='" + service[element] + "'");
    }
    console.log(elements.toString());
    // Example Syntax: http PATCH localhost:3000/technicians/2 aoe='Tire & Services'
  
    client.query(`UPDATE servicerepair SET ${elements.toString()} WHERE id=${req.params.id} `)
      .then((result) => {
        res.send(req.body);
      });
  });



app.delete("/customers/:id", (req, res) => {
    client.query(`DELETE FROM customers WHERE id = ${req.params.id}`)
    
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        res.send(err);
        console.error(err);
      });
  });


  app.delete("/vehicles/:id", (req, res) => {
    client.query(`DELETE FROM vehicles WHERE id = ${req.params.id}`)
      
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        res.send(err);
        console.error(err);
      });
  });


  app.delete("/servicerepair/:id", (req, res) => {
    client.query(`DELETE FROM servicerepair WHERE id = ${req.params.id}`)
      
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        res.send(err);
        console.error(err);
      });
  });



app.use((req, res, next) => {
    console.log(req.path.split("/"));
    res.status(404).send('Not Found');
  }); 


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});