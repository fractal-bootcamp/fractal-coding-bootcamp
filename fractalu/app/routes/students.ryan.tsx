import React from 'react';
// import your image here
import profilePic from '../images/ryan.jpeg'; // Adjust the path to where your image is located

const Ryan = () => {
    return (
        // The new code from the ProfilePage component goes here
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4">
                <img className="w-full" src={profilePic} alt="Ryan" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Ryan</div>
                    <p className="text-gray-700 text-base">
                        Hi, I'm Ryan. I like agency, earnestness, psychedelics, and living a maximally graceful life.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hashtag</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hashtag</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hashtag</span>
                </div>
            </div>
        </div>
    );
};

export default Ryan;
