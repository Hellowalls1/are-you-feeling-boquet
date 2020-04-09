//empty array to hold the distributors
let distributors = [] 

//copy of the distributor array
export const useDistributors = () => {
    return distributors.slice()}

//fetch call getting the distributors
export const getDistributor = () => {
    return fetch("http://localhost:8088/distributors")
       //turns JSON into Javascript
       .then (response => response.json())
       .then (
           (parsedDistributors) => {
               distributors = parsedDistributors
           }
       )
   }