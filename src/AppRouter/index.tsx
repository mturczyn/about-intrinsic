import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { appRoutes } from 'AppRouter/routesDefinition'

export const AppRouter = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={children}>
                        {appRoutes.map((i) => (
                            <Route
                                key={i.path}
                                path={i.path}
                                element={i.element}
                            />
                        ))}
                    </Route>
                    <Route path="*" element={<Navigate to="/Home" replace />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
