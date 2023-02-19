import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="d-flex flex-row position-relative align-items-center justify-content-between mb-2">
          <div class="position-absolute ps-3">
            <i class="fas fa-search"></i>
          </div>
          <div class="flex-fill">
            <input type="text" class="form-control wd-border-radius-30 ps-5"
                   placeholder="Search Tuiter">
          </div>
          <div>
            <a href="explore-settings.html"><i class="fas fa-cog fa-2x ps-3"></i></a>
          </div>
        </div>
        <!-- Navigation -->
        <div class="flex-row">
          <ul class="nav nav-tabs mb-2">
            <li class="nav-item">
              <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Entertainment</a>
            </li>
          </ul>
        </div>

        <!-- Content -->
        
          <!-- Image -->
          <div class="flex-row position-relative ">
            <img class="mw-100"
                 src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                 alt="">
            <!-- Text -->
            <div class="position-absolute fixed-bottom p-2">
              <div class="fs-6 text-white">
              </div>
              <div class="fs-4 text-white">
                <b>SpaceX's Starship</b>
              </div>
            </div>
          </div>
    ${PostSummaryList()}
  `);
}
export default ExploreComponent;