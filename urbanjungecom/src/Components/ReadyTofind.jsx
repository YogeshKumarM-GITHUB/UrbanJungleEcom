import flashsale from '../assets/leafs.jpg';
const ReadyToFind=()=>{
    return(
       <div className="mt-20 relative bg-cover bg-center h-[500px] w-full" style={{ backgroundImage: `url(${flashsale})` }}>
                   <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                   <div className='absolute text-white   z-40 flex flex-col items-center justify-center top-[150px] left-1/2 transform -translate-x-1/2 mt-4'>
                       <p className='text-[42px] text-center'>Ready to Find your Perfect Plant?</p>
                       <p className='text-[16px] text-center'>Browse our online store or visit us in person to <br/>experience the beauty of nature.</p>
                       <button className='border mt-7 rounded-full px-8 py-2 hover:text-black hover:bg-white transform transition-all duration-300 hover:scale-105'>Shop Now</button>
                   </div>
               </div>
    )
}
export default ReadyToFind;