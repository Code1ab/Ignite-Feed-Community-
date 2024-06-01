import { Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Heart } from "@phosphor-icons/react/dist/ssr";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/code1ab.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndtime}>
              <strong>Codelab</strong>
              <time
                title="23 de maio as 20:41h"
                datetTime="2024-05-23  20:41:10"
              >
                cerca de 3h atrás
              </time>
            </div>
            <button title="Deletar">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom</p>
        </div>
        <footer>
          <button>
            <Heart /> Like <span>40</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
