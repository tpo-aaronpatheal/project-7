import React, { Component } from 'react';

const GalleryContext = React.createContext();

export class Provider extends Component {
    
    state = {
        searchInput: 'Dinos'
    };

    render() {
        return(
        <GalleryContext.Provider value={{
            searchInput: this.state.searchInput,
            actions: {
                updateSearchValue: this.updateSearchValue
            }
        }}>
            { this.props.children }
        </GalleryContext.Provider>
        );
    }
}
 
export const Consumer = GalleryContext.Consumer;