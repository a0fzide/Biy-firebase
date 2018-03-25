import { users } from './users';
// import { bands } from './bands';

export class Show {
    constructor (
        public id?: number,
        public venue?: {},
        public title?: string,
        public creator?: {},
        public admins?: {},
        public bill?: {},
        public replies?: {},
        public starttime?: string,
        public comments?: {},
    ) {}
}


const shows: Show[] = [
    {
        id: 1,
        title: 'Indisposed, Ikaray, Greet Death @ TCC',
        venue: { spacename: 'TCC', host: users[4] },
        creator: users[1],
        admins: [users[1], users[3]],
        bill: [{ bandname: 'Indisposed' }, { bandname: 'Ikaray' }, { bandname: 'Greet Death' }],
        starttime: new Date('2017-11-07 18:30').toLocaleString([],
        {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}),
        comments: [
                    {
                    author: users[0],
                    content: 'Gonna be lit',
                    created_at: new Date('2017-11-08 12:30').toLocaleString(),
                    replies: [
                        { author: users[1],
                            content: '*flames of hell*',
                            created_at: new Date('2017-11-08 12:32').toLocaleString(),
                        }
                                ],
                    },

                    {
                        author: users[9],
                        content: 'Anyone have a kit I can borrow??asdasdjkhjasdhjkahskjdhjkahsjkdngajhsjha idasghgsahdhjasjhgdhgjjaghsjghd ashdgjhasdghjgahjsdjhgajghsdjgh asdhgjahjghsdjhg',
                        created_at: new Date('2017-11-08 14:30').toLocaleString(),
                        replies:
                        [
                            { author: users[8],
                            content: 'Yeah I Guess',
                            created_at: new Date('2017-11-08 15:32').toLocaleString()
                            },
                        ]
                    }
                ]

    },

    {
        id: 2,
        title: 'SillyHAHA w/ Mover Shaker, Seasons, & JokesOnYou @ Gnarnia',
        venue: { spacename: 'Gnarnia', host: users[4] },
        creator: users[0],
        admins: [users[3], users[2]],
        bill: [{ bandname: 'SillyHAHA' }, { bandname: 'Mover Shaker' }, { bandname: 'JokesOnYou' }],
        starttime: new Date('2018-01-20 18:30').toLocaleString([],
        {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}),
        comments: [
                    { author: users[4],
                    content: 'About Time',
                    created_at: new Date('2018-01-22 18:30').toLocaleString(),
                    replies: [
                        { author: users[3],
                            content: '*flames of hell*',
                            created_at: new Date('2017-11-08 12:32').toLocaleString(),
                        },
                                ],
                    },

                    {
                        author: users[8],
                        content: 'Anyone have cab I can borrow??',
                        created_at: new Date('2017-11-08 14:30').toLocaleString(),
                        replies:
                        [
                            { author: users[4],
                            content: 'NO',
                            created_at: new Date('2017-11-08 15:32').toLocaleString()
                            },
                        ]
                    }
                ]

    },
];

export { shows };




