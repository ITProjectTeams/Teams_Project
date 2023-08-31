import Home from "../Pages/Home"
import About from "../Pages/AboutUs"
import ServicesPg from "../Pages/ServicesPg"
import OurTeams from "../Components/OurTeams/OurTeams"
import Contact from "../Components/Contact/Contact"


export const ParamsArray = [
    {
        id: 0,
        path: "/",
        element: <Home />
    },
    {
        id: 1,
        path: "/aboutus/",
        element: <About/>
    },
    {
        id: 2,
        path: "/services/",
        element: <ServicesPg />
    },
    {
        id: 3,
        path: "/ourteams/",
        element: <OurTeams />
    },
    {
        id: 4,
        path: "/contact/",
        element: <Contact />
    }
]