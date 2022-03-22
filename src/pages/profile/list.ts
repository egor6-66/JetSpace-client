import AllLikes from "./right-panel/all-likes";
import AllDislikes from "./right-panel/all-dislikes";
import UserSubscriptions from "./right-panel/user-subscriptions";
import UserSubscribers from "./right-panel/user-subscribers";


const profileMenuItems = [
        {id: 0,name: 'AllLikes', component: AllLikes},
        {id: 1,name: 'AllDislikes', component: AllDislikes},
        {id: 2,name: 'UserSubscriptions', component: UserSubscriptions},
        {id: 3,name: 'UserSubscribers', component: UserSubscribers},
];

export default profileMenuItems;