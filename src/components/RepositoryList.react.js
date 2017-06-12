import React from 'react'
import RepositoryListItem from './RepositoryListItem.react'

class RepositioryList extends React.Component {
    render () {
        return (
            <div className="row column">
                <RepositoryListItem />
            </div>
        )
    }
}

export default RepositioryList