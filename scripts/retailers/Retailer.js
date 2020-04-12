//HTML representation of flower data
export const retailer = (retailerObject, distributorObject, nurseriesArray, theMatchingFlowers) => {
    return `
        <section class="retailer">
            <section>
            <h2>${retailerObject.name}</h2>
            </section>
            <section class="retailer_location">${retailerObject.city}, ${retailerObject.state}</section>
            <section class="retailer_address">${retailerObject.address}</section>
            <h4>Distributor:</h4>
            <section class="retailer_distributor">${distributorObject.name}</section>
            <h3>Nurseries:</h3>
            <section class="distributor_nurseries">
            <ul>
            ${
                nurseriesArray.map(nursery => `<li>${nursery.name}</li>`).join("") //have to use .map on customerArray because the array is full of objects and must convert to display
            }
            </ul>
            </section>
            <section class="nurseries_flowers">
            <h4>Available Flowers:</h4>
            <ul>
                ${
                   theMatchingFlowers.map(flowers => `<li>${flowers.color} - ${flowers.flower}</li>`).join("")
                }
            </ul>
           
            </section>
        </section>
    `
}