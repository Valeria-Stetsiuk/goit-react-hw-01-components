import PropTypes from "prop-types";
import { FriendListItem }  from '../FriendList/FriendListItem'
import s from '../FriendList/FriendList.module.css';

 export const FriendList = ({ friends }) => {
   return (
      <ul className={s["friend-list"]}>
         {friends.map(friend => (
               <FriendListItem {...friend}  key={friend.id}/>
         ))}
      </ul>   
   )
};
FriendList.propTypes = {
   friends: PropTypes.arrayOf(
   PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
   }).isRequired),
 };