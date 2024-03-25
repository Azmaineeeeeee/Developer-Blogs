import {FadeLoader} from 'react-spinners'

const Loader = () => {
    return (
        <div className='flex justify-center text-teal-900 flex-col items-center min-h-[calc(100vh-120px)]'> 
            <FadeLoader size = {200}></FadeLoader>
        </div>
    );
};

export default Loader;