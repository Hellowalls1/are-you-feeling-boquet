//HTML representation of flower data
export const retailer = (retailerObject, distributorObject, nurseriesArray) => {
    return `
        <section class="retailer">
            <section>
            <h2>${retailerObject.name}</h2>
            </section>
            <section class="retailer_location">${retailerObject.city}, ${retailerObject.state}</section>
            <section class="retailer_address">${retailerObject.address}</section>
            <section class="retailer_distributor">${distributorObject.name}</section>
            <h3>We Proudly Support:</h3>
            <section class="distributor_nurseries">
            <ul>
            ${
                nurseriesArray.map(nursery => `<li>${nursery.name}</li>`).join("") //have to use .map on customerArray because the array is full of objects and must convert to display
            }
            </ul>
            </section>
        </section>
    `
}