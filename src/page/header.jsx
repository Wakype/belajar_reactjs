import React from 'react'

const Header = () => {
  return (
    <section className="px-[100px] py-[25px] flex justify-between border-b border-b-black bg-green-500 sticky">
      <div className="uppercase">
        logo
      </div>

      <div className='flex space-x-5'>
        <h1>About Us</h1>
        <h1>Teachers</h1>
        <h1>Article</h1>
      </div>

      <div className="space-x-5">
        <button>Placement Test</button>
        <button>Register</button>
      </div>
    </section>
  )
}

export default Header
