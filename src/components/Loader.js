import React, { Component } from 'react'
import { Blocks } from 'react-loader-spinner'

export default class Loader extends Component {
    render() {
        return (
            <div className='container d-flex justify-content-center'>
                {/* <Audio height="80" width="80" radius="9" color="green" ariaLabel="three-dots-loading" wrapperStyle wrapperClass /> */}
                <Blocks height="80" width="80" color="#4fa94d" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" visible={true} />


            </div>
        )
    }
}
