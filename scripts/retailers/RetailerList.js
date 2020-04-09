import { retailer } from "./Retailer.js"
import { useRetailers } from "./retailerDataProvider.js"


//were the representation of flowers will end up in the
const contentTarget = document.querySelector(".retailers")

    const render = () => {

        //storing the retailer data procured from fetch call into new variable
        const retailersToRender = useRetailers()

        //in the DOM display each flower
        contentTarget.innerHTML = retailersToRender.map(
            (retailerObject) => {

            return retailer(retailerObject)
        }
        ).join("")
    }

    export const RetailerList = () => {
       render()
    }