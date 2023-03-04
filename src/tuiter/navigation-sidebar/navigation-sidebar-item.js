const NavigationSidebarItem = (
    icon, title) => {
    return (
        <div className="row justify-content-start align-items-center">
            <div className="col-3">
                <i className={icon}></i>
            </div>
            <div className="col">
                <div className="d-none d-xl-block">{title}</div>
            </div>
        </div>
    );
}
export default NavigationSidebarItem;
