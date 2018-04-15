import { users, User } from './users';
import { shows, Show } from './shows';

// export class Band {
//     constructor (
//         public id?: number,
//         public bandname?: string,
//         public pic?: string,
//         public admin?: User,
//         public bio?: string,
//         public state?: string,
//         public website?: string,
//         public hometown?: string,
//         public likes?: number,
//         public members?: {},
//         public upcomingShows?: {},
//         public genres?: string[],

//     ) {}
// }
export interface Band {
    id?: string;
    bandname?: string;
    // file?: File;
    // fileprogress?: Number;
    // downloadURL?: String;
    pic?: string;
    admin?: string;
    adminID?: string;
    bio?: string;
    state?: string;
    website?: string;
    hometown?: string;
    likes?: number;
    members?: {};
    upcomingShows?: {};
    genres?: string[];
    created_at?: Date;
}

const bands: Band[] = [
    {
        id: '0',
        bandname: 'Indisposed',
        admin: users[1].full_name,
        bio: 'Skramz with post-rock. Here to revive the 90s.',
        website: 'indisposed.bandcamp.com',
        pic: '/assets/static/bands/indisposed photoshoot chosen 3.jpg',
        hometown: 'Chicago',
        state: 'IL',
        likes: 109,
        members : ['Rebecca Young', 'Nina Palumbo', 'Noah Therman', 'Dan Saller'],
        upcomingShows: [],
        genres: ['emo', 'screamo', 'skramz', 'post-hardcore', 'black-metal']
    },
    {
        id: '1',
        bandname: 'Seasons',
        admin: users[0].full_name,
        bio: 'Just a bunch of kids from Wilmette yelling our feelings',
        website: 'seasons.bandcamp.com',
        hometown: 'Chicago Suburbs',
        state: 'IL',
        pic: '/assets/static/bands/seasons.jpeg',
        likes: 523,
        members : ['Alexis Davies', 'Tom Higgins', 'Jerry Man', 'Doug Hogan'],
        upcomingShows: [],
        genres: ['emo', 'sad-boi', 'pop-emo', 'punk', 'twinkle-emo']
    },
    {
        id: '2',
        bandname: 'Ikaray',
        admin: users[9].full_name,
        bio: 'Post-Metal Doom from Chicago,IL',
        website: 'ikaraydoom.bandcamp.com',
        hometown: 'Chicago',
        state: 'IL',
        pic: '/assets/static/bands/ikaray.jpg',
        likes: 39,
        members : ['Jim Jambroki', 'Tyler Dude', 'Doug Jones', 'Dan Saller'],
        upcomingShows: [],
        genres: ['doom', 'post-metal', 'post-rock', 'sludge', 'black-metal']
    },
    {
        id: '3',
        bandname: 'HabitsDie',
        admin: users[9].full_name,
        bio: 'Straight Edge Chicago Hardcore',
        website: 'willtolive.bandcamp.com/album/old-habits-die-hard',
        pic: '/assets/static/bands/habitsdie.jpg',
        hometown: 'Chicago',
        state: 'IL',
        likes: 200,
        members : ['Jim Jambroni', 'Nina Palumbo', 'Noah Therman', 'Doug Jones'],
        upcomingShows: [],
        genres: ['hardcore', 'post-metal', 'power-violence', 'post-hardcore']
    },
    {
        id: '4',
        bandname: 'Crowning',
        admin: users[9].full_name,
        bio: 'Skramz influenced by emoviolence, existential dread, and elevator review videos.',
        website: 'crowningpool.bandcamp.com',
        pic: '/assets/static/bands/crowningpool.jpg',
        hometown: 'Chicago',
        state: 'IL',
        likes: 20,
        members : ['Myles Kerrigan', 'Vanessa Valadez', 'Jim Jambroni', 'Justin Orr'],
        upcomingShows: [],
        genres: ['hardcore', 'power-violence', 'emo-violence', 'post-hardcore']
    },
    {
        id: '5',
        bandname: 'Modern Kickball',
        admin: users[0].full_name,
        bio: 'No our name is completely original.',
        website: 'modernkickball.bandcamp.com',
        hometown: 'New Brunswick',
        state: 'NJ',
        pic: '/assets/static/bands/modernkickball.jpg',
        likes: 2,
        members : ['Jim', 'Jerry', 'Jeff', 'Geoff'],
        upcomingShows: [],
        genres: ['emo', 'sad-boi', 'pop-emo', 'punk', 'pop-punk']
    },
    {
        id: '6',
        bandname: 'Made Tough',
        admin: users[9].full_name,
        bio: 'We just grew up listening to this and Tims mom had a good basement to practice.',
        website: 'madetough.bandcamp.com',
        hometown: 'Indianapolis',
        state: 'IN',
        pic: '/assets/static/bands/MadeTough.jpg',
        likes: 39,
        members : ['Kevin', 'Tyler', 'Kyle', 'Tim'],
        upcomingShows: [],
        genres: ['metal-core', 'melodic-hardcore', 'black-metal']
    },
    {
        id: '8',
        bandname: 'Americant',
        admin: users[9].full_name,
        bio: 'But we can.',
        website: 'americant.bandcamp.com',
        pic: '/assets/static/bands/americant.jpg',
        hometown: 'Alsip',
        state: 'IL',
        likes: 1023,
        members : ['Jim', 'Fin', 'Tim', 'Gil'],
        upcomingShows: [],
        genres: ['pop-punk', 'twinkle-emo']
    },
    {
        id: '9',
        bandname: 'Mops',
        admin: users[9].full_name,
        bio: 'Post-rock from Toledo',
        website: 'mops.bandcamp.com',
        pic: '/assets/static/bands/mops.jpg',
        hometown: 'Toledo',
        state: 'OH',
        likes: 380,
        members : ['Kim Jordan', 'George', 'Ringo', 'Paul'],
        upcomingShows: [],
        genres: ['pop', 'post-rock']
    }
];

export {bands};
