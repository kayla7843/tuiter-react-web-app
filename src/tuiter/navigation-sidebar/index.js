import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <div className="list-group-item">
                <div className="row justify-content-start align-items-center">
                    <div className="col">
                        <div className="d-none d-xl-block"> Tuiter</div>
                    </div>
                </div>
            </div>


            <Link className={`list-group-item
                    ${active === 'home'?'active':''}`} to="/tuiter">
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-house-fill"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Home</div>
                    </div>
                </div>
            </Link>

            <Link className={`list-group-item
                    ${active === 'explore'?'active':''}`} to="/tuiter/explore">
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-hash"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Explore</div>
                    </div>
                </div>
            </Link>

            <Link className={`list-group-item
                    ${active === 'labs'?'active':''}`} to="/">
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-asterisk"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Labs</div>
                    </div>
                </div>
            </Link>

            <Link className={`list-group-item
                    ${active === 'notifications'?'active':''}`} to="#">
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-bell"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Notifications</div>
                    </div>
                </div>
            </Link>

            <Link className={`list-group-item
                    ${active === 'messages'?'active':''}`} to="#">
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Messages</div>
                    </div>
                </div>
            </Link>

            <Link className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} to="#">
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-bookmark"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Bookmarks</div>
                    </div>
                </div>
            </Link>

            <Link className={`list-group-item
                    ${active === 'lists'?'active':''}`} to="#">
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-list-ul"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Lists</div>
                    </div>
                </div>
            </Link>

            <Link className={`list-group-item
                    ${active === 'profile'?'active':''}`} to="#">
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-person"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Profile</div>
                    </div>
                </div>
            </Link>
            <Link className={`list-group-item
                    ${active === 'more'?'active':''}`} to="#">
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <i className="bi bi-three-dots"></i>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">More</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;