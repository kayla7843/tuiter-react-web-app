import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
      <div class="flex-row">
        <ul class="list-group override-bs" id="tuit-list" >
          ${posts.map((p) => PostSummaryItem(p)).join('')}
        </ul>
      </div>
  `);
}

export default PostSummaryList;