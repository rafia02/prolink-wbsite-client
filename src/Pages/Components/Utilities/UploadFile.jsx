import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export const UploadFile = ({files, setFiles }) => {


    const onDrop = useCallback(acceptedFiles => {
        
        if (acceptedFiles?.length) {
            setFiles(previousFiles => [
                ...previousFiles,
                acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
            ])
        }

        
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })









    return (
        <form action="">
            <div {...getRootProps({
                className: "border border-blue-100  p-14 rounded-xl bg-blue-50 text-center"
            })}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop files here, or click to select files</p>
                }
            </div>


        </form>
    )
}
