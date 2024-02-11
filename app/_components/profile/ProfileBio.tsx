import Input from "../ui/Input";

export const ProfileBio = () => {
  return (
    <section className="border  p-4 rounded-md w-full max-w-md mt-8">
      <form>
        <Input
          label="First Name"
          type="text"
          className="auth-input"
          id="firstname"
        />
        <Input
          label="Last Name"
          type="text"
          className="auth-input"
          id="lastname"
        />
      </form>
    </section>
  );
};

export default ProfileBio;
