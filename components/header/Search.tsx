export default function Search() {
  return (
    <form className="h-[40px] w-[665px] flex items-center border-2 border-[#127FFF] rounded-md overflow-hidden">
      <input
        type="search"
        placeholder="Search"
        className="flex flex-1 min-w-[420px] text-[#8B96A5] h-[38px] outline-none pl-2 border-none rounded-none"
      />
      <span className="border-l-2 border-[#127FFF] w-[2px] h-full"></span>
      <select className="border-none rounded-none mr-2">
        <option value="0">All category</option>
      </select>
      <button className="btn-primary rounded-l-none" type="button">
        Search
      </button>
    </form>
  );
}
