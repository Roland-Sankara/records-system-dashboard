import {useContext} from 'react';
import {useFormik} from 'formik';
import {postData} from '../../utils/utils'
import AppContext from '../../context/AppContext';
import Button from '../Button';
import './index.css';

const SchoolForm = ()=>{
    const {districtQuery} = useContext(AppContext);

    const formik = useFormik({
        initialValues:{
            name:'',
            level:'',
            registrationStatus:'',
            principal:'',
            healthFacility:'',
            address:'',
            passRate:'',
            email:'',
            courses: ["bc92b03f-b66d-4d16-a247-f4e4d0a1fe66"],
            contacts: ["ae421c9b-ffb6-4ed6-b8b9-c57149517646"],
            districtId: '',
            district: {
                id: "8302172c-499d-494e-8612-3451d9566a48",
                name: "ZOMBO",
                createdAt: "2022-04-30T01:16:35.432Z",
                regionId: "9f2fa7d8-91de-48d2-83d7-2e19dda4c7bc"
            }
        },
        onSubmit: async(values) =>{
            try {
                const response = await postData('trainingSchools',values)
                console.log(response)
                
            } catch (error) {
                alert(error)
            }
        }
    });
    
    const districtDataset = districtQuery.data['data'];
    // const courseDataset = courseQuery.data['data'].splice(0,11);
    // const contactsDataset = contactsQuery.data['data'].splice(0,11);


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
                <select id="district" name='districtId' onChange={formik.handleChange}>
                    <option selected>Select</option>
                    {districtDataset.map((district)=>(
                        <option key={district.id} value={district.id}>{district.name}</option>
                        ))
                    }
                </select>
            </div>

            <Button type="submit" text={'Submit'} icon={'fa-paper-plane'} color={"#112B3C"}/>
            
        </form>
    )
}

export default SchoolForm;