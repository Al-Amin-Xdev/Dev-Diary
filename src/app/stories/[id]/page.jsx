import React from 'react';

const StoryCardDetails = async ({params}) => {
    const {id} = await params;
    console.log(id);
    return (
        <div>
            <h1 className="text-white font-bold">This is card no. {id}</h1>
        </div>
    );
};

export default StoryCardDetails;