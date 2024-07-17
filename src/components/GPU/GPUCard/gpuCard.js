import './styles.css';

function GpuCard(props){
    const {gpu} = props;

    return(
        <div className='div'>
            {gpu.Name}
        </div>
    )
}
export default GpuCard;