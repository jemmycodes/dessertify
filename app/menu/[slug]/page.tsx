import PagesWrapper from "@/app/_components/customlayouts/PagesWrapper";

const Page = ({ params }: { params: { slug: string } }) => {
  console.log(params, params.slug);
  return <PagesWrapper>hi</PagesWrapper>;
};

export default Page;
