import * as React from 'react';

export interface IWelcomePageProps {
}

const languageOptions = [
  { key: 'en', text: 'English', value: 'en' },
  { key: 'fr', text: 'French', value: 'fr' },
  { key: 'de', text: 'German', value: 'de' },
  { key: 'es', text: 'Spanish', value: 'es' },
  { key: 'it', text: 'Italian', value: 'it' },
];

export default function WelcomePage (props: IWelcomePageProps) {
  const [selectedLanguage, setSelectedLanguage] = React.useState('');
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <div className="artboard phone-1 p-5">
      <div className="dropdown dropdown-end float-right mb-48">
        <label tabIndex={0} className="btn m-1" onClick={toggleDropdown}>{selectedLanguage || 'Language'}</label>
        {dropdownOpen && (
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 cursor-pointer">
            {languageOptions.map((option) => (
              <li key={option.key} onClick={() => setSelectedLanguage(option.text)}>{option.text}</li>
            ))}
          </ul>
        )}
      </div>
      <div className=''>
        <h1 className="text-5xl text-left">Welcome to Netsepio</h1>
      </div>
      <div className='mt-10'>
        <button className="btn btn-wide">
          <a href="#/GetSecretKey">New Wallet</a>
        </button>
        <div className="divider mr-5"></div> 
        <button className="btn btn-wide">
          <a href="#/ImportSecretKey">Import Wallet</a>
        </button>
      </div>
    </div>
  );
}
