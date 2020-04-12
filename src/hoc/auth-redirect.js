import React from 'react'
import { Redirect } from "react-router-dom"


export let WithAuthRedirect =(Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props && !this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />}
          
        }
        return RedirectComponent
    }
    
