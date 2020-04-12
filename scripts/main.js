import { FlowerList } from "./flowers/FlowerList.js";
import { getFlowers } from "./flowers/flowerDataProvider.js";
import { getRetailers } from "./retailers/retailerDataProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";
import { getDistributor } from "./distributor/distibutorDataProvider.js";
import { getNurseries } from "./nurseries/nurseryDataProvider.js";
import { getNurseryFlowers } from "./nurseries/nurseryFlowerProvider.js";
import { getDistributorNurseries } from "./distributor/distributorNurseriesProvider.js";

getFlowers()
    .then(FlowerList)

getRetailers()
    .then(getDistributor)
    .then(getNurseries)
    .then(getDistributorNurseries)
    .then(getNurseryFlowers)
    .then(RetailerList)

