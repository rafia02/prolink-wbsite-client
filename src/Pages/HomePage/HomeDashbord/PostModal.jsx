import React, { useContext, useReducer, useState } from 'react'
import "../../../App.css"
import { BsEmojiSmile, BsYoutube } from "react-icons/bs";
import { MdPhotoSizeSelectActual, MdTextSnippet, MdOutlineBrokenImage } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiShoppingBag } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { UploadFile } from '../../Components/Utilities/UploadFile';
import { authContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';




export const PostModal = () => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const { user } = useContext(authContext)
    const [linkss, setLinkss] = useState([])
    const [text, setText] = useState('');
    const [newfile, setNewfile] = useState({});
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showUploadFile, setShowUploadFile] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [files, setFiles] = useState([])
    let sum = []
    const handleEmojiClick = (emoji) => {
        console.log(emoji.native)
        setText(text + emoji.native);
    };


    const removeFile = (name) => {
        setFiles(files => files.filter(file => file[0].name !== name))

    }



    // const handleSubmit = (e) => {
    //     e.preventDefault()


    //     if (!files?.length) return
    //     console.log("submit")

    //     for (let i = 0; i < files.length; i++) {
    //         const formData = new FormData();
    //         formData.append('image', files[i][0])
    //         const URL = "https://api.imgbb.com/1/upload?&key=4d5a64efec46b0e4ba427206e6bcef01"
    //         const data = fetch(URL, {
    //             method: 'POST',
    //             body: formData
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log(data.data.url)
    //                 setLinkss(...linkss, data.data.url)

    //                 const postData = {
    //                     img: data.data.url,
    //                     email: user.email,
    //                     text: e.target?.mgs.value


    //                 }

    //                 fetch(`http://localhost:5000/post`, {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-type": "application/json"
    //                     },
    //                     body: JSON.stringify(postData)
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         console.log(data)
    //                         e.target.reset()
    //                         toast.success("successfully post")
    //                         forceUpdate();
    //                     })
    //                     .catch(e => console.error(e))
    //             })
    //             .catch(e => console.error(e))




    //     }



    // }



    const handleSubmit = (e) => {
        e.preventDefault()


        if (!files?.length) return
        console.log("submit")
   

        for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            formData.append('image', files[i][0])
            const URL = "https://api.imgbb.com/1/upload?&key=4d5a64efec46b0e4ba427206e6bcef01"
            const data = fetch(URL, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    // setLinkss(...linkss, data.data.url)
                    sum.push(data.data.url)
                })
                .catch(e => console.error(e))




        }

        console.log(sum)


        if(sum.length){
            const postData = {
                img: sum,
                email: user.email,
                text: e.target?.mgs.value
    
    
            }
            console.log(postData)
    
            fetch(`http://localhost:5000/post`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(postData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    e.target.reset()
                    toast.success("successfully post")
                    forceUpdate();
                })
                .catch(e => console.error(e))
        }


       


    }






    return (
        <div className='relative'>

            <dialog id="my_modal_3" className="modal">


                <form onSubmit={handleSubmit} className="modal-box">

                    {/* <div>
                        <div className="text-2xl right-5 top-3 absolute font-bold hover:text-red-500 duration-300">X</div>
                    </div> */}

                    <div>
                        <textarea
                            name='mgs'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className='w-full h-40 text-xl outline-none'
                            cols="30" rows="10"
                            placeholder='What do you want to talk about'>
                        </textarea>

                        <ul className='grid grid-cols-3 gap-5 my-5'>
                            {
                                files.map(file => <li className='relative ' key={file[0].name}>
                                    {
                                        file[0].name.includes("mp4") ?
                                            <video className='h-20 w-full rounded' controls src={file[0].preview}></video>
                                            :
                                            <img className='h-20 w-full rounded' src={file[0].preview} alt="" />
                                    }

                                    <div onClick={() => removeFile(file[0].name)} className='absolute top-[-12px] right-[-8px] duration-500  hover:text-red-500 mt-1'>
                                        <RxCross2 className='text-xl bg-red-400 duration-500 hover:bg-red-500 p-[2px] text-white rounded-full font-extrabold '></RxCross2>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>

                    <div >
                        {
                            showEmojiPicker &&
                            <Picker
                                data={data}
                                onEmojiSelect={handleEmojiClick}
                            />
                        }
                    </div>
               


                    <div>
                        {
                            showUploadFile &&
                            <UploadFile setFiles={setFiles}></UploadFile>
                        }
                    </div>


                    <div>
                        {
                            showVideo &&
                            <UploadFile setFiles={setFiles}></UploadFile>
                        }
                    </div>


                    <div className='flex  justify-between items-center'>
                        <BsEmojiSmile
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                            title='Open emoji keyword'
                            className='text-xl my-5'>
                        </BsEmojiSmile>
                        <MdOutlineBrokenImage
                            onClick={() => setShowUploadFile(!showUploadFile)}
                            title='Add image'
                            className=' text-2xl mr-2'>
                        </MdOutlineBrokenImage>
                        <AiOutlineYoutube
                            onClick={() => setShowUploadFile(!showUploadFile)}
                            title='Add video'
                            className='text-2xl mr-2'>
                        </AiOutlineYoutube>
                        <TiShoppingBag title='Add job post' className='text-[25px]   mr-2'></TiShoppingBag>
                    </div>


                    <button type='submit' className=' hover:bg-blue-800 duration-500 bg-blue-500 px-5  text-white font-bold rounded-full py-1'>Post</button>



                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                </form>
            </dialog>
        </div >
    )
}
