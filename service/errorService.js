const CircuitBreaker = require('opossum');
const fetch = require('node-fetch')

const options = {
    timeout: 3000, // If our function takes longer than 3 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 10000 // After 30 seconds, try again.
};

function getError() {
    return fetch('http://localhost:3000/error').then(res => {
        if (res.status >= 500) {
            throw new Error("Error: " + res.status)
        }
        return res.text();
    });
}

module.exports = (breakerMetrics) => {

    const breaker = new CircuitBreaker(getError, options);

    breakerMetrics.add(breaker)

    return ()=>breaker.fire();
}
