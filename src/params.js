// TODO: we get these objects from server when we go production
// gameParams is something that is un-updatable from server. 
// while lastKnownState is just a current state mutable in a store, store uses it as an initial state
const gameParams = {
   
    priceUrl:'https://uppsi22mf2.execute-api.us-east-1.amazonaws.com/Prod/price/',
    dayLength: 60,
    SEC:1000,
    tickFrequency: 3,
    numTicks: 30,
    endowment:100,
    awards: {
        time:{
            30 :{
                img:'https://cdn3.iconfinder.com/data/icons/cyber-monday-astute-vol-1-1/512/Early_Start-512.png',
                name:'bronze',
                desc:'Bronze trophy: You have spent 20 seconds on the trading platform!'
            },
            60: {
                img:'https://cdn1.iconfinder.com/data/icons/scenarium-vol-9/128/001_award_cup_winner_silver-512.png',
                name:'silver',
                desc:'Hooray, you received a Silver trophy for spending one minute on the trade page'
            },
            120: {
                img:'https://cdn1.iconfinder.com/data/icons/sport-fitness-vol-2/512/z5-champion-award-cup-winner-512.png',
                name:'gold',
                desc:'Amazing! You are Golden: 2 minutes on the trade platform!'
            },  
            150: {
                img:'https://cdn1.iconfinder.com/data/icons/sport-fitness-vol-2/512/z5-champion-award-cup-winner-512.png',
                name:'platinum',
                desc:'You are a PLATINUM trader: you spent more than half the round time trading!'
            },
            210: {
                img:'https://cdn1.iconfinder.com/data/icons/sport-fitness-vol-2/512/z5-champion-award-cup-winner-512.png',
                name:'diamond',
                desc:'Congratulations!! Peak achievement: You are a DIAMOND trader!'
            },
        },
        nums:{
            1: {
                img:'https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-18-512.png',
                name:'bronze',
                desc:'You received a Bronze Award: your first transaction. Congrats!'
            },
            3: {
                img:'https://cdn4.iconfinder.com/data/icons/family-characters/50/10-512.png',
                name:'silver',
                desc:'You are getting the hang of it: 3 transactions and a Silver Award.'
            },
            5: {
                img:'https://cdn3.iconfinder.com/data/icons/start-up-4/44/money_bag-512.png',
                name:'gold',
                desc:'Incredible! Five transactions -- you deserve GOLD status!'
            },
            
            10: {
                img:'https://cdn3.iconfinder.com/data/icons/start-up-4/44/money_bag-512.png',
                name:'platinum',
                desc:'A true Wolf of Wall Street: 10 transactions in the round. Well-earned PLATINUM award!'
            },
            
            20: {
                img:'https://cdn3.iconfinder.com/data/icons/start-up-4/44/money_bag-512.png',
                name:'diamond',
                desc:'Hall of Fame Trader: 20 trades and the DIAMOND award, this is the peak!'
            },
        }
    },
    ...window.gameParams,
}

 
export default gameParams
