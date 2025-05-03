import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
{
    id: 1,
    author: {
        avatarUrl: "https://github.com/thailalemes.png",
        name: "Thaila Lemes",
        role: "Squad Leader @CI&T",

    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-04-04 20:08:00'),
},
{
    id: 2,
    author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Thaila Telles",
        role: "Developer @CI&T",

    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-03-03 20:08:00'),
}
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  );
}
 