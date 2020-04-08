import { FlowerList } from "./FlowerList.js";
import { getFlowers } from "./flowerDataProvider.js";

getFlowers()
    .then(FlowerList)