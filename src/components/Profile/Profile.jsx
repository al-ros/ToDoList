import { useParams } from "react-router";

const Profile = () => {
  const { username, userId } = useParams();

  return (
    <>
      <h1>Hello {username}!</h1>
      <h3>{userId && `Your ID: ${userId}`}</h3>
      <form>
        <label>
            <div>Change username:</div>
            <input type="text"/>
        </label>
      </form>
    </>
  );
};

export default Profile;
