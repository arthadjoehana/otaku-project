import React, { Component } from 'react';


export default function Searchbar() {
   
    return ( 
        <div className="navsearch">
            <form>
                <input type="text" placeholder="Search..." />
                <button type="submit" className="navsearch-button"><i className="fas fa-search"></i></button>
            </form>
        </div>
    );
}




