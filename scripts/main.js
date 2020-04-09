import { FlowerList } from "./flowers/FlowerList.js";
import { getFlowers } from "./flowers/flowerDataProvider.js";
import { getRetailers } from "./retailers/retailerDataProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";
import { getDistributor } from "./distributor/distibutorDataProvider.js";

getFlowers()
    .then(FlowerList)

getRetailers()
    .then(getDistributor)
    .then(RetailerList)