//HTML representation of flower data
export const retailer = (retailerObject, distributorObject) => {
    return `
        <section class="retailer">
            <section>
            <h2>${retailerObject.name}</h2>
            </section>
            <section class="retailer_location">${retailerObject.city}, ${retailerObject.state}</section>
            <section class="retailer_address">${retailerObject.address}</section>
            <section class="retailer_distributor">${distributorObject.name}</section>
        </section>
    `
}