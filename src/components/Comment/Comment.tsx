import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';

interface props {
    comment: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ comment, onDeleteComment }: props) {

    const [likeCount, setLikeCount] = useState(0)


    function handleDeleteComment(){
        onDeleteComment(comment)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/48698617?v=4" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}> 
                           <strong>Igor Lacerda Santos</strong> 
                           
                            <time title='11 de Maio ás 08:50' dateTime='2022-05-11 08:50:30'>
                            Cerca de há 1h atrás
                            </time>
                        </div>
                        
                        <button onClick={handleDeleteComment} title='Deletar comentário'> 
                                <Trash size={24}/>
                        </button>

                    </header>

                    <p>{comment}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}