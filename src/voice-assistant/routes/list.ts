import navMenuList from "../../pages/profile/left-panel/nav-menu/list";
import {headerList} from "../../components/layout/header/list";

export const allRoutes = (userId: string | undefined, currentUserId: string | undefined) => {
    return [
        ...navMenuList(userId, currentUserId),
        ...headerList(currentUserId)
    ]
}