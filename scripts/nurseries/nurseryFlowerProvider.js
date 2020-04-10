let nurseryFlowers = [] 

//copy of the flower array
export const useNurseryFlowers = () => {
    return nurseryFlowers.slice()}

//fetch call getting the flowers
export const getNurseryFlowers = () => {
    return fetch("http://localhost:8088/nurseryFlowers")
       //turns JSON into Javascript
       .then (response => response.json())
       .then (
           (parsedNurseryFlowers) => {
               nurseryFlowers = parsedNurseryFlowers 
           }
       )
   }