type MenuTypes = {
  _id: string;
  name: string;
  category: string;
  photoUrl: string;
  description: string;
  slug: string;
};

type Params = {
  params: Record<string, string>;
};

type Props = {
  children: React.ReactNode;
};
