import {useState} from 'react';
import {useFormik} from 'formik';
import {postData} from '../../utils/utils';
import {createContactSchema} from '../../utils/schemas-yup';
import {useNavigate} from 'react-router-dom';
import Button from '../Button';
import './index.css';

const ContactForm = ()=>{
    const navigate = useNavigate();
    const [isloading,setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues:{
            phoneNumber:''
        },
        validationSchema: createContactSchema,
        onSubmit: async(values) =>{
            try {
                setIsLoading(true);
                const response = await postData('contacts',values)
                alert(JSON.stringify(response,null,2));
                navigate('/contacts');
            } catch (error) {
                alert(error);
            }
        }
    });

    return(
        <form className="form-box" onSubmit={formik.handleSubmit}>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input id="phoneNumber" name="phoneNumber" type="string" placeholder={'e.g 0712211232 or 071-221-1232'} value={formik.values.phoneNumber} onChange={formik.handleChange}/>
                    {formik.errors.phoneNumber && formik.touched.phoneNumber ? <div className='form-error'>{formik.errors.phoneNumber}</div> : null}
                </div>
            </div>
            
            <Button type="submit" text={isloading?'Loading...':'Submit'} icon={'fa-paper-plane'} color={"#112B3C"}/>
            
        </form>
    )
}

export default ContactForm;