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
                img:'https://cdn3.iconfinder.com/data/icons/cyber-monday-astute-vol-1-1/512/Early_Start-512.png',
                name:'bronze',
                desc:'Hooray, you have got your first award for staying 5 secs on trade page'
            },
            20: {
                img:'https://cdn1.iconfinder.com/data/icons/scenarium-vol-9/128/001_award_cup_winner_silver-512.png',
                name:'silver',
                desc:'Hooray, you have got your silver award for staying 20 secs on trade page'
            },
            30: {
                img:'https://cdn1.iconfinder.com/data/icons/sport-fitness-vol-2/512/z5-champion-award-cup-winner-512.png',
                name:'gold',
                desc:'Hooray, you have got your golden award for staying 30 secs on trade page'
            },
        },
        nums:{
            1: {
                img:'https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-18-512.png',
                name:'bronze',
                desc:'Hooray, you have got your first award for first transaction. congrats!'
            },
            3: {
                img:'https://cdn4.iconfinder.com/data/icons/family-characters/50/10-512.png',
                name:'silver',
                desc:'Hooray, you have got your first award for first 3  transactions. You rock!'
            },
            5: {
                img:'https://cdn3.iconfinder.com/data/icons/start-up-4/44/money_bag-512.png',
                name:'gold',
                desc:'Hooray, 5 transactions! Incredible!'
            },
        }
    }
}

export const lastKnownState = {
    currentTick: 0,

    
}
export default gameParams