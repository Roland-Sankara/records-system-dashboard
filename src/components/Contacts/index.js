import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import AppContext from '../../context/AppContext';
import FlashCard from "../FlashCards/Contact";
import Button from '../Button';

const Contacts = ()=>{
    const {contactsQuery} = useContext(AppContext);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(4);

    const navigate = useNavigate();
    
    const contactsDataset = contactsQuery.data['data'];
    console.log(contactsDataset, 'Contacts');

    const currentPageData = ()=>{
        if(contactsDataset[endIndex-1]){
            return contactsDataset.slice(startIndex,endIndex);
        }else{
            return contactsDataset.slice(startIndex);
        }
    }

    const nextPage = ()=>{
        setStartIndex(startIndex+4);
        setEndIndex(endIndex+4)
    }

    const prevPage = ()=>{
        setStartIndex(startIndex-4);
        setEndIndex(endIndex-4)
    }

    return (
        <div className="section-box">
            <div className="sct-header">
                <h3>Contacts</h3>
                <Button text={"Add New"} icon={"fa-plus"} onClickFunc={()=>navigate('/contacts/create')}/>
            </div>
            <div className='section-cards'>
                {currentPageData().map((contact,index)=><FlashCard key={index} contact={contact} />)}
            </div>

            <div className="pagination">
                {startIndex ? <Button text={"Prev"} icon={"fa-arrow-left-long"} onClickFunc={prevPage} />: ''}
                {endIndex <= contactsDataset.length-1 ? <Button text={"Next"} icon={"fa-arrow-right-long"} onClickFunc={nextPage} /> : ''}
            </div>

        </div>

    )
}

export default Contacts;