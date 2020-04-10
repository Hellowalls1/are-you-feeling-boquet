//empty array to hold the flowers
let nurseries = [] 

//copy of the flower array
export const useNurseries = () => {
    return nurseries.slice()}

//fetch call getting the flowers
export const getNurseries = () => {
    return fetch("http://localhost:8088/nurseries")
       //turns JSON into Javascript
       .then (response => response.json())
       .then (
           (parsedNurseries) => {
               nurseries = parsedNurseries 
           }
       )
   }