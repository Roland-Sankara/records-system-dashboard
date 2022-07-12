import {useState} from 'react';
import {useFormik} from 'formik';
import {postData} from '../../utils/utils'
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
                    <input id="phoneNumber" name="phoneNumber" type="text" value={formik.values.phoneNumber} onChange={formik.handleChange}/>
                </div>
            </div>
            
            <Button type="submit" text={isloading?'Loading...':'Submit'} icon={'fa-paper-plane'} color={"#112B3C"}/>
            
        </form>
    )
}

export default ContactForm;