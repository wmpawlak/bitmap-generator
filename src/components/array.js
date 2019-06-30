import React from "react";
import { saveAs } from 'file-saver';

const Downloadbutton2 = () => {

    const downloadFile = async () => {
        const arr = [['bacon',232,12], ['letuce',435,'wefwef'], [54,'tomatoes']]
        const myArr = JSON.stringify(arr); 
        const fileName = "file";
        const fileToSave = new Blob([myArr], {
            type: 'application/json',
            name: fileName
        });
        
        saveAs(fileToSave, fileName);
    }

    const downloadBtn = () => {
        return (
            <div>
                <button onClick={downloadFile}>Download</button>
            </div>
        );
    };

    return (
        <div>
            {downloadBtn()}
        </div>
    );
};


export default Downloadbutton2;