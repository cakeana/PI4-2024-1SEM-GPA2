import React from 'react'
import SideBar from './SideBar/SideBar'
import Side from './Side/Side'
import Feed from './Feed/Feed'

const Forum = () => {
  return (
    <div className="flex">
      <div className="w-1/6 bg-gray-100 flex justify-center pt-4">
        <h1 className="text-2xl font-bold">Forum</h1>
      </div>
      <div className="w-5/6">
        <Feed />
      </div>
      <div className="w-1/4 bg-gray-100" />
    </div>
  )
}

export default Forum
