import { Header } from "./components/Header/Header";
import { PostType, Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/48698617?v=4',
      name: 'Igor Lacerda Santos',
      role: 'Desenvolvedor de Sistemas'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera', },
      {type: 'paragraph', content: 'Esse é o tal do reactJs', },
      {type: 'link', content: 'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2022-06-21 20:00:00')
  }
]

export function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
          return(
            <Post 
            key={post.id} 
            post={post}
            />
          )
        })}
      </main>
    </div>
   </>
  )
}

