import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: 'Hello'
    }

    onToggleStatus (flag) {
        if (flag) {
            this.setState({
                editMode: true
            })
        } else {
            this.setState({
                editMode: false
            })
        }

    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => this.onToggleStatus(true)}>{this.state.status}</span>
                    </div>
                }

                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={() => this.onToggleStatus(false)} value={this.state.status} />
                    </div>
                }


            </div>
        )
    }
}

export default ProfileStatus