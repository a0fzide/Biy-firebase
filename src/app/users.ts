import { EmailValidator } from '@angular/forms';
// import { bands, Band } from './bands';
// import { activities, ActivityList} from './usersActivity';
export class User {
    constructor (
    public id?: number,
    public email?: string,
    public first_name?: string,
    public last_name?: string,
    public full_name?: string,
    public profile_pic?: string,
    public username?: string,
    public password?: string,
    public bio?: string,
    public city?: string,
    public state_province?: string,
    public website?: 'http://',
    public bands_following?: {},
    public listening_to?: {},
    public followers?: [{User}],
    public band?: {},
    public venue?: {},
    // public activitylist?: ActivityList
    ) {}
}




// export class Comment {
//     constructor (

//     ) {}
// }
// export class DirectMessage {
//     constructor (

//     ) {}
// }


const users: User[] = [
 {
   id: 0,
   first_name: 'Alexa',
   last_name: 'Davies',
   full_name: this.first_name + ' ' + this.last_name,
   username: 'davies_jam23',
   password: 'billiebob3',
   profile_pic: '/assets/static/Dummy-Pic.jpg',
   city: 'Chicago',
   state_province: 'IL',
   listening_to: [{ bandname: 'Guts2Glory' }, { bandname: 'Alesana' }, { bandname: 'Real Friends' },  { bandname: 'Mordern Baseball' } ],
   bio: 'Lorem ipsum dolor amet letterpress mumblecore neutra raclette, tumeric taiyaki yuccie copper mug brooklyn cray man bun tumblr truffaut godard. Occupy vaporware live-edge, crucifix art party vape normcore pop-up food truck chia craft beer gluten-free copper mug palo santo small batch. Keffiyeh echo park drinking vinegar, tumblr master cleanse put a bird on it taxidermy banh mi. Green juice whatever taxidermy, chia copper mug YOLO aesthetic church-key health goth.',
   email: 'alexadavies@gmail.com',
  //  activitylist: activities[0]
 },
 {
    id: 1,
    first_name: 'Rebecca',
   last_name: 'Young',
   username: 'ryoung1992',
   password: 'billiebob3',
   profile_pic: '/assets/static/Dummy-Pic.jpg',
   city: 'Chicago',
   state_province: 'IL',
   bands_following: [], // will get circular reference error
   listening_to: [ { bandname: 'You.Folk' }, { bandname: 'Suis La Lune' },  { bandname: 'Birds In Row' } ],
   bio: 'Lorem ipsum dolor amet letterpress mumblecore neutra raclette, tumeric taiyaki yuccie copper mug brooklyn cray man bun tumblr truffaut godard. Occupy vaporware live-edge, crucifix art party vape normcore pop-up food truck chia craft beer gluten-free copper mug palo santo small batch. Keffiyeh echo park drinking vinegar, tumblr master cleanse put a bird on it taxidermy banh mi. Green juice whatever taxidermy, chia copper mug YOLO aesthetic church-key health goth.',
   email: 'ryoung1992@gmail.com',
 
  },
  {
    id: 2,
    first_name: 'Noah',
   last_name: 'Therman',
   full_name: this.first_name + ' ' + this.last_name,

   username: 'merrychristmasYAfilthyanimal',
   password: 'billiebob3',
   profile_pic: '/assets/static/Dummy-Pic.jpg',
   city: 'Chicago',
   state_province: 'IL',
   bands_following: [{ bandname: 'Dandy Warhols' }, { bandname: 'Listener' }, { bandname: 'Crushes' },  { bandname: 'Old Grey' } ],
   listening_to: [{ bandname: 'Dandy Warhols' }, { bandname: 'Listener' }, { bandname: 'Crushes' },  { bandname: 'Old Grey' } ],
   bio: 'Lorem ipsum dolor amet letterpress mumblecore neutra raclette, tumeric taiyaki yuccie copper mug brooklyn cray man bun tumblr truffaut godard. Occupy vaporware live-edge, crucifix art party vape normcore pop-up food truck chia craft beer gluten-free copper mug palo santo small batch. Keffiyeh echo park drinking vinegar, tumblr master cleanse put a bird on it taxidermy banh mi. Green juice whatever taxidermy, chia copper mug YOLO aesthetic church-key health goth.',
   email: 'noahtherman@gmail.com',
  },
  {
    id: 3,
    first_name: 'Ian',
    last_name: 'MacKaye',
    username: 'betray6935',
    password: 'billiebob3',
    profile_pic: '/assets/static/Dummy-Pic.jpg',
    city: 'Washington DC',
    state_province: 'VA',
    bands_following: [],
    listening_to: [{ bandname: 'Minor Threat' }, { bandname: 'Squirrel Bait' }, { bandname: 'Danzig' },  { bandname: 'Fugazi' } ],
    bio: 'Lorem ipsum dolor amet letterpress mumblecore neutra raclette, tumeric taiyaki yuccie copper mug brooklyn cray man bun tumblr truffaut godard. Occupy vaporware live-edge, crucifix art party vape normcore pop-up food truck chia craft beer gluten-free copper mug palo santo small batch. Keffiyeh echo park drinking vinegar, tumblr master cleanse put a bird on it taxidermy banh mi. Green juice whatever taxidermy, chia copper mug YOLO aesthetic church-key health goth.',
    email: 'ianmackaye@gmail.com',
  },
  {
    id: 4,
    first_name: 'James',
    last_name: 'Jambroni',
    full_name: this.first_name + ' ' + this.last_name,
    username: 'jimmybroniboy33',
    password: 'billiebob3',
    profile_pic: '/assets/static/Dummy-Pic.jpg',
    city: 'Chicago',
    state_province: 'IL',
    bands_following: [],
    listening_to: [{ bandname: 'Ikaray' }, { bandname: 'Bell Witch' }, { bandname: 'Portraits of Past' },  { bandname: 'Converge' } ],
    bio: 'Lorem ipsum dolor amet letterpress mumblecore neutra raclette, tumeric taiyaki yuccie copper mug brooklyn cray man bun tumblr truffaut godard. Occupy vaporware live-edge, crucifix art party vape normcore pop-up food truck chia craft beer gluten-free copper mug palo santo small batch. Keffiyeh echo park drinking vinegar, tumblr master cleanse put a bird on it taxidermy banh mi. Green juice whatever taxidermy, chia copper mug YOLO aesthetic church-key health goth.',
    email: 'ninapalumbo@gmail.com',
  },
  {
    id: 5,
    first_name: 'Louis',
   last_name: 'Rodan',
   full_name: this.first_name + ' ' + this.last_name,
   username: 'louiepunk44',
   password: 'billiebob3',
   profile_pic: '/assets/static/Dummy-Pic.jpg',
   city: 'Louisville',
   state_province: 'KY',
   bands_following: [],
   listening_to: [{ bandname: 'Shipping News' }, { bandname: 'Rodan' }, { bandname: 'Slint' },  { bandname: 'Cat Power' } ],
   bio: 'Lorem ipsum dolor amet letterpress mumblecore neutra raclette, tumeric taiyaki yuccie copper mug brooklyn cray man bun tumblr truffaut godard. Occupy vaporware live-edge, crucifix art party vape normcore pop-up food truck chia craft beer gluten-free copper mug palo santo small batch. Keffiyeh echo park drinking vinegar, tumblr master cleanse put a bird on it taxidermy banh mi. Green juice whatever taxidermy, chia copper mug YOLO aesthetic church-key health goth.',
   email: 'rodanman@gmail.com',
  },
  {
    id: 6,
    first_name: 'Tiny',
   last_name: 'Tim',
   full_name: this.first_name + ' ' + this.last_name,
   username: 'themeadows22',
   password: 'billiebob3',
   profile_pic: '/assets/static/Dummy-Pic.jpg',
   city: 'Seattle',
   state_province: 'WA',
   bands_following: [],
   listening_to: [{ bandname: 'Touche Amore' }, { bandname: 'Sunrise Skater Kids' }, { bandname: 'Prince Daddy & The Hyena' },  { bandname: 'Oceans' } ],
   bio: 'Lorem ipsum dolor amet letterpress mumblecore neutra raclette, tumeric taiyaki yuccie copper mug brooklyn cray man bun tumblr truffaut godard. Occupy vaporware live-edge, crucifix art party vape normcore pop-up food truck chia craft beer gluten-free copper mug palo santo small batch. Keffiyeh echo park drinking vinegar, tumblr master cleanse put a bird on it taxidermy banh mi. Green juice whatever taxidermy, chia copper mug YOLO aesthetic church-key health goth.',
   email: 'tinytim@gmail.com',
  },
  {
    id: 7,
    first_name: 'Elliott',
   last_name: 'Smith',
   full_name: this.first_name + ' ' + this.last_name,
   username: 'needleintheHEY',
   password: 'billiebob3',
   profile_pic: '/assets/static/Dummy-Pic.jpg',
   city: 'Austin',
   state_province: 'TX',
   bands_following: [],
   listening_to: [{ bandname: 'Bob Dylan' }, { bandname: 'Heatmiser' }, { bandname: 'Hop Along' },  { bandname: 'Jose Gonzalez' } ],
   bio: 'Lorem ipsum dolor amet letterpress mumblecore neutra raclette, tumeric taiyaki yuccie copper mug brooklyn cray man bun tumblr truffaut godard. Occupy vaporware live-edge, crucifix art party vape normcore pop-up food truck chia craft beer gluten-free copper mug palo santo small batch. Keffiyeh echo park drinking vinegar, tumblr master cleanse put a bird on it taxidermy banh mi. Green juice whatever taxidermy, chia copper mug YOLO aesthetic church-key health goth.',
   email: 'elliottsmith@gmail.com',
  },
  {
    id: 8,
    first_name: 'Doug',
   last_name: 'Jones',
   full_name: this.first_name + ' ' + this.last_name,
   username: 'thedoug',
   password: 'billiebob3',
   profile_pic: '/assets/static/Dummy-Pic.jpg',
   city: 'Chicago',
   state_province: 'IL',
   bands_following: [],
   listening_to: [{ bandname: 'Rosetta' }, { bandname: 'Rosetta' }, { bandname: 'Bless Me' },  { bandname: 'More Rosetta' } ],
   bio: 'Lorem ipsum dolor amet letterpress mumblecore neutra raclette, tumeric taiyaki yuccie copper mug brooklyn cray man bun tumblr truffaut godard. Occupy vaporware live-edge, crucifix art party vape normcore pop-up food truck chia craft beer gluten-free copper mug palo santo small batch. Keffiyeh echo park drinking vinegar, tumblr master cleanse put a bird on it taxidermy banh mi. Green juice whatever taxidermy, chia copper mug YOLO aesthetic church-key health goth.',
   email: 'illuminati_doug@gmail.com',
  },
  {
        id: 9,
        first_name: 'Daniel',
        last_name: 'Saller',
        full_name: this.first_name + ' ' + this.last_name,
        username: 'DamnielSal666',
        password: 'billiebob3',
        profile_pic: '/assets/static/Dummy-Pic.jpg',
        city: 'Chicago',
        state_province: 'IL',
        bands_following: [],
        listening_to: [{ bandname: 'Bell Witch' }, { bandname: 'Via Fondo' }, { bandname: 'Suis La Lune' },  { bandname: 'Caution Children' } ],
        bio: 'Lorem ipsum dolor amet letterpress mumblecore neutra raclette, tumeric taiyaki yuccie copper mug brooklyn cray man bun tumblr truffaut godard. Occupy vaporware live-edge, crucifix art party vape normcore pop-up food truck chia craft beer gluten-free copper mug palo santo small batch. Keffiyeh echo park drinking vinegar, tumblr master cleanse put a bird on it taxidermy banh mi. Green juice whatever taxidermy, chia copper mug YOLO aesthetic church-key health goth.',
        email: 'dansal@gmail.com',
        },
];

export { users };
