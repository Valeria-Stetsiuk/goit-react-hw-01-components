import PropTypes from "prop-types";
import { FriendListItem }  from '../FriendList/FriendListItem'
import s from '../FriendList/FriendList.module.css';

 export const FriendList = ({ friends }) => {
   return (
      <ul className={s["friend-list"]}>
         {friends.map(friend => (
            <li className={s["item"]} key={friend.id}>
               <FriendListItem
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline}
               />
            </li>
         ))}
      </ul>   
   )
};
FriendList.propTypes = {
   friends: PropTypes.arrayOf(
   PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
   }).isRequired),
 };