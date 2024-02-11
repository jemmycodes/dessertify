import ProfileBio from "../_components/profile/ProfileBio";
import ProfileHeader from "@/app/_components/profile/ProfileHeader";
import PagesWrapper from "../_components/customlayouts/PagesWrapper";

const Profile = () => {
  return (
    <PagesWrapper>
      <ProfileHeader />
      <ProfileBio />
    </PagesWrapper>
  );
};

export default Profile;
