import {useState, useContext} from 'react';
import {useFormik} from 'formik';
import {patchData} from '../../utils/utils'
import {useNavigate} from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Button from '../Button';
import './index.css';

const EditCourse = ()=>{
    const {entityData} = useContext(AppContext);
    const navigate = useNavigate();
    const [isloading,setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues:{
            name: entityData?.name,
            cadre: entityData?.cadre,
            professionalQualification: entityData?.professionalQualification,
            durationYears: entityData?.durationYears
        },
        onSubmit: async(values) =>{
            try {
                setIsLoading(true);
                const response = await patchData('courses',values, entityData.id)
                alert(JSON.stringify(response,null,2));
                navigate('/courses');
            } catch (error) {
                alert(error);
            }
        }
    });

    return(
        <form className="form-box" onSubmit={formik.handleSubmit}>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="cadre">Cadre</label>
                    <input id="cadre" name="cadre" type="text" value={formik.values.cadre} onChange={formik.handleChange}/>
                </div>
            </div>
            
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="professionalQualification">Professional Qualification</label>
                    <input id="professionalQualification" name="professionalQualification" type="text" value={formik.values.professionalQualification} onChange={formik.handleChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="durationYears">Duration In Years</label>
                    <input id="durationYears" name="durationYears" type="number" value={formik.values.durationYears} onChange={formik.handleChange}/>
                </div>
            </div>

            <Button type="submit" text={isloading?'Loading...':'Update'} icon={'fa-paper-plane'} color={"#112B3C"}/>
            
        </form>
    )
}

export default EditCourse;