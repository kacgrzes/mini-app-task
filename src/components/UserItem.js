import React from "react";

{
  /* <UserItem avatarUrl nickname reposUrl/> */
}

function UserItem(props) {
  return (
    <div>
      <img src={props.avatarUrl} alt={props.nickname + " avatar url"} />
      <p>{props.nickname}</p>
      <a href={props.reposUrl}>Users repos</a>
      <button onClick={() => props.onFavorite(props.id)}>"<3"</button>
    </div>
  );
}

UserItem.propTypes = {
  id: PropTypes.number,
  avatarUrl: PropTypes.string,
  nickname: PropTypes.string,
  reposUrl: PropTypes.string,
  onFavorite: PropTypes.func
};

UserItem.defaultProps = {
  avatarUrl:
    "https://www.pngtube.com/myfile/detail/223-2238409_the-bouncer-github-octocat.png",
  nickname: "Unknown user",
  reposUrl: null,
  onFavorite: () => {}
};

export default UserItem;
