const NavigationSidebar = () => {
    return(`

        <div class="list-group mb-2">

          <a href="/public/tuiter/home.html" class="list-group-item list-group-item-action">
            <div class="row justify-content-start align-items-center">
              <div class="col-3">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="col">
                <div class="d-none d-xl-block"></div>
              </div>
            </div>
          </a>

          <a href="/public/tuiter/home.html" class="list-group-item list-group-item-action">
            <div class="row justify-content-start align-items-center">
              <div class="col-3">
                <i class="fas fa-home"></i>
              </div>
              <div class="col">
                <div class="d-none d-xl-block">Home</div>
              </div>
            </div>
          </a>

          <a href="index.html" class="list-group-item list-group-item-action active">
            <div class="row justify-content-start align-items-center">
              <div class="col-3">
                <i class="fas fa-hashtag"></i>
              </div>
              <div class="col">
                <div class="d-none d-xl-block">Explore</div>
              </div>
            </div>
          </a>

          <a href="" class="list-group-item list-group-item-action">
            <div class="row justify-content-start align-items-center">
              <div class="col-3">
                <i class="fas fa-bell"></i>
              </div>
              <div class="col">
                <div class="d-none d-xl-block">Notifications</div>
              </div>
            </div>
          </a>

          <a href="" class="list-group-item list-group-item-action">
            <div class="row justify-content-start align-items-center">
              <div class="col-3">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="col">
                <div class="d-none d-xl-block">Messages</div>
              </div>
            </div>
          </a>

          <a href="" class="list-group-item list-group-item-action">
            <div class="row justify-content-start align-items-center">
              <div class="col-3">
                <i class="fas fa-bookmark"></i>
              </div>
              <div class="col">
                <div class="d-none d-xl-block">Bookmarks</div>
              </div>
            </div>
          </a>

          <a href="" class="list-group-item list-group-item-action">
            <div class="row justify-content-start align-items-center">
              <div class="col-3">
                <i class="fas fa-list"></i>
              </div>
              <div class="col">
                <div class="d-none d-xl-block">Lists</div>
              </div>
            </div>
          </a>

          <a href="/public/tuiter/profile.html" class="list-group-item list-group-item-action">
            <div class="row justify-content-start align-items-center">
              <div class="col-3">
                <i class="fas fa-user"></i>
              </div>
              <div class="col">
                <div class="d-none d-xl-block">Profile</div>
              </div>
            </div>
          </a>

          <a href="" class="list-group-item list-group-item-action">
            <div class="row justify-content-start align-items-center">
              <div class="col-3">
                <span class="fa-stack wd-fa-half">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>
              </div>
              <div class="col">
                <div class="d-none d-xl-block">More</div>
              </div>
            </div>
          </a>
      
        </div>

      <div class="d-grid">
        <a href="tuit.html" class="btn btn-primary btn-block rounded-pill">
          Tuit
        </a>
      </div>
 `);
}

export default NavigationSidebar;
