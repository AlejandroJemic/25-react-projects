import React, { useEffect } from 'react';
import './styles.css';
import useApiData from '../../hooks/useApiData';

export default function GithubProfile() {
  const [text, setText] = React.useState('');
  const [searchText, setSearchText] = React.useState(''); // serchText
  const { data, isLoading, error } = useApiData(
    `https://api.github.com/users/${searchText}`
  );

  function search() {
    setSearchText(text);
  }

//   if (data) console.log(data);

  return (
    <div className="profile-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter user name"
          className="search-input"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          disabled={text.trim().length > 0 ? false : true}
          onClick={search}
        >
          Search
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>Error: {error}</p>}
      {!isLoading && !error && data && (
        <div className="profile-blocks">
          <img src={data.avatar_url} alt="profile" />
          <div className="result-container">
            <h3>{data.name}</h3>
            <p>{data.bio}</p>
            <p>{data.followers} followers</p>
            <p>{data.public_repos} repos</p>
            <a href={data.html_url} target="_blank" rel="noreferrer">
              visit profie
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
