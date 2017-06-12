import React from 'react'

class NewRepoForm extends React.Component {
    render() {
        return (
            <div className="row column">
                <form>
                    <label>Add Repository
                        <input type="text" placeholder="Enter Repository Name" />
                    </label>
                </form>
            </div>
        )
    }
}

export default NewRepoForm;