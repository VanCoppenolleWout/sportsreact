export default function SideBar() {
  return (
    <div className="mx-12">
      <p className="font-bold text-lg text-gray-800">
        Sports<span className="font-normal">React</span>
      </p>
      <div className="flex flex-col mt-8 space-y-3">
        <button className="hover:bg-gray-300 rounded-lg py-3 px-3 text-left text-gray-700 font-semibold flex flex-row space-x-3">
          <svg
            className=" mt-[2px]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <p>Dashboard</p>
        </button>
        <button className="rounded-lg py-3 px-3 hover:bg-gray-300 text-left text-gray-700 font-semibold flex flex-row space-x-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <p>Squad</p>
        </button>
        <button className="rounded-lg py-3 px-3 hover:bg-gray-300 text-left text-gray-700 font-semibold flex flex-row space-x-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <p>Statistic</p>
        </button>
        <button className="rounded-lg py-3 px-3 hover:bg-gray-300 text-left text-gray-700 font-semibold flex flex-row space-x-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <p>Calendar</p>
        </button>
      </div>
    </div>
  )
}
