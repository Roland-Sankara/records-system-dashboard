import {useContext, useState} from 'react';
import {useFormik} from 'formik';
import {patchData} from '../../utils/utils';
import {editSchoolSchema} from '../../utils/schemas-yup';
import {useNavigate} from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Button from '../Button';
import './index.css';

const EditSchool = ()=>{
    const {districtQuery, contactsQuery, coursesQuery, entityData} = useContext(AppContext);
    const navigate = useNavigate();
    const [isloading,setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues:{
            name: entityData.name,
            level: entityData?.level,
            registrationStatus: entityData?.registrationStatus,
            principal: entityData?.principal,
            healthFacility: entityData?.healthFacility,
            address: entityData?.address,
            passRate: entityData?.passRate,
            email: entityData?.email,
            courses: [...entityData?.courses.map(course=>course.id)] || [],
            contacts: [...entityData?.contacts.map(contact=>contact.id)] || [],
            district: entityData?.district?.id,
        },
        validationSchema: editSchoolSchema,
        onSubmit: async(values) =>{
            try {
                setIsLoading(true);
                const response = await patchData('trainingSchools',values,entityData.id)
                alert(JSON.stringify(response,null,2));
                navigate('/schools');
            } catch (error) {
                alert(error);
            }
        }
    });
    
    const districtDataset = districtQuery.data['data'];
    const coursesDataset = coursesQuery.data['data']; 
    const contactsDataset = contactsQuery.data['data'].slice(0, 32); 

    return(
        <form className="form-box" onSubmit={formik.handleSubmit}>
            <h3>Edit School Details</h3>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>
                    {formik.errors.name && formik.touched.name ? <div className='form-error'>{formik.errors.name}</div> : null}
                </div>

                <div className="input-group">
                    <label htmlFor="status">Registration Status</label>
                    <input id="status" name="registrationStatus" type="text" value={formik.values.registrationStatus} onChange={formik.handleChange}/>
                    {formik.errors.registrationStatus && formik.touched.registrationStatus ? <div className='form-error'>{formik.errors.registrationStatus}</div> : null}
                </div>

                <div className="input-group">
                    <label htmlFor="principal">Principal</label>
                    <input id="principal" name="principal" type="text" value={formik.values.principal} onChange={formik.handleChange}/>
                    {formik.errors.principal && formik.touched.principal ? <div className='form-error'>{formik.errors.principal}</div> : null}
                </div>
            </div>
            
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="healthFacility">Health Facility</label>
                    <input id="healthFacility" name="healthFacility" type="text" value={formik.values.healthFacility} onChange={formik.handleChange}/>
                    {formik.errors.healthFacility && formik.touched.healthFacility ? <div className='form-error'>{formik.errors.healthFacility}</div> : null}
                </div>

                <div className="input-group">
                    <label htmlFor="level">Level</label>
                    <input id="level" name="level" type="text" value={formik.values.level} onChange={formik.handleChange}/>
                    {formik.errors.level && formik.touched.level ? <div className='form-error'>{formik.errors.level}</div> : null}
                </div>

                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input id="address" name="address" type="text" value={formik.values.address} onChange={formik.handleChange}/>
                    {formik.errors.address && formik.touched.address ? <div className='form-error'>{formik.errors.address}</div> : null}
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="passRate">Pass Rate</label>
                    <input id="passRate" name="passRate" type="number" value={formik.values.passRate} onChange={formik.handleChange}/>
                    {formik.errors.passRate && formik.touched.passRate ? <div className='form-error'>{formik.errors.passRate}</div> : null}
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={formik.values.email} onChange={formik.handleChange}/>
                    {formik.errors.email && formik.touched.email ? <div className='form-error'>{formik.errors.email}</div> : null}
                </div>

                <div className="input-group district">
                    <label htmlFor="district">District</label>
                    <select id="district" name='district' onChange={formik.handleChange}>
                        <option selected>{entityData?.district?.name}</option>
                        {districtDataset.map((district)=>(
                            <option key={district.id} value={district.id}>{district.name}</option>
                            ))
                        }
                    </select>
                    {formik.errors.district && formik.touched.district ? <div className='form-error'>{formik.errors.district}</div> : null}
                </div>
            </div>

            <fieldset onChange={formik.handleChange}>
                <legend>Select Courses</legend>
                {entityData.courses.map((course)=>(
                    <div key={course.id} className="checkbox">
                        <input id={course.id} name="courses" type="checkbox" value={course.id}/>
                        <label htmlFor={course.id}>✔️ {course.name}</label>
                    </div>
                    
                    ))}
                {coursesDataset.map((course)=>(
                    <div key={course.id} className="checkbox">
                        <input id={course.id} name="courses" type="checkbox" value={course.id}/>
                        <label htmlFor={course.id}>{course.name}</label>
                    </div>
                    
                    ))}
                {formik.errors.courses && formik.touched.courses ? <div className='form-error'>{formik.errors.courses}</div> : null}
            </fieldset> 

            <fieldset onChange={formik.handleChange}>
                <legend>Select Contacts</legend>
                <div className='checkbox-container'>
                    {entityData.contacts.map((contact)=>(
                        <div key={contact.id} className="checkbox contacts">
                            <input id={contact.id} name="contacts" type="checkbox" value={contact.id}/>
                            <label htmlFor={contact.id}>{contact.phoneNumber} ✔️</label>
                        </div>
                        ))}
                    {contactsDataset.map((contact)=>(
                        <div key={contact.id} className="checkbox contacts">
                            <input id={contact.id} name="contacts" type="checkbox" value={contact.id}/>
                            <label htmlFor={contact.id}>{contact.phoneNumber}</label>
                        </div>
                        ))}
                    {formik.errors.contacts && formik.touched.contacts ? <div className='form-error'>{formik.errors.contacts}</div> : null}
                </div>
            </fieldset>      


            <Button type="submit" text={isloading?'Loading...':'Update'} icon={'fa-paper-plane'} color={"#112B3C"}/>
            
        </form>
    )
}

export default EditSchool;