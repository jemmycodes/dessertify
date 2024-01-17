import type { ReactNode } from "react";

interface SearchResultPaneProps extends Props {
  children: ReactNode;
  status: "loading" | "error" | "idle";
}

const SearchResultPane = ({ children, status }: SearchResultPaneProps) => {
  if (status === "loading")
    return <ul className="search-results-pane">Loading...</ul>;

  if (status === "error")
    return <ul className="search-results-pane">An error occured</ul>;

  return <ul className="search-results-pane">{children}</ul>;
};

export default SearchResultPane;
