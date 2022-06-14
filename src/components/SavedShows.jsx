import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import React ,{ useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import {AiOutlineClose} from 'react-icons/ai'

const SavedShows = () => {
    const {user} = UserAuth()
    const [movies, setMovies]=useState([])

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setMovies(doc.data()?.savedShows);
        });
      }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow=async(id)=>{
        try {
            const result =movies.filter((item)=>item.id !== id)
            await updateDoc(movieRef, {
                savedShows:result
            })
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <h2 className='text-white ml-2 md:ml-7 font-bold md:text-xl p-4'>Favourites</h2>
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 mx-5 md:mx-10 lg:mx-20'>
            {movies.map((item, id)=>(
                <div key={id} className='cursor-pointer relative p-1'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                        <p onClick={()=>deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default SavedShows
