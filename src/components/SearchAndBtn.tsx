import { IoSearch } from "react-icons/io5";

const SearchAndBtn = () => {
  return (
    <form className="flex items-center gap-2 w-full">
      <section className="flex items-center h-full w-full gap-2">
        {/* search icon */}
        <IoSearch className="text-2xl" />
        <input className="w-full" type="text" />
      </section>
      <button>Search</button>
    </form>
  );
};

export default SearchAndBtn;
