import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'


interface author {
    avatarUrl: string,
    name: string,
    role: string
}

interface content {
    type: 'paragraph' | 'link'
    content: string
}

export interface PostType {
    id: number
    author: author
    content: content[]
    publishedAt: Date
}

interface props {
  post: PostType
}


export function Post({ post }: props) {

    const [comments, setComments] = useState(['Post muito bacana, hein?'])
    const [newComment, setNewComment] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newComment])
        setNewComment('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event?.target?.setCustomValidity('')
        setNewComment(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event?.target?.setCustomValidity('')

        console.log(event.target.value)
    }

    function deleteComment(commentToDelete: string) {

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newComment.length === 0

    return(
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src={post.author.avatarUrl}/>
                        <div className={styles.authorInfo}>
                            <strong>{post.author.name}</strong>
                            <span>{post.author.role}</span>
                        </div>
                    </div>

                    <time title='11 de Maio ás 08:13' dateTime='2022-05-11 08:13:30'>
                        {publishedDateFormatted}
                    </time>
                </header>


                <div className={styles.content}>
                    {post.content.map(line => {
                        if(line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        } else if(line.type === 'link'){
                            return <p key={line.content}> <a href="">{line.content}</a> </p>
                        } 
                    })}
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixa seu feedback!</strong>
                    <textarea 
                        name='comment'
                        placeholder='Deixe um comentario'
                        value={newComment}
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        required
                    />
                    <footer>
                         <button type='submit' disabled={isNewCommentEmpty}> Publicar </button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return (
                        <Comment 
                        key={comment} 
                        comment={comment} 
                        onDeleteComment={deleteComment}/>)
                    })}
                </div>

            </article>
        </>
    )
}
