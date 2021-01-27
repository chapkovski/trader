// TODO: we get these objects from server when we go production
// gameParams is something that is un-updatable from server. 
// while lastKnownState is just a current state mutable in a store, store uses it as an initial state
const gameParams = {
    dayLength: 30,
    tickFrequency: 3,
    numTicks: 30,
}

export const lastKnownState = {
    currentTick: 0,

    
}
export default gameParams