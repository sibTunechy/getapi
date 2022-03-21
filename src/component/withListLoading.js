import React from 'react';

function WithListLoading(component) {
    return function WithLoadingComponent({ isLoading, ...property}) {
        if (!isLoading) return <Component {...property}/>;
        return (
            <p style={{ textAlign: 'center', fontSize: '30px'}}>
                Hold on. fetching data may take a while
            </p>
        );
    };
}  // above code will wait to check if the current isLoading state of the component it takes is true or false. If the current isLoading state is true, it will display the messasge 'Hold on...'. Immediately the isLoading state changes to false it will render the component it took (the List component).

export default WithListLoading;