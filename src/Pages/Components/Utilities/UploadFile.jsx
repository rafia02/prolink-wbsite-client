import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export const UploadFile = ({setFiles}) => {


    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles?.length) {
            setFiles(previousFiles => [
                ...previousFiles,
                acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
            ])
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
          'image/*': []
        },
        maxSize: 1024 * 1000,
        onDrop
      })


      
    //   useEffect(() => {
    //     // Revoke the data uris to avoid memory leaks
    //     return () => files.forEach(file => URL.revokeObjectURL(file.preview))
    //   }, [files])

    //   const removeFile = name => {
    //     setFiles(files => files.filter(file => file.name !== name))
    //   }


    //   const removeAll = () => {
    //     setFiles([])
    //     setRejected([])
    //   }


    //   const removeRejected = name => {
    //     setRejected(files => files.filter(({ file }) => file.name !== name))
    //   }



    return (
        <form action="">
            <div {...getRootProps({
                className: "border border-blue-200 p-14 rounded-xl bg-blue-50 text-center"
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
