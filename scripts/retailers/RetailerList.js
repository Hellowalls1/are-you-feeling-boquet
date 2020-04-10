import { retailer } from "./Retailer.js"
import { useRetailers } from "./retailerDataProvider.js"
import { useDistributors } from "../distributor/distibutorDataProvider.js"
import { useNurseries } from "../nurseries/nurseryDataProvider.js"
import { useDistributorNurseries } from "../distributor/distributorNurseriesProvider.js"
import { useNurseryFlowers } from "../nurseries/nurseryFlowerProvider.js"


//were the representation of flowers will end up in the
const contentTarget = document.querySelector(".retailers")

const render = () => {
    
    //storing the retailer data procured from fetch call into new variable
    const retailersToRender = useRetailers()
    const distributor = useDistributors()
    const nursery = useNurseries()
    const distributorNursery = useDistributorNurseries()
    const nurseryFlower = useNurseryFlowers()
    
    //in the DOM display each HTML representation of retailer
    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
            
            //finding each distributor for each retailer based on the distributorId and the retailers distributorId
            const foundDistributor = distributor.find(distributor => distributor.id === retailerObject.distributorId)
              
            //get all the distributor nursery object relationships
            const distributorNurseryRelationship = distributorNursery.filter(distributorNursery => {
                    return foundDistributor.id === distributorNursery.distributorId //for each relationship 
                }
            )
            
               let nurseriesArray = []
                //mapping over each distributor nursery relationship and then finding each nursery
               nurseriesArray = distributorNurseryRelationship.map( eachRelationship => {  //pulling in all relationships and mapping over
                    return nursery.find(nurseryObject => eachRelationship.nurseryId === nurseryObject.id) 
               }
                )
                debugger
                return retailer(retailerObject, foundDistributor, nurseriesArray)
            }
            ).join("")
        }
        
        export const RetailerList = () => {
       render()
    } 