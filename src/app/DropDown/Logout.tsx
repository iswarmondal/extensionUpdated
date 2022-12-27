import * as React from 'react';

export interface ILogoutProps {
}

export default function Logout (props: ILogoutProps) {
  return (
    <div className='artboard phone-3 p-5'>
      <h1 className='text-5xl text-left'>Wallet is locked!</h1>
      <p className='text-md mt-5 mb-3'>Enter Password</p>
      <input type="text" placeholder="Enter Password" className="input input-bordered input-md w-full max-w-xs" />
      <button className='btn mt-5'>Unlock</button>
    </div>
  );
}
