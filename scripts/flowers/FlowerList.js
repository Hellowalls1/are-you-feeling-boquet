import { useFlowers } from "./flowerDataProvider.js"
import { flower } from "./Flower.js"

 
//were the representation of flowers will end up in the
const contentTarget = document.querySelector(".flowers")

    const render = () => {
        
        //storing the flower data procured from fetch call into new variable
        const flowersToRender = useFlowers()
      
        //in the DOM display each flower
        contentTarget.innerHTML = flowersToRender.map(
            (flowerObject) => {
            
            return flower(flowerObject)
        }
        ).join("")
    }

    export const FlowerList = () => {
       render()
    }
    
