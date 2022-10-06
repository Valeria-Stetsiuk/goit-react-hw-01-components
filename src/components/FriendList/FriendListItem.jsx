import PropTypes from "prop-types";
import s from "../FriendList/FriendList.module.css";
export const FriendListItem = ({ avatar,name,isOnline }) => {
   return (
     <li className="item">
    <span className = {isOnline ? s.statusOnline : s.statusOffline}></span>
   <img className="avatar" src={avatar} alt="User avatar" width="48" />
           <p className="name">{ name}</p>
</li>
   )
};
FriendListItem.propTypes = {
   friends: PropTypes.arrayOf(
   PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
   }).isRequired),
 };