import { Link } from "react-router-dom";

const ResendVerificationLinkComponent = () => {

    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12">
                    <div className="alert alert-warning text-center" role="alert">
                        You have not verified your email address. Click <span className="pointer highlighted-text" onClick={() => {console.log('verify')}}>here</span> to resend verification link.
                    </div>
                </div>
            </div>
            <div className="row">
                
            </div>
        </div>
    )
}

export default ResendVerificationLinkComponent;