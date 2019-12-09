import React from "react";
import UserItem from "./UserItem";

function UsersList(props) {
  const { users, onFavorite } = props;

  return users.map(user => {
    return <UserItem onFavorite={onFavorite} key={user.id} {...user} />;
  });
}

UsersList.propTypes = {
  users: PropTypes.array(
    PropTypes.object({
      id: PropTypes.number,
      avatarUrl: PropTypes.string,
      nickname: PropTypes.string,
      reposUrl: PropTypes.string
    })
  ),
  onFavorite: PropTypes.func
};

UsersList.defaultProps = {
  users: [],
  onFavorite: () => {}
};

export default UsersList;
