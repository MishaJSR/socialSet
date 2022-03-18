import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
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
                        <span onDoubleClick={() => this.onToggleStatus(true)}>{this.props.status}</span>
                    </div>
                }

                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={() => this.onToggleStatus(false)} value={this.props.status} />
                    </div>
                }


            </div>
        )
    }
}

export default ProfileStatus