import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
export function Posts() {
 
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src="https://avatars.githubusercontent.com/u/170682367?v=4" />
          <div className={styles.authorInfo}>
            <strong>Opa meu amigo</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="23 de maio as 20:41h" datetTime="2024-05-23  20:41:10">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.countent}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> {""}
          <a href="#"> #nlw</a>
          {""}
          <a href="#">#rocketseat</a> {""}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback </strong>

        <textarea placeholder="Deixe um comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
