import {Profile} from "./Profile/Profile";
import user from "../data/user.json";
import { Data } from "./Statistics/Statistics";
import data from "../data/data.json";

export const App = () => {
  return (
    <>
      <Profile firstUser={user} />
      <Data title="Upload stats" stats={data} />
    </>
  );
};


