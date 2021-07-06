// TODO: we get these objects from server when we go production
// gameParams is something that is un-updatable from server. 
// while lastKnownState is just a current state mutable in a store, store uses it as an initial state
import _ from 'lodash'
const gameParams = {

    priceUrl: 'https://uppsi22mf2.execute-api.us-east-1.amazonaws.com/Prod/price/',
    dayLength: 600,
    SEC: 1000,
    tickFrequency: 3,
    numTicks: 30,
    endowment: 0,
    awards: {
        time: {
            30: {
                img: 'https://cdn3.iconfinder.com/data/icons/cyber-monday-astute-vol-1-1/512/Early_Start-512.png',
                name: 'bronze',
                brief:'Bronze: 20 seconds on the trading platform',
                desc: 'Bronze trophy: You have spent 20 seconds on the trading platform!'
            },
            60: {
                img: 'https://cdn1.iconfinder.com/data/icons/scenarium-vol-9/128/001_award_cup_winner_silver-512.png',
                name: 'silver',
                brief:'Silver: 1 minute on the trading platform',
                desc: 'Hooray, you received a Silver trophy for spending one minute on the trade page'
            },
            120: {
                img: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Gold-Cart-512.png',
                name: 'gold',
                brief:'Gold: 2 minutes on the trading platform!',
                desc: 'Amazing! You are Golden: 2 minutes on the trade platform!'
            },
            150: {
                img: 'https://cdn4.iconfinder.com/data/icons/banking-and-finance/500/diamond-256.png',
                name: 'platinum',
                brief:'Platinum: more than half the round time trading!',
                desc: 'You are a PLATINUM trader: you spent more than half the round time trading!'
            },
            210: {
                img: 'https://cdn2.iconfinder.com/data/icons/free-version/128/almaz-512.png',
                name: 'diamond',
                brief:'Diamond: Peak achievement!',
                desc: 'Congratulations!! Peak achievement: You are a DIAMOND trader!'
            },
        },
        nums: {
            1: {
                img: 'https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Son-512.png',
                name: 'bronze',
                brief: 'Bronze Award: your first transaction',
                desc: 'You received a Bronze Award: your first transaction. Congrats!'
            },
            3: {
                img: 'https://cdn0.iconfinder.com/data/icons/people-137/513/teenager-512.png',
                name: 'silver',
                brief: 'Silver Award: 3 transactions',
                desc: 'You are getting the hang of it: 3 transactions and a Silver Award.'
            },
            5: {
                img: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Boss-2-256.png',
                name: 'gold',
                brief: 'Gold statusAward: Five transactions',
                desc: 'Incredible! Five transactions -- you deserve GOLD status!'
            },

            10: {
                img: 'https://cdn4.iconfinder.com/data/icons/emoji-66/64/34-rich-256.png',
                name: 'platinum',
                brief: 'Wolf of Wall Street: 10 transactions!',
                desc: 'A true Wolf of Wall Street: 10 transactions in the round. Well-earned PLATINUM award!'
            },

            20: {
                img: 'https://cdn3.iconfinder.com/data/icons/start-up-4/44/money_bag-512.png',
                name: 'diamond',
                brief: 'Hall of Fame Trader: 20 trades!',
                desc: 'Hall of Fame Trader: 20 trades and the DIAMOND award, this is the peak!'
            },
        }
    },
    ...window.gameParams,
}


export const listAwards = (() => {
    const lAs = []
    _.forOwn(gameParams.awards, function (value, key) {
        _.forOwn(value, function (v, k) {
            v['id']=`${key}-${k}`
            lAs.push(v)
        })
    });
    
    return lAs
})()

export default gameParams
