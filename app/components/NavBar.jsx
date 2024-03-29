function NavBar() {
  return (
    <nav className="w-[100%]">
      <div className="flex items-center h-[64px] bg-dark-blue">
      <img className="pl-[20px] h-[40px]" src="/images/myspace.png" alt="myspace logo" />
        <h1 className="text-2xl font-medium text-white">Inspired by myspace</h1>
      </div>
      <div className="h-[32px] bg-main-blue">
      </div>
    </nav>
  )
}

export default NavBar;