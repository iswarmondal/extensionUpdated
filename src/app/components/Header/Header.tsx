import * as React from 'react';

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
    <div>
      <div className="navbar rounded-lg shadow-lg shadow-gray-500/50 p-5">
        <div className="flex-1">
          <a className="normal-case text-xl" href='#/DashboardHome'>Netsepio</a>
        </div>
        <div className="flex-none rounded-lg shadow-lg">
          <ul className="menu menu-horizontal px-1">
            <li><a href='#/WalletHome' className='hover:bg-gray-600 active:bg-gray-700 hover:text-white'>Wallet</a></li>
            <li tabIndex={0}>
              <a className='ml-1 hover:bg-gray-600 active:bg-gray-700 hover:text-gray-200'>
                More
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-slate-100">
                <li><a href='#/DashboardHome' className='hover:bg-gray-600 active:bg-gray-700 hover:text-gray-200 active:bg-gray-200'>Dashboard</a></li>
                <li><a href='#/Profile' className='hover:bg-gray-600 active:bg-gray-700 hover:text-gray-200 active:bg-gray-200'>Profile</a></li>
                <li><a href='#/SettingsHome' className='hover:bg-gray-600 active:bg-gray-700 hover:text-gray-200 active:bg-gray-200'>Settings</a></li>
                <li><a href='#/Feedback' className='hover:bg-gray-600 active:bg-gray-700 hover:text-gray-200 active:bg-gray-200'>Help & Feedback</a></li>
                <li><a href='#/Logout' className='hover:bg-gray-600 active:bg-gray-700 hover:text-gray-200 active:bg-gray-200'>Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
