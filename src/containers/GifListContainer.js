import React from "react";
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

export default class GifListContainer extends React.Component {
    render () {
        return(
            <GifSearch search={this.handleSearch} />
        )
    }
}