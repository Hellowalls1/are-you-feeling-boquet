//empty array to hold the flowers
let flowers = [] 

//copy of the flower array
export const useFlowers = () => {
    return flowers.slice()}

//fetch call getting the flowers
export const getFlowers = () => {
    return fetch("http://localhost:8088/flowers")
       //turns JSON into Javascript
       .then (response => response.json())
       .then (
           (parsedFlowers) => {
               flowers = parsedFlowers
           }
       )
   }