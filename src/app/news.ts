import { users, User } from './users';
import { shows, Show } from './shows';
// import { news_comments, message_comments, show_comments, venue_comments Comment } from './users';
import { DatePipe } from '@angular/common';
// import { venues, Venue } from './venues';

export class News {
    constructor (
    public id?: number,
    public author?: User,
    public title?: string,
    public cover_photo?: string,
    public content?: string,
    public likes?: number,
    public comments?: [{Comment}],
    public created_at?: string,
    ) {}
}

const articles: News[] = [
    {
        id: 0,
    author: { username: 'ninap41'},
    title: 'Friendship Fortress Shuts Down After 10 year Run',
    cover_photo: '/assets/static/venues/Swerp_Mansion.jpg',
    content: "       Normcore sriracha biodiesel you probably haven't heard of them. Listicle +1 blog, marfa poutine put a bird on it knausgaard chambray gluten-free man bun messenger bag jianbing hexagon. Jianbing stumptown live-edge 3 wolf moon polaroid blog helvetica selfies la croix fam trust fund prism kale chips. Celiac microdosing art party hoodie. IPhone fam microdosing bespoke knausgaard, shaman coloring book tumblr marfa slow-carb normcore. Tattooed everyday carry viral, marfa craft beer taxidermy freegan hell of roof party unicorn actually. Asymmetrical lyft literally truffaut shoreditch. Lumbersexual offal kickstarter literally jean shorts gentrify, shaman snackwave pork belly. Umami messenger bag literally microdosing hella yr authentic. Bitters cold-pressed selfies, enamel pin quinoa you probably haven't heard of them echo park tumblr etsy heirloom beard put a bird on it literally. Celiac shaman direct trade ramps air plant drinking vinegar. Selvage snackwave XOXO woke. Swag meditation 8-bit, knausgaard la croix try-hard crucifix jean shorts iceland chillwave ramps hashtag pinterest pop-up. PBR&B narwhal before they sold out intelligentsia chillwave vape air plant. Schlitz migas hoodie, literally marfa master cleanse etsy kombucha austin cliche everyday carry. Meh bitters seitan snackwave. Copper mug pinterest skateboard flexitarian. Kogi kickstarter art party banh mi. Activated charcoal gentrify keffiyeh authentic fixie chambray iceland pok pok cornhole whatever. Vegan brunch vape pork belly gastropub YOLO cloud bread literally austin chicharrones. Drinking vinegar hell of wayfarers, cray food truck raw denim disrupt waistcoat locavore adaptogen occupy kombucha ugh. Street art pickled cray chillwave pabst post-ironic blue bottle hoodie VHS sartorial vinyl literally lo-fi scenester. Marfa leggings blue bottle, portland vegan post-ironic scenester edison bulb. Gochujang master cleanse banjo, offal iceland food truck tousled celiac. Copper mug tote bag poke normcore gochujang af. Woke air plant butcher polaroid gluten-free pork belly tattooed. Deep v tumblr umami letterpress jianbing bushwick franzen kale chips chambray cred kombucha. Oh. You need a little dummy text for your mockup? How quaint. I bet you’re still using Bootstrap too…,likes: 100",
    likes: 100,
    // comments: [{ content: "Ugh this sucks"}],
   created_at: new Date('2017-12-07 14:30').toLocaleString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}),
    },
    {
        id: 1,
    author: { username: 'betray6925'},
    title: 'HabitsDie Is Proof That Post-Hardcore Is Alive & Well',
    cover_photo: '/assets/static/venues/AuntEarnie.jpg',
    content: " Normcore sriracha biodiesel you probably haven't heard of them. Listicle +1 blog, marfa poutine put a bird on it knausgaard chambray gluten-free man bun messenger bag jianbing hexagon. Jianbing stumptown live-edge 3 wolf moon polaroid blog helvetica selfies la croix fam trust fund prism kale chips. Celiac microdosing art party hoodie. IPhone fam microdosing bespoke knausgaard, shaman coloring book tumblr marfa slow-carb normcore. Tattooed everyday carry viral, marfa craft beer taxidermy freegan hell of roof party unicorn actually. Asymmetrical lyft literally truffaut shoreditch. Lumbersexual offal kickstarter literally jean shorts gentrify, shaman snackwave pork belly. Umami messenger bag literally microdosing hella yr authentic. Bitters cold-pressed selfies, enamel pin quinoa you probably haven't heard of them echo park tumblr etsy heirloom beard put a bird on it literally. Celiac shaman direct trade ramps air plant drinking vinegar. Selvage snackwave XOXO woke. Swag meditation 8-bit, knausgaard la croix try-hard crucifix jean shorts iceland chillwave ramps hashtag pinterest pop-up. PBR&B narwhal before they sold out intelligentsia chillwave vape air plant. Schlitz migas hoodie, literally marfa master cleanse etsy kombucha austin cliche everyday carry. Meh bitters seitan snackwave. Copper mug pinterest skateboard flexitarian. Kogi kickstarter art party banh mi. Activated charcoal gentrify keffiyeh authentic fixie chambray iceland pok pok cornhole whatever. Vegan brunch vape pork belly gastropub YOLO cloud bread literally austin chicharrones. Drinking vinegar hell of wayfarers, cray food truck raw denim disrupt waistcoat locavore adaptogen occupy kombucha ugh. Street art pickled cray chillwave pabst post-ironic blue bottle hoodie VHS sartorial vinyl literally lo-fi scenester. Marfa leggings blue bottle, portland vegan post-ironic scenester edison bulb. Gochujang master cleanse banjo, offal iceland food truck tousled celiac. Copper mug tote bag poke normcore gochujang af. Woke air plant butcher polaroid gluten-free pork belly tattooed. Deep v tumblr umami letterpress jianbing bushwick franzen kale chips chambray cred kombucha. Oh. You need a little dummy text for your mockup? How quaint. I bet you’re still using Bootstrap too…,likes: 100",
    // comments: [{ content: "Ugh this sucks"}],
    created_at: new Date('2018-03-21 5:38').toLocaleString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}),
    },
    {
        id: 2,
    author: { username: 'ryoung1991'},
    title: "Emo-tive-ational New Year For Emo Legends 'Seasons'",
    cover_photo: '/assets/static/chopshop.jpeg',
    content: " Normcore sriracha biodiesel you probably haven't heard of them. Listicle +1 blog, marfa poutine put a bird on it knausgaard chambray gluten-free man bun messenger bag jianbing hexagon. Jianbing stumptown live-edge 3 wolf moon polaroid blog helvetica selfies la croix fam trust fund prism kale chips. Celiac microdosing art party hoodie. IPhone fam microdosing bespoke knausgaard, shaman coloring book tumblr marfa slow-carb normcore. Tattooed everyday carry viral, marfa craft beer taxidermy freegan hell of roof party unicorn actually. Asymmetrical lyft literally truffaut shoreditch. Lumbersexual offal kickstarter literally jean shorts gentrify, shaman snackwave pork belly. Umami messenger bag literally microdosing hella yr authentic. Bitters cold-pressed selfies, enamel pin quinoa you probably haven't heard of them echo park tumblr etsy heirloom beard put a bird on it literally. Celiac shaman direct trade ramps air plant drinking vinegar. Selvage snackwave XOXO woke. Swag meditation 8-bit, knausgaard la croix try-hard crucifix jean shorts iceland chillwave ramps hashtag pinterest pop-up. PBR&B narwhal before they sold out intelligentsia chillwave vape air plant. Schlitz migas hoodie, literally marfa master cleanse etsy kombucha austin cliche everyday carry. Meh bitters seitan snackwave. Copper mug pinterest skateboard flexitarian. Kogi kickstarter art party banh mi. Activated charcoal gentrify keffiyeh authentic fixie chambray iceland pok pok cornhole whatever. Vegan brunch vape pork belly gastropub YOLO cloud bread literally austin chicharrones. Drinking vinegar hell of wayfarers, cray food truck raw denim disrupt waistcoat locavore adaptogen occupy kombucha ugh. Street art pickled cray chillwave pabst post-ironic blue bottle hoodie VHS sartorial vinyl literally lo-fi scenester. Marfa leggings blue bottle, portland vegan post-ironic scenester edison bulb. Gochujang master cleanse banjo, offal iceland food truck tousled celiac. Copper mug tote bag poke normcore gochujang af. Woke air plant butcher polaroid gluten-free pork belly tattooed. Deep v tumblr umami letterpress jianbing bushwick franzen kale chips chambray cred kombucha. Oh. You need a little dummy text for your mockup? How quaint. I bet you’re still using Bootstrap too…,likes: 100",
    // comments: [{ content: "Ugh this sucks"}],
    created_at: new Date('2018-01-02 10:38').toLocaleString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}),

    },
    {
        id: 3,
    author: { username: 'a_tree_sessions'},
    title: "New DIY: Emerging Midwest Residential Spaces",
    cover_photo: '/assets/static/venues/house-show2_9ZYX8bI.jpg',
    content: " Normcore sriracha biodiesel you probably haven't heard of them. Listicle +1 blog, marfa poutine put a bird on it knausgaard chambray gluten-free man bun messenger bag jianbing hexagon. Jianbing stumptown live-edge 3 wolf moon polaroid blog helvetica selfies la croix fam trust fund prism kale chips. Celiac microdosing art party hoodie. IPhone fam microdosing bespoke knausgaard, shaman coloring book tumblr marfa slow-carb normcore. Tattooed everyday carry viral, marfa craft beer taxidermy freegan hell of roof party unicorn actually. Asymmetrical lyft literally truffaut shoreditch. Lumbersexual offal kickstarter literally jean shorts gentrify, shaman snackwave pork belly. Umami messenger bag literally microdosing hella yr authentic. Bitters cold-pressed selfies, enamel pin quinoa you probably haven't heard of them echo park tumblr etsy heirloom beard put a bird on it literally. Celiac shaman direct trade ramps air plant drinking vinegar. Selvage snackwave XOXO woke. Swag meditation 8-bit, knausgaard la croix try-hard crucifix jean shorts iceland chillwave ramps hashtag pinterest pop-up. PBR&B narwhal before they sold out intelligentsia chillwave vape air plant. Schlitz migas hoodie, literally marfa master cleanse etsy kombucha austin cliche everyday carry. Meh bitters seitan snackwave. Copper mug pinterest skateboard flexitarian. Kogi kickstarter art party banh mi. Activated charcoal gentrify keffiyeh authentic fixie chambray iceland pok pok cornhole whatever. Vegan brunch vape pork belly gastropub YOLO cloud bread literally austin chicharrones. Drinking vinegar hell of wayfarers, cray food truck raw denim disrupt waistcoat locavore adaptogen occupy kombucha ugh. Street art pickled cray chillwave pabst post-ironic blue bottle hoodie VHS sartorial vinyl literally lo-fi scenester. Marfa leggings blue bottle, portland vegan post-ironic scenester edison bulb. Gochujang master cleanse banjo, offal iceland food truck tousled celiac. Copper mug tote bag poke normcore gochujang af. Woke air plant butcher polaroid gluten-free pork belly tattooed. Deep v tumblr umami letterpress jianbing bushwick franzen kale chips chambray cred kombucha. Oh. You need a little dummy text for your mockup? How quaint. I bet you’re still using Bootstrap too…,likes: 100",
    // comments: [{ content: "Ugh this sucks"}],
    created_at: new Date('2017-10-28 18:45').toLocaleString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}),
    },
];

export { articles };
