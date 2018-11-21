import React from 'react'
import '../node_modules/bootstrap-css/lib/buttons.css'
import '../css/hide.css'
export default class Hide extends React.Component {
    constructor() {
        super();
    }

    handleChange = () => {
        var fileObj = document.getElementById('file_input').files;
        var url = "/css";
        var formData = new FormData();
        for(let item of fileObj){
            console.log(item)
            formData.append("file",item)
            console.log(formData)
        }
        var xhr = new XMLHttpRequest();
        xhr.onload = this.uploadComplete;
        xhr.onerror = this.uploadFailed;
        xhr.open("post", url, true);
        xhr.send(formData)
    }

    uploadComplete(evt){
        var data = JSON.parse(evt.target.responseText);
        if(data.success){
            alert('upload success');
        }else{
            alert('upload failed');
        }
    }

    uploadFailed(evt) {
        alert("上传失败！");
    }

    render() {
        return (
            <form id="uploadForm" method="post" encType="multipart/form-data">
                <span className="btn btn-success fileinput-button">
                    <span>fileLoad</span>
                    <input name='file' id="file_input" type='file' onChange={this.handleChange} multiple></input>
                </span>
            </form>
        )
    }
}