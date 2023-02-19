const WhoToFollowListItem = (who) => {
    return (`

           <li class="list-group-item d-flex flex-row">
              <div class="d-flex pe-4">
                   <img class="rounded-circle wd-tuit-profile-image"
                        src="${who.avatarIcon}"
                   />
              </div>
              <div class="flex-fill pe-2">
                <div class="row text-nowrap">
                  <span><b>${who.userName} </b><i class="fa fa-check-circle"></i></span>
                </div>
                <div class="row">
                  <span>@${who.handle}</span>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <button class="btn btn-primary btn-sm wd-border-radius-30">Follow</button>
              </div>
            </li>
  `);
}
export default WhoToFollowListItem;