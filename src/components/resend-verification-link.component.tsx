import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RESEND_VERIFICATION_LINK from '../queries/resend-verification.query';


const ResendVerificationLinkComponent = () => {

    const dispatch = useDispatch();
    const [resendVerificationFunction, {loading, error, data}] = useMutation(RESEND_VERIFICATION_LINK);

    useEffect(() => {
        if (data) {
            // data.resendVerificationEmail.message
        }
    }, [loading, data])


    const sendVerification = () => {
        resendVerificationFunction();
    }

    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12">
                    {!(data || loading) &&
                        <div className="alert alert-warning text-center" role="alert">
                        You have not verified your email address. Click <span className="pointer highlighted-text" onClick={() => {sendVerification()}}>here</span> to resend verification link.
                    </div>
                    }

                    {loading && 
                        <div className="alert alert-primary text-center" role="alert">
                            Sending...
                        </div>
                    }
                    
                    {data && 
                        <div className="alert alert-success text-center" role="alert">
                            {data.resendVerificationEmail.message}
                        </div>
                    }
                    
                </div>
            </div>
            <div className="row">
                
            </div>
        </div>
    )
}

export default ResendVerificationLinkComponent;