import * as React from 'react';

export interface IImportSecretKeyProps {
}

export default function ImportSecretKey (props: IImportSecretKeyProps) {
  return (
    <div className="artboard phone-1 p-5">
      
      <h1 className='text-5xl text-left mb-60'>Enter your secret key here</h1>

      <label htmlFor="my-modal" className="btn btn-wide">Secret Key</label>
      <div className="divider mr-5"></div> 
      <button className="btn btn-wide float-left"><a href='#/GetSecretKey'>Create Wallet Instead</a></button>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Secret Recovery Password</h3>
          <br />
          <h3 className="text-sm">This is the only way you will be able to recover your account. Please store it somewhere safe!</h3>
          
          <input type="text" placeholder="Type here" className="py-4 my-4 input input-bordered input-lg w-full max-w-xs" />

          <div className="modal-action ml-px">
            <label htmlFor="my-modal" className="btn">
              <a href='#/OldUserSignature'>Submit</a>
            </label>
          </div>
        </div>
      </div>

    </div>
  );
}
