let distributorNurseries = [] 

//copy of the distributorNurseries relationships array
export const useDistributorNurseries = () => {
    return distributorNurseries.slice()}

//fetch call getting the distributorNurseries from the api
export const getDistributorNurseries = () => {
    return fetch("http://localhost:8088/distributorNurseries")
       //turns JSON into Javascript
       .then (response => response.json())
       .then (
           (parsedDistributorNurseries) => {
               distributorNurseries = parsedDistributorNurseries 
           }
       )
   }