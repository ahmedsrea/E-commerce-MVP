export default function Search() {
  return (
    <form className="h-[40px] w-[665px] flex items-center border-2 border-[#127FFF] rounded-md overflow-hidden">
      <input
        type="search"
        placeholder="Search"
        className="flex-1 max-w-[421px] text-[#8B96A5] h-[38px] outline-none pl-2 border-r border-[#127FFF]"
      />
      <select className="px-2 mx-2 ml-0">
        <option value="0">All category</option>
      </select>
      <button className="btn-primary" type="button">
        Search
      </button>
    </form>
  );
}
