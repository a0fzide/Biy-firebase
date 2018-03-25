import { users, User } from './users';
import { shows, Show } from './shows';

export class Venue {
    constructor (
    public id?: number,
    public space_name?: string,
    public description?: string,
    public pic?: string,
    public host?: User,
    public capacity?: number,
    public overnight?: boolean,
    public host_email?: string,
    public upcoming_shows?: [{Show}, {Show}],
    public bands_following?: {},
    public new_shows?: {},
    public news_mentions?: {},
    public other_details?: string,
    public street_address?: string,
    public city?: string,
    public zipcode?: string,
    public likes?: number,
    ) {}
}
const venues: Venue[] = [
    {
    id: 0,
    space_name: 'TCC',
    description: "Please donate and respect my effing space. I'm getting too old for this.",
    pic: '/assets/static/venues/house-show2.jpg',
    host: users[4],
    capacity: 150,
    overnight: true,
    host_email: users[4].email,
    new_shows: {},
    news_mentions: {},
    other_details: 'We have a Pa and a bass cab up for grabs',
    street_address: '555 n diversey st',
    city: 'Chicago',
    zipcode: '60654',
    likes: 24,
    },
    {
        id: 1,
        space_name: 'Gnarnia',
        description: "Where the cool kiddos go. Please don't puke in my bedroom again.",
        pic: '/assets/static/venues/Gnarnia.jpg',
        host: users[0],
        capacity: 100,
        overnight: false,
        host_email: users[0].email,
        new_shows: {},
        news_mentions: {},
        other_details: 'Dry Zone everybody, dont forget to tell your friends',
        street_address: '234 e california st',
        city: 'Chicago',
        zipcode: '60654',
        likes: 130,
        }
];
export { venues };
