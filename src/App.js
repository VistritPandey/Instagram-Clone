import { useState, useEffect }  from 'react';
import './App.css';
import Post from "./Post"
import { db } from './firebase'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
      db.collection('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        })))
      })
  },[]);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
      </div>

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
