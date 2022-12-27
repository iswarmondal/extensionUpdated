import * as React from 'react';

export interface ISignatureProps {
}

export default function Signature (props: ISignatureProps) {
  return (
    <div className='artboard phone-1 p-5'>
      <h1 className = "text-5xl text-left mb-2">SIGNATURE REQUEST!</h1>
      <br />
      <br />
      <h2 className = "text-3xl text-left">You are signing</h2>
      <br />
      <br />
      <h2 className = "text-xl text-left">Message</h2>
      <br />
      <p className = "text-lg text-left">ZenMate Free VPN is the best free VPN Chrome extension to hide your IP, Fast & Anonymous VPN. Free Download with 80+ VPN locations. 12343:324352</p> 
      <br/>
      <br/>
      <div className="flex w-full mt-2">

        <div className="grid flex-grow">
          <button className="btn mt-5">
          <a href='#/'>CANCEL</a>
          </button> 
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="grid flex-grow">
          <button className="btn mt-5">
          <a href='#/DashboardHome'>SAVE</a>
          </button> 
        </div>

      </div> 
    </div>
  );
}