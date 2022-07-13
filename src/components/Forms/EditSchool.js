import {useContext, useState} from 'react';
import {useFormik} from 'formik';
import {patchData} from '../../utils/utils'
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
            courses: [coursesQuery.data['data'][Math.floor(Math.random()*coursesQuery.data['data'].length)].id],
            contacts: [contactsQuery.data['data'][Math.floor(Math.random()*contactsQuery.data['data'].length)].id],
            district: entityData?.district?.name,
        },
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


    return(
        <form className="form-box" onSubmit={formik.handleSubmit}>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="status">Registration Status</label>
                    <input id="status" name="registrationStatus" type="text" value={formik.values.registrationStatus} onChange={formik.handleChange}/>
                </div>
            </div>
            
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="principal">Principal</label>
                    <input id="principal" name="principal" type="text" value={formik.values.principal} onChange={formik.handleChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="healthFacility">Health Facility</label>
                    <input id="healthFacility" name="healthFacility" type="text" value={formik.values.healthFacility} onChange={formik.handleChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="level">Level</label>
                    <input id="level" name="level" type="text" value={formik.values.level} onChange={formik.handleChange}/>
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input id="address" name="address" type="text" value={formik.values.address} onChange={formik.handleChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="passRate">Pass Rate</label>
                    <input id="passRate" name="passRate" type="number" value={formik.values.passRate} onChange={formik.handleChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={formik.values.email} onChange={formik.handleChange}/>
                </div>
            </div>

            <div className="input-group district">
                <label htmlFor="district">District</label>
                <select id="district" name='district' onChange={formik.handleChange}>
                    <option selected>Select</option>
                    {districtDataset.map((district)=>(
                        <option key={district.id} value={district.id}>{district.name}</option>
                        ))
                    }
                </select>
            </div>

            <Button type="submit" text={isloading?'Loading...':'Update'} icon={'fa-paper-plane'} color={"#112B3C"}/>
            
        </form>
    )
}

export default EditSchool;