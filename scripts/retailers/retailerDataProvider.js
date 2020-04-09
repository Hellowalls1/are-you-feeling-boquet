//empty array to hold the flowers
let retailers = [] 

//copy of the flower array
export const useRetailers = () => {
    return retailers.slice()}

//fetch call getting the flowers
export const getRetailers = () => {
    return fetch("http://localhost:8088/retailers")
       //turns JSON into Javascript
       .then (response => response.json())
       .then (
           (parsedRetailers) => {
               retailers = parsedRetailers 
           }
       )
   }