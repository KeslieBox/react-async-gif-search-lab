import React, {Component} from 'react'

const gifList = props => {
    return (
        <div>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url}/>)}
        </div>
    )
}

export default gifList