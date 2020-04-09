//HTML representation of flower data
export const flower = (flowerObject) => {
    return `
        <section class="flower">
        <h2>${flowerObject.flower}</h2>
        <div>${flowerObject.color}</div>
        </section>
    `
}