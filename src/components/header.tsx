import * as React from "react"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header className="py-4 mb-4 text-sm">
    <div className="flex justify-between items-center max-w-3xl mx-auto">
      <h1 className="uppercase font-semibold text-gray-400">{siteTitle}</h1>
      <nav className="uppercase font-semibold">
        <ul className="flex space-x-8">
          <li className="cursor-pointer text-blue-500 font-bold pb-1 border-b-2 border-blue-500">
            Ongoing Trips
          </li>
          <li className="cursor-pointer text-gray-400 pb-1 border-b-2 hover:border-gray-500">
            Upcoming Trips
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
