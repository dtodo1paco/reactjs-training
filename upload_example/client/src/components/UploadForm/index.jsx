import React, { Component } from 'react';

import { uploadFiles } from '../../modules/api';

import Loading from '../Loading';
import Images from '../Images';
import Buttons from '../Buttons';


class UploadForm extends Component {

  state = {
    uploading: false,
    filesUploaded: [],
  }

  onChange = async e => {
    const filesToUpload = Array.from(e.target.files)
    this.setState({ uploading: true })
    const filesUploaded = await uploadFiles(filesToUpload);
    this.setState({ uploading: false, filesUploaded })
  }

  removeImage = url => {
    const newState = {...this.state};
    newState.filesUploaded.files = this.state.filesUploaded.files.filter(file => file.file_url !== url)
    newState.filesUploaded.totalFiles = newState.filesUploaded.files.length;
    this.setState(newState);
  }

  render() {
    const { uploading, filesUploaded } = this.state;
    if (uploading) return <Loading message="uploading files" />
    return (
      <div>
        <Images images={filesUploaded} removeImage={this.removeImage} />
        <Buttons onChange={this.onChange} />
      </div>
    )
  }
}
export default UploadForm;
