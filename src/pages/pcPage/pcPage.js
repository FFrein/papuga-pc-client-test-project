import { useParams } from "react-router-dom";
import {useEffect, useState, useContext} from 'react'
import PCService from '../../service/PCService';
import {observer} from 'mobx-react-lite'
import ReviewsService from '../../service/ReviewService';
import { Context } from '../../.';
import pcImg from "../../resource/CPu.svg"

function PcPage(){

    const {store} = useContext(Context);
    const { id } = useParams();

    const [pc, SetPC] = useState();
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState([]);

    async function getPC(){
        try{
            const resp = await PCService.getCurrentPC(id);
            SetPC(resp.data);
        }
        catch(e){
            console.log(e);
        }
    }

    async function createReview(){
        try{
            const resp = await ReviewsService.addReview(store.user.id, id, review);
            console.log(resp);
            getReviews();
        }catch(e){
            console.log(e);
        }
    }

    async function getReviews(){
        try{
            console.log(id);
            const resp = await ReviewsService.pcReviews(id);
            console.log(resp.data);
            setReviews(resp.data);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getPC();
        getReviews();
    },[])

    return(
        <div className='PCPage'>
            <h2>{pc?.Name}</h2>
            <div className = "PC_info">
                <div className="PC_info_block">
                    <p>AUTHOR: </p><i>{pc?.Author}</i>
                    <p>ID:</p><i>{pc?._id}</i>
                </div>

                <div className="PC_info_block">
                    <p>GPU: </p><i>{pc?.GPU}</i>
                    <p>CPU:</p><i>{pc?.CPU}</i>
                    <p>Motherboard:</p><i>{pc?.Motherboard}</i>
                </div>

                <div className="PC_info_block">
                    <p>RAM_Quantity:</p><i>{pc?.RAM_Quantity}</i>
                    <p>RAM_SIZE:</p><i>{pc?.RAM_SIZE}</i>
                </div>
                <img src={pcImg} className="H-pc" alt="pc"/>
            </div>
            <div>
                <div className="Reviews_Block">
                    <h3>Reviews</h3>
                    <div className="Reviews">
                        <div className="AllReviews">
                            {reviews.map(rev=>{
                                return <div key={rev._id} className="Review">
                                    <h6>{rev.Author}</h6>
                                    {rev.Text}
                                </div>
                            })}
                        </div>
                        <div className="CreateReview">
                            <input
                            onChange={e => setReview(e.target.value)} 
                            value={review}
                            type="text" placeholder="Review"
                            />
                            <button onClick={createReview}>Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default observer(PcPage);