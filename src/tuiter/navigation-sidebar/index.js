import React from "react";
import NavigationSidebarItem from "./navigation-sidebar-item";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        {NavigationSidebarItem("bi-twitter", "")}
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block"></div>
                    </div>
                </div>
            </a>


            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-house-fill"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Home</div>
                    </div>
                </div>
            </a>

            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-hash"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Explore</div>
                    </div>
                </div>
            </a>

            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-bell-fill"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Notifications</div>
                    </div>
                </div>
            </a>

            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Messages</div>
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-bookmark-fill"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Bookmarks</div>
                    </div>
                </div>
            </a>

            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-list-ul"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Lists</div>
                    </div>
                </div>
            </a>

            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Profile</div>
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-three-dots"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">More</div>
                    </div>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;