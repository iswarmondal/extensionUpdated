import * as React from 'react';

export interface ICreatePasswordProps {
}

export default function CreatePassword (props: ICreatePasswordProps) {
  return (
    <div className='artboard phone-1 p-5'>
      <h1 className = "text-5xl text-left mb-2">CREATE YOUR PASSWORD</h1>
      <h1 className = "text-lg text-left mb-3.5">You will use this to unlock your wallet</h1>

      <div>
        <h2 className = "text-xl text-left mt-3 mb-1">New Password</h2>
        <input type="text" placeholder="New Password" className="input input-bordered w-full" />
      </div>
      <br />
      <div>
        <h2 className = "text-xl text-left mb-1">Confirm Password</h2>
        <input type="text" placeholder="Confirm Password" className="input input-bordered w-full" />
      </div>

      <div className="divider"></div> 

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">I agree to the <span className='text-lime-700'>Terms of Service</span></span> 
          <input type="checkbox" checked className="checkbox" />
        </label>
      </div>

      <button className="btn btn-wide">
          <a href="#/Signature">Confirm</a>
      </button>      
    </div>
  );
}
