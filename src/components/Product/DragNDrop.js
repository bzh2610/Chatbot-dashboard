import React, { useEffect, useState } from "react";
import { useDropzone } from 'react-dropzone';


const thumbsContainer = {
    display: 'inline-flex',
    verticalAlign: 'top',
    flexDirection: 'row',
    flexWrap: 'wrap'
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

function DragNDrop(){
const [files, setFiles] = useState([]);
        const { getRootProps, getInputProps } = useDropzone({
            accept: 'image/*',
            onDrop: acceptedFiles => {
                setFiles(acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
            }
        });

        const thumbs = files.map(file => (
            <div style={thumb} key={file.name}>
                <div style={thumbInner}>
                    <img
                        src={file.preview}
                        style={img}
                    />
                </div>
            </div>
        ));

        useEffect(() => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach(file => URL.revokeObjectURL(file.preview));
        }, [files])


        return (
            <section className="container">
                <aside style={thumbsContainer}>
                    {thumbs}
                </aside>

                <div style={{ padding: '10px', width: "100px", height: "100px", border: "1px dashed grey", display: "inline-flex", verticalAlign: "top" }} {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    {
                        <p>
                            <i
                                className="text-info ni ni-cloud-upload-96"></i> Upload</p>
                    }


                </div>

            </section>
        );
    }



export default DragNDrop;