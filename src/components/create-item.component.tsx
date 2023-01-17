import { useForm, Resolver } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import CREATE_ITEM from '../queries/create-item.query';
import { useEffect } from 'react';


type FormValues = {
    name: string;
    description: string;
}

const resolver: Resolver<FormValues> = async (values) => {
    let errors: any = {};

    if (!values.name) {
        errors['name'] = {
            type:'required',
            message: 'Name is required',
        };
    }

    if (!values.description) {
        errors['description'] = {
            type:'required',
            message: 'Description is required',
        };
     }   

     return {values,errors};
}

const CreateItemComponent: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
    const [createItemFunction, {loading, error, data}] = useMutation(CREATE_ITEM);

    useEffect(() => {
        if (data) {
            
        }
    }, [loading, data, ]);

    const onSubmit = handleSubmit((payload) => {
        createItemFunction({variables: payload});
    });

    return (
        <div>

            <div className="fixed-button">
                <div className="pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 3C18.4512 3.06694 13.1486 5.30093 9.22478 9.22478C5.30093 13.1486 3.06694 18.4512 3 24C3.06694 29.5488 5.30093 34.8514 9.22478 38.7752C13.1486 42.6991 18.4512 44.9331 24 45C29.5488 44.9331 34.8514 42.6991 38.7752 38.7752C42.6991 34.8514 44.9331 29.5488 45 24C44.9331 18.4512 42.6991 13.1486 38.7752 9.22478C34.8514 5.30093 29.5488 3.06694 24 3ZM36 25.5H25.5V36H22.5V25.5H12V22.5H22.5V12H25.5V22.5H36V25.5Z" fill="#004CBD"/>
                    </svg>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={onSubmit} >
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Item</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body row g-3">
                                <div className="col-12">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" {...register("name")} className="form-control" id="name" placeholder="Enter name"/>
                                    {errors?.name && <p className='text-danger'>{errors.name.message}</p>}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="description" className="form-label">description</label>
                                    <textarea {...register("description")} className="form-control" id="inputPassword" placeholder="Enter description"/>
                                    {errors?.description && <p className='text-danger'>{errors.description.message}</p>}
                                </div>

                                {error &&
                                    <div className="col-12">
                                        <div className="alert alert-danger" role="alert">
                                            {error.message}
                                        </div>
                                    </div>
                                }

                                {data &&

                                    <div className="col-12">
                                        <div className="alert alert-success" role="alert">
                                            Event created successfully
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" disabled={loading} className="btn btn-secondary">
                                    {loading ? <div className="spinner-grow" role="status"><span className="visually-hidden">Loading...</span></div> : 'Create Event' }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateItemComponent;