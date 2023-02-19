const PostSummaryItem = (post) => {
    return (`
      <li class="list-group-item">
        <div class="d-flex">
          <div class="flex-fill">
            <div class="row">
              <span class="text-secondary">${post.topic}</span>
            </div>
            <div class="row">
              <span><b>${post.userName} </b>
              <i class="fa fa-check-circle"></i>
              <span class="text-secondary"> - ${post.time}</span></span>
            </div>
            <div class="row">
              <b>
                ${post.title}
              </b>
            </div>
          </div>
          <div class="d-flex align-items-end ps-1">
            <img class="wd-tuit-image rounded"
                 src="${post.image}">
          </div>
        </div>
      </li>
  `);
}
export default PostSummaryItem;