import { useNavigate } from 'react-router-dom';
import errorPng from '../../assets/images/error.png'

const Error = () => {
const navigate = useNavigate()

    return ( 
        <div className='flex justify-center'>
            <div className='space-y-4'>
                <img src={errorPng} className='max-w-md' alt="" />
                <h2 className='text-3xl text-red-500 font-medium text-center'>This page not available !</h2>
                <div className='flex justify-center'>
                <button onClick={()=> navigate('/')} className="bg-[#005d45] hover:bg-[#104235] px-4  py-2 rounded text-white text-xl font-medium">Go Home </button>
                </div>
            </div>
        </div>
     );
}
 
export default Error;