import './styles.css';
import {observer} from 'mobx-react-lite'
import {useState,useContext, useEffect} from 'react';
import { Context } from '../../.';

import ReviewsService from '../../service/ReviewService'
import PCService from '../../service/PCService';
import PCForm from '../../components/pcForm/pcForm'
import UserPCs from '../../components/userPCs/userPCs'
import UserReviews from '../../components/userReviews/userReviews'

function ProfilePage(){
    const {store} = useContext(Context);

    const [reviews,setReviews] = useState([]);
    const [revPage, setRevPage] = useState(1);
    const [userPCs,setuserPCs] = useState([]);

    async function NextPage(){
        if(reviews.length == 10){
            setRevPage(revPage => revPage + 1);
            await getReviews(revPage);
        }
    }

    async function forwardPage(){
        if(revPage > 1){
            setRevPage(revPage => revPage - 1);
            await getReviews(revPage);
        }
    }

    async function getUserPCs(){
        try{
            const response = await PCService.getUserPCs(store.user.id);
            setuserPCs(response.data);
            //console.log(response.data)
        }
        catch(e){
            console.log(e?.response?.data?.message);
        }
    }

    async function getReviews(pagenum){
        try{
            console.log(pagenum)
            const response = await ReviewsService.userReviews(store.user.id, pagenum);
            setReviews(response.data);
            //console.log(response.data)
        }
        catch(e){
            console.log(e?.response?.data?.message);
        }
    }
    
    useEffect(()=>{
        getUserPCs();
        getReviews(1);
    }, [])

    return(
        <div className='Page'>
            <div className="Profile">
                <div className="UserInfo">
                    <h1>PROFILE</h1>
                    <div>
                        <p>{store.user.id}</p>
                        <p>{store.user.email}</p>
                        <p>{store.user.banned ? "Banned" : "No ban"}</p>
                    </div>
                </div>

                <div className="ProfileButtons">
                    <button onClick={getUserPCs}>My PC LIST</button>
                    <button onClick={()=>{store.logout()}}>Exit</button>
                </div>

                <div className="UserPCs">
                    {userPCs.map((pc)=>{
                        return <div className="PC_Config"  key={pc._id}><UserPCs PC={pc}/></div>
                    })}
                </div>
                
            </div>

            <div className='MiddleMenu'>
                <div className='ReviewsBlock'>
                    <div>
                        <h3>MY REVIEWS</h3>
                        <div className='ReviewsBlock_Buttons'>
                            <button onClick={forwardPage}>Forward</button>
                            <button onClick={NextPage}>Next</button>
                        </div>
                    </div>
                    <div className='UserReview'>
                        {reviews.map((elem)=>{
                            return <div className="UserReviews" key={elem._id}><UserReviews Review = {elem}/></div>
                        })}
                    </div>

                    <p className="PageNumber">Page: {revPage}</p>
                </div>

                <div>   

                </div>

                <div className='PCFormBlock'>
                    <PCForm userId={store.user.id}/>
                </div>  
            </div>

        </div>
    )
}
export default observer(ProfilePage);