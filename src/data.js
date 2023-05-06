import ali from './assets/images/avatar-ali.png'
import anisha from './assets/images/avatar-anisha.png'
import richard from './assets/images/avatar-richard.png'
import shanai from './assets/images/avatar-shanai.png'

const data = {
    1: {
        number: '01',
        title: 'Track company-wide progress',
        details: `See how your day to day tasks fit into the wider 
                  Go from tracking progress at the milestone level 
                  all the way down to the smallest of details. Never
                  lose sight of the bigger picture again`
    },
    2: {
        number: '02',
        title: 'Advanced built-in reports',
        details: `Set internal delivery estimates and track progress 
                  towards company goals. Out customisable dashboard 
                  helps you build out the report you need to keep key
                  stakeholders informed`
    },
    3: {
        number: '03',
        title: 'Everything you need in one place',
        details: `Stop jumping from one service to another to communicate
                  store files, track tasks and share documents. Manage 
                  offers an all in one team productivity solution.`
    }
}

export const people = [
    {
        fullName: 'Anish Ali',
        imgUrl: anisha,
        quote: 
        `Manage has supercharged our team workflow.
         They maintain visibillity at all times and
         keeps everyone motivated.`
    },
    {
        fullName: 'Ali Bravo',
        imgUrl: ali,
        quote: 
        `We have been able to cancel so many other
        subscription since using manage. There is no
        more cross channel and everyone is much more focused.`
    },
    {
        fullName: 'Richard Watt',
        imgUrl: richard,
        quote: 
        `Manage allows us to keep structure keeps us organized 
        and focused. I can't stop recommending them to everyone
        i talk to.`
    },
    {
        fullName: 'Shanai Gough',
        imgUrl: shanai,
        quote: 
        `Their software allows us to track, manage and collaborate out projects from anywhere.
        It keeps the whole team in sync without being instructive.`
    }
]

export default data