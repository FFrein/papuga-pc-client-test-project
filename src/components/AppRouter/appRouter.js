import React from "react";
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes, adminRoutes, bannedRoutes } from "../../routes";
import { useContext } from 'react';
import { Context } from '../..';
import { Navigate } from 'react-router-dom';
import {observer} from 'mobx-react-lite'

function AppRouter() {
    const { store } = useContext(Context);

    return (
        <Routes>
            {/* Отображаем публичные маршруты всегда */}
                {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}

            {/* Отображаем защищенные маршруты, если пользователь авторизован */}
            {(store.isAuth && !store.user.banned) ? (
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))
            ) : (
                // Если пользователь не авторизован, перенаправляем на страницу авторизации
                <Route path="*" element={<Navigate to="/login" replace />} />
            )}

            {(store.isAuth && store.user.banned) ? (
                bannedRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))
            ) : null}

            {(store.user.banned) ? (
                    <Route path="*" element={<Navigate to="/ban" replace />} />
            ) : null}
            
            {(store.isAuth && store.user.role == "admin") ? (
                adminRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))
            ) : null}
        </Routes>
    );
}

export default observer(AppRouter);
