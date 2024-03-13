//in node we dont have a fetch so we need to install node-fetch
//for async tests -- fetch calls

const fetch = require('node-fetch');

function getPeoplePromise(fetch) {
    return fetch("https://swapi.py4e.com/api/people/?page=2")
        .then(response => response.json())
        .then(data => {
    
            return {
                count: data.count,
                results: data.results
            };
        });
}

const getPeople = async(fetch)=>{
    const getrequest = await fetch('https://swapi.py4e.com/api/people/?page=2');
    const data = await getrequest.json();
    return{
        count : data.count,
        results:data.results,
    }
}

module.exports = {
    getPeople,
    getPeoplePromise
}