import { Avatar } from './Avatar';
import { useState } from "react";
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from '@phosphor-icons/react';

// interface CommentsProps {
//    content: string;
//    onDeleteComment: (comment: string) => void;
//  };

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
          return state + 1
        });
      }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/thailalemes.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thaila Lemes</strong>
              <time title="31 de Marco as 01:08" dateTime="2024-03-31 01:08:30">
                Cerca de 1h atras
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
        <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
