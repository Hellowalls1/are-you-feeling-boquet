import { retailer } from "./Retailer.js"
import { useRetailers } from "./retailerDataProvider.js"
import { useDistributors } from "../distributor/distibutorDataProvider.js"


//were the representation of flowers will end up in the
const contentTarget = document.querySelector(".retailers")

const render = () => {
    
    //storing the retailer data procured from fetch call into new variable
    const retailersToRender = useRetailers()
    const distributor = useDistributors()
    
    //in the DOM display each HTML representation of retailer
    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
            
            //finding each distributor for each retailer based on the distributorId and the retailers distributorId
            const foundDistributor = distributor.find(
                (distributor) => {
                    return distributor.id === retailerObject.distributorId
                }
                )
                return retailer(retailerObject, foundDistributor)
            }
            ).join("")
        }
        
        export const RetailerList = () => {
       render()
    } 