import { retailer } from "./Retailer.js"
import { useRetailers } from "./retailerDataProvider.js"
import { useDistributors } from "../distributor/distibutorDataProvider.js"
import { useNurseries } from "../nurseries/nurseryDataProvider.js"
import { useDistributorNurseries } from "../distributor/distributorNurseriesProvider.js" //all the distributor nursery relationships
import { useNurseryFlowers } from "../nurseries/nurseryFlowerProvider.js"  //all the nursery flower relationships
import { useFlowers } from "../flowers/flowerDataProvider.js"


//were the representation of flowers will end up in the
const contentTarget = document.querySelector(".retailers")

const render = () => {
    
    //storing the data procured from fetch calls into new variables
    const retailersToRender = useRetailers()
    const distributor = useDistributors()
    const nursery = useNurseries()
    const distributorNursery = useDistributorNurseries()
    const nurseryFlower = useNurseryFlowers()
    const flowers = useFlowers()
    //in the DOM display each HTML representation of retailer
    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {

            //finding each distributor for each retailer based on the distributorId and the retailers distributorId
            const foundDistributor = distributor.find(distributor => distributor.id === retailerObject.distributorId)

            //filter the distributor nursery relationships and return an array of matching distributor's nursery relationships
            const distributorNurseryRelationship = distributorNursery.filter(distributorNursery => {
                    return foundDistributor.id === distributorNursery.distributorId //for each relationship 
                }
            )

            // Map over the array of the distributor's nursery relationships and return an array of the matching nurseries 
                //must create array to store the nurseriesArray in the return function. 
            
                //mapping over each distributor nursery relationship and then finding each nursery. Storing it in a variable
             const nurseriesArray = distributorNurseryRelationship.map( eachRelationship => {  //pulling in all relationships and mapping over
                    return nursery.find(nurseryObject => eachRelationship.nurseryId === nurseryObject.id) 
               }
                )

            //filter the nursery flower relationships and return an array of the matching nursery's flower relationships
            
            const theMatchingNurseryFlowerRelationships = nurseriesArray.map(nursery => {
                return nurseryFlower.filter(relationship => nursery.id === relationship.nurseryId)
            })

            //map over the array of nursery's flower relationships and return an array of the flowers they produce

            const theMatchingFlowers = theMatchingNurseryFlowerRelationships.flat().map( relationship => {
                return flowers.find( flower => relationship.flowerId === flower.id)
            })
            


                
                return retailer(retailerObject, foundDistributor, nurseriesArray, theMatchingFlowers)
            }
            ).join("")
        }
        
        export const RetailerList = () => {
       render()
    } 