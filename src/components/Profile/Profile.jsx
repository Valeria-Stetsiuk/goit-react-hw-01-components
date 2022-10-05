import PropTypes from "prop-types";
import styleProfile from "../Profile/Profile.module.css"; 
export const Profile = ({ firstUser }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = firstUser;
    return (
        <div className={styleProfile.profile}>
            <div className={styleProfile.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styleProfile.avatar}
                />
                <p className={styleProfile.name}>{username}</p>
                <p className={styleProfile.tag}>@{tag}</p>
                <p className={styleProfile.location}>{location}</p>
            </div>

            <ul className={styleProfile.stats}>
                <li>
                    <span className={styleProfile.label}>Followers</span>
                    <span className={styleProfile.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={styleProfile.label}>Views</span>
                    <span className={styleProfile.quantity}>{views}</span>
                </li>
                <li>
                    <span className={styleProfile.label}>Likes</span>
                    <span className={styleProfile.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};


