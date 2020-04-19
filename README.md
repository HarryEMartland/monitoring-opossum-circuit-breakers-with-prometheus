# monitoring-opossum-circuit-breakers-with-prometheus

To run this example execute `docker-compose up` on the command line.
This will spin up the example application, Prometheus and Grafana.
Another image will be created which makes some requests to the service to simulate load.
The simulation also changes how the circuit breaker function behaves, caning it to error at difference percentages.

#### Handy Links

- [Prometheus](http://localhost:9090)
- [Grafana](http://localhost:3002/) (username: admin, password: secret)
- [Grafana Dashboard](http://localhost:3002/d/aiyWzpsWz/circuit-breakers)
- [App](http://localhost:3000/)