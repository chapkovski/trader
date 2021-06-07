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
            5:{
                img:'https://cdn1.iconfinder.com/data/icons/web-design-18/50/86-512.png',
                name:'bronze',
                desc:'Hooray, you have got your first award for staying 5 secs on trade page'
            },
            10: {
                img:'https://cdn1.iconfinder.com/data/icons/scenarium-vol-9/128/001_award_cup_winner_silver-512.png',
                name:'silver',
                desc:'Hooray, you have got your first award for staying 10 secs on trade page'
            },
        },
        nums:{
            1: {
                img:'https://previews.123rf.com/images/pikepicture/pikepicture1807/pikepicture180700221/104970298-best-worker-employee-vector-european-woman-award-of-the-year-gold-wreath-leader-business-cartoon-ill.jpg',
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