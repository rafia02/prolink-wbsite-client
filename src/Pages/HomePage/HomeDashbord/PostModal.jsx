import React, { useState } from 'react'
import "../../../App.css"
import { BsEmojiSmile, BsYoutube } from "react-icons/bs";
import { MdPhotoSizeSelectActual, MdTextSnippet, MdOutlineBrokenImage } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiShoppingBag } from "react-icons/ti";






import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { UploadFile } from '../../Components/Utilities/UploadFile';




export const PostModal = () => {
    const [text, setText] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showUploadFile, setShowUploadFile] = useState(false);
    const [files, setFiles] = useState([])

    const handleEmojiClick = (emoji) => {
        console.log(emoji.native)
        setText(text + emoji.native);
    };

    return (
        <div className='relative'>

            <dialog id="modal" className="modal">
                <form method="dialog" className="modal-box">
                    <div>
                        <button className="text-2xl right-5 top-3 absolute font-bold hover:text-red-500 duration-300">X</button>
                    </div>



                    <form className='mt-5' action="">
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className='w-full h-40 text-xl outline-none'
                            cols="30" rows="10"
                            placeholder='What do you want to talk about'>
                        </textarea>


                    </form>

                    <div >
                        {
                            showEmojiPicker &&
                            <Picker
                                data={data}
                                onEmojiSelect={handleEmojiClick}
                            />
                        }
                    </div>





                    <ul className='grid grid-cols-3 gap-5 my-5'>
                        {
                            files.map(file => <li key={file[0].name}>
                                <img className='h-20 rounded-lg' src={file[0].preview} alt="" />
                            </li>)


                        }
                    </ul>

                    <div>
                        {
                            showUploadFile &&
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
                        <AiOutlineYoutube title='Add video' className='text-2xl   mr-2'></AiOutlineYoutube>
                        <TiShoppingBag title='Add job post' className='text-[25px]   mr-2'></TiShoppingBag>
                    </div>

                    <button className=' hover:bg-blue-800 duration-500 bg-blue-500 px-5  text-white font-bold rounded-full py-1'>Post</button>





                </form>
            </dialog>
        </div >
    )
}
