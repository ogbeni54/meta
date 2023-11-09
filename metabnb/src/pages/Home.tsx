import Nav from '../Nav'
import './home.css'
const Home = () => {
  return (
    
      
        <div className='w-full'>
          <div className='w-4/5 mx-auto'>
          <Nav />
            <div className='flex mt-4 justify-between'>
              <div className=" first w-1/2">
                <div className='w-4/5'>
                <h2 className='font-bold text-6xl mt-20 w-full'>
                <span>Rent a</span> <span className='primary'>Place</span> <span>away from</span>
                <span className='primary'>Home</span> in the <span className='primary'>Metaverse</span>
                </h2>
                <p className='text-3xl'>
                we provide you access to luxury and affordable houses in the metaverse, 
                get a chance to turn your imagination to reality at your comfort zone
                </p>
                <form action="" className='form flex w-full'>
                <input type="text" placeholder='Search for location' className='w-3/4' />
                <button className='secondary w-1/4 text-white'>Search</button>
                </form>
                </div>
             
              </div>
              <div className="second a flex justify-between ">
                <div className=" flex flex-col gap-y-3 pt-24">
                  <div className="1">
                    <img src="./image/image 3.png" alt="image3" />
                  </div>
                  <div className="2">
                  <img src="./image/image 4.png" alt="image4" />
                  </div>
                </div>
                <div className="b flex flex-col gap-y-3">
                  <div className="3">
                    <img src="./image/image 5.png" alt="image5" />
                  </div>
                  <div className="4">
                    <img src="./image/image 6.png" alt="image6" />
                  </div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      
    
  );
}

export default Home
