import { SetStateAction, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams({});

  const queryValue = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState<string>(queryValue);

  const handleQuery = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchQuery(e.target.value);

    if (e.target.value === "") {
      return setSearchParams({});
    }

    setSearchParams({ query: searchQuery });
  };

  return (
    <div className="search-box">
      <BsSearch className="search-icon" />
      <input
        className="search-input"
        type="search"
        id="search"
        onChange={handleQuery}
        value={searchQuery}
        placeholder="Search by keywords"
      />
    </div>
  );
}
