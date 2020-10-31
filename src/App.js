import React from "react"
import { useState, useEffect }  from 'react';
import './App.css';
import Post from "./Post"
import { db } from './firebase'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false)

  useEffect(() =>{
      db.collection('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        })))
      })
  },[]);

  const signUp () => {

  }

  return (
    <div className="app">
    
    <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Sign Up/ Login</h2>
        </div>
      </Modal>
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
      </div>
      <Button>Sign Up/In</Button>

      {
        posts.map(({id, post} )=> (
          <Post 
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          />
        ))
      }
      
      <Post 
      username="SabChangaSi" 
      caption="Wah Modi Ji Wah" 
      imageUrl="https://m.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/06/20/Pictures/_3fe51840-b31f-11ea-8315-f58cec6734ed.jpg"/>
      <Post 
      username="NameBadalneWala" 
      caption="I'm a rider, provider" 
      imageUrl="https://images.newindianexpress.com/uploads/user/imagelibrary/2017/3/19/w600X390/Tiger.jpg"
      />
      <Post 
      username="KahiBhiSarkarBanaDu" 
      caption="Aap Chronology samajhiye" 
      imageUrl="https://gumlet.assettype.com/freepressjournal%2F2019-12%2F082ca6d2-5f51-4059-915b-e7d3bd8bb58c%2FShah.jpg?w=400&dpr=2.6"
      />
      <Post 
      username="ChotaBheem" 
      caption="Trying to figure out, aalo se sona nikalne wali machine kaha lagau" 
      imageUrl="https://www.oneindia.com/img/2018/08/rahulgandhi-1535080612.jpg"
      />
    </div>
  );
}

export default App;
