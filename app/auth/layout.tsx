interface Props {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: Props) => {
  return (
    <>
      <div>Auth Page </div>
      {children}
    </>
  );
};

export default AuthenticationLayout;
