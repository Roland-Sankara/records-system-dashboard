import {useState} from 'react';
import {useFormik} from 'formik';
import {postData} from '../../utils/utils';
import {createCourseSchema} from '../../utils/schemas-yup';
import {useNavigate} from 'react-router-dom';
import Button from '../Button';
import './index.css';

const CourseForm = ()=>{
    const navigate = useNavigate();
    const [isloading,setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues:{
            name:'',
            cadre:'',
            professionalQualification:'',
            durationYears:''
        },
        validationSchema: createCourseSchema,
        onSubmit: async(values) =>{
            try {
                setIsLoading(true);
                const response = await postData('courses',values)
                alert(JSON.stringify(response,null,2));
                navigate('/courses');
            } catch (error) {
                alert(error);
            }
        }
    });

    return(
        <form className="form-box" onSubmit={formik.handleSubmit}>
            <h3>Add New Course</h3>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>
                    {formik.errors.name && formik.touched.name ? <div className='form-error'>{formik.errors.name}</div> : null}
                </div>

                <div className="input-group">
                    <label htmlFor="cadre">Cadre</label>
                    <input id="cadre" name="cadre" type="text" value={formik.values.cadre} onChange={formik.handleChange}/>
                    {formik.errors.cadre && formik.touched.cadre ? <div className='form-error'>{formik.errors.cadre}</div> : null}
                </div>
            </div>
            
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="professionalQualification">Professional Qualification</label>
                    <input id="professionalQualification" name="professionalQualification" type="text" value={formik.values.professionalQualification} onChange={formik.handleChange}/>
                    {formik.errors.professionalQualification && formik.touched.professionalQualification ? <div className='form-error'>{formik.errors.professionalQualification}</div> : null}
                </div>

                <div className="input-group">
                    <label htmlFor="durationYears">Duration In Years</label>
                    <input id="durationYears" name="durationYears" type="number" value={formik.values.durationYears} onChange={formik.handleChange}/>
                    {formik.errors.durationYears && formik.touched.durationYears ? <div className='form-error'>{formik.errors.durationYears}</div> : null}
                </div>
            </div>

            <Button type="submit" text={isloading?'Loading...':'Submit'} icon={'fa-paper-plane'} color={"#112B3C"}/>
            
        </form>
    )
}

export default CourseForm;