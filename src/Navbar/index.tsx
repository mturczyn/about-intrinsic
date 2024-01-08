import './Navbar.css'
import { appRoutes } from 'AppRouter/routesDefinition'

export const Navbar = () => {
    return (
        <nav>
            {appRoutes.map((i) => (
                <a href={i.path}>{i.name}</a>
            ))}
        </nav>
    )
}
