import "./css/MoreAboutMe.css";
import { MoreAboutMeSingleCard } from "../components/MoreAboutMeSingleCard";
import { moreAboutMeCardData } from "../Data/MoreAboutMeCardData/MoreAboutMeCardData";

export const MoreAboutMe = function MoreAboutMe(props) {
  // const location = useLocation();
  return (
    <>
      <div className="container moreAboutMeContainer">
        <div className="moreAboutMeContent container">
          {moreAboutMeCardData.map((dataDic, index) =>
            <MoreAboutMeSingleCard
              key={index}
              {...dataDic}
            />
          )}
        </div>
      </div>
    </>
  );
};
