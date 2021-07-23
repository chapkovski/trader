// TODO: we get these objects from server when we go production
// gameParams is something that is un-updatable from server. 
// while lastKnownState is just a current state mutable in a store, store uses it as an initial state
import _ from 'lodash'
const gameParams = {
    priceUrl: 'https://uppsi22mf2.execute-api.us-east-1.amazonaws.com/Prod/price/',
    SEC: 1000,
    endowment: 0,
    awards: {
        
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
