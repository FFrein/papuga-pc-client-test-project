import {LOGIN_ROUTE, PCCONFIGS_ROUTE, ADMIN_PANEL_ROUTE, COMPARE_ROUTE, CHAT_ROUTE, STORE_ROUTE, CURRENTPC_ROUTE, BANNED_ROUTE} from './utils/consts'
import PcStorePage from './pages/PcStore/pcStorePage'
import AuthFrom from './pages/Auth/auth'
import adminPanel from './pages/AdminPanel/adminPanel'
import ComponentsStore from './pages/ComponentsStore/store'
import Compare from './pages/Compare/ComparePage'
import Chat from './pages/Chat/chat'
import PcPage from './pages/pcPage/pcPage'
import BannedUser from './pages/BannedUser/bannedUser'

export const authRoutes = [
    {
        path: PCCONFIGS_ROUTE,
        Component: PcStorePage
    },
    {
        path: CURRENTPC_ROUTE,
        Component: PcPage
    },
    {
        path: COMPARE_ROUTE,
        Component: Compare
    },
    {
        path: CHAT_ROUTE,
        Component: Chat
    },
    {
        path: STORE_ROUTE,
        Component: ComponentsStore
    }
]

export const adminRoutes = [
    {
        path: ADMIN_PANEL_ROUTE,
        Component: adminPanel
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthFrom
    }
]

export const bannedRoutes = [
    {
        path: BANNED_ROUTE,
        Component: BannedUser
    }
]