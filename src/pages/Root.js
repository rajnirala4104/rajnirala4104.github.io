import { Outlet } from "react-router-dom"
import NavBar from "../shared/components/NavBar"

export const Root = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}
