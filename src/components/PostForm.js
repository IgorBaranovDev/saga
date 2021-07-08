import React from 'react'

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    submitHendler = event => {
      event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={this.submitHendler}>
              <div className="form-group">
                <label htmlFor="exempleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exempleInputPassword1" />
              </div>
            </form>
        )
    }
}

export default PostForm;