import React from 'react'
import ReduxToastr  from 'react-redux-toastr'
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css'

const Messages = () => {
    return (
        <ReduxToastr
            timeOut={5000}
            position='top-right'
            newestOnTop={false}
            preventDuplicates={true}
            transitionIn='fadeIn'
            transitionOut='fadeOut'
            progressBar={true}
        />
    )
}

export default Messages