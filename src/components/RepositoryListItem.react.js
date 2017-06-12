import React from 'react'

class RepositioryListItem extends React.Component {
    render () {
        return (
            <div className="callout">
                <article className="media-object row">
                    <div className="media-object-section column small-1">
                        <div className="thumbnail">
                            <img src="https://avatars0.githubusercontent.com/u/69631?v=3" width="100%" />
                        </div>
                    </div>
                    
                    <div className="media-object-section column small-11">
                        <h4><a href="">React</a></h4>
                        <p>A declarative, efficient, and flexible JavaScript library for building user interfaces.</p>
                    </div>
                </article>

                <hr />

                <nav className="row small-up-2 medium-up-4">
                    <div className="columns">
                        <p>Stars</p>
                        <div className="stat">128</div>
                    </div>
                    <div className="columns">
                        <p>Open Issue</p>
                        <div className="stat">128</div>
                    </div>
                    <div className="columns">
                        <p>Forks</p>
                        <div className="stat">128</div>
                    </div>
                    <div className="columns">
                        <p>Watches</p>
                        <div className="stat">128</div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default RepositioryListItem