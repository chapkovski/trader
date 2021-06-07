// TODO: we get these objects from server when we go production
// gameParams is something that is un-updatable from server. 
// while lastKnownState is just a current state mutable in a store, store uses it as an initial state
const gameParams = {
    dayLength: 30,
    tickFrequency: 3,
    numTicks: 30,
    taskFee:20,
    awards: {
        time:{
            10:{
                img:'',
                name:'bronze',
                desc:'Hooray, you have got your first award for staying 10 secs on trade page'
            },
            13: {
                img:'',
                name:'silver',
                desc:'Hooray, you have got your first award for staying 13 secs on trade page'
            },
        },
        nums:{
            1: {
                img:'',
                name:'bronze',
                desc:'Hooray, you have got your first award for first transaction. congrats!'
            }
        }
    }
}

export const lastKnownState = {
    currentTick: 0,

    
}
export default gameParams