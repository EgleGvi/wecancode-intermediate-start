import React from "react";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import { addTweet } from '../../actions';

import styles from "./tweet-form.module.scss";

class TweetForm extends React.Component {

  state = {
    title: "",
    description: "",
    imageUrl: ""
  };

  saveTweet = (title, description, imageUrl) => {
    const tweet = {
            title,
            description,
            imageUrl
    };
    addTweet(tweet).then(() => this.setState(this.props.onClose));
    };

  handleSave = () => {
    const { title, description, imageUrl } = this.state;
      if (!title || !description || !imageUrl) {
        return;
       }
      this.saveTweet(title, description, imageUrl);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  render() {

    const { isOpen, onClose } = this.props;
    return (
      <Modal open={isOpen} onClose={onClose}>
        <div className={styles.modal}>
          <div className={styles.form}>
            <TextField 
                className={styles.input} 
                label="Title" 
                variant="outlined" 
                value={this.state.title}
                onChange={this.handleChange("title")}
                required />
            <TextField
                className={styles.input}
                label="Description"
                multiline
                variant="outlined"
                value={this.state.description}
                onChange={this.handleChange("description")}
                required
            />
            <TextField 
                className={styles.input} 
                label="Image url" 
                variant="outlined" 
                value={this.state.imageUrl}
                onChange={this.handleChange("imageUrl")}
                required />
          </div>
          <div className={styles.actions}>
            <Button onClick={onClose} className={styles.button} variant="outlined">Cancel</Button>
            <Button onClick={this.handleSave} className={styles.button} variant="outlined" color="primary">
            Save
          </Button>
         </div>
        </div>
      </Modal>
    );
  }
  }

export default TweetForm;