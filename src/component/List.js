import React from 'react';
const List = (property) => {
    const { repos } = property;  // here we initialize a property for the component called repos
    if (!repos || repos.length ===0 ) return <p>No repos, sorry</p>; //   this ia conditional statement that renders a message when the length of the repos we get from the request is zero.
    return (
        <ul>
            <h2 classname='list-head'>Available Public Repositories</h2>
            {repos.map((repo) => {
                return (
                    <li key={repo.id} className='list'>
                        <span className='repo-text'>{repo.name}</span>
                        <span classname='repo-description'>{repo.description}</span>
                    </li>
                );
            })}
        </ul>  // here we map through each repositories that will be provided by the API request we make and extracting each of the repositories names and their descriptions then we are displaying each of them in a list.
    );
};

export default List;  // here we export the List component so we can use it elsewhere.