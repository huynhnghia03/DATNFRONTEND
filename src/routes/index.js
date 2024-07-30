//layout
import { WithouSidebar, JustContent } from "../layouts";
import ConfigRoutes from '../config/routes'
import {
    Home,
    Learning,
    Profile,
    Contact,
    PathLearning,
    Study,
    Setting,
    ManageCourses,
    ManageUsers,
    Login,
    Register,
    OverBoarding,
    SettingNotification,
    BackEnd,
    FrontEnd,
    PEnglish,
    MyOnwCourse,
    DetailCourses,
    ManageTopics,
    introduceTopics,

} from '../pages'
const publicRoutes = [
    { path: ConfigRoutes.root, component: Home },
    { path: ConfigRoutes.Learning, component: Learning, layout: JustContent },
    { path: ConfigRoutes.pathLearning, component: PathLearning },
    { path: ConfigRoutes.study, component: Study },
    { path: ConfigRoutes.introduceTopics, component: introduceTopics },
    { path: ConfigRoutes.Contact, component: Contact },
    { path: ConfigRoutes.BackEnd, component: BackEnd },
    { path: ConfigRoutes.FrontEnd, component: FrontEnd },
    { path: ConfigRoutes.English, component: PEnglish },
]
const privateRoutes = [

    { path: ConfigRoutes.profile, component: Profile, layout: WithouSidebar },
    { path: ConfigRoutes.setting, component: Setting, layout: WithouSidebar },
    { path: ConfigRoutes.Notification, component: SettingNotification, layout: WithouSidebar },
    { path: ConfigRoutes.manageCourses, component: ManageCourses, layout: JustContent },
    { path: ConfigRoutes.manageUsers, component: ManageUsers, layout: JustContent },
    { path: ConfigRoutes.OverBoarding, component: OverBoarding, layout: JustContent },
    { path: ConfigRoutes.MyOnwCourse, component: MyOnwCourse },
    { path: ConfigRoutes.DetailCourses, component: DetailCourses, layout: JustContent },
    { path: ConfigRoutes.ManageTopics, component: ManageTopics, layout: JustContent },

]
const authRoutes = [
    { path: ConfigRoutes.Login, component: Login, layout: JustContent },
    { path: ConfigRoutes.Register, component: Register, layout: JustContent },
]

export { publicRoutes, privateRoutes, authRoutes }