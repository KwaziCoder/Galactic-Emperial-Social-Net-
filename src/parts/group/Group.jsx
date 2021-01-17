import React from 'react'
import classes from './Group.module.css'

const Group = (props) => {
  return (
    <div className={classes.group}>

      <div className={classes.header}>
        <div className={classes.header_image_container}>
          <img className={classes.header_image} src={props.header.image} />
        </div>
        <div className={classes.content}>
          <div className={classes.group_name}>{props.header.name}</div>
          <div className={classes.group_moto}>{props.header.moto}</div>
          <div className={classes.group_description}>{props.header.description}</div>
          <div className={classes.group_subscribers}>{props.header.subscribersNumber}</div>
          {(props.header.subscribed) 
              ? <button className={classes.subscribe_button} onClick={() => props.unsubscribe()}>unsubscribe</button> 
              : <button className={classes.subscribe_button} onClick={() => props.subscribe()}>subscribe</button>
          }
        </div>
      </div>


      <div className={classes.newsList}>
          <div className={classes.news_title}>News of group</div>
          {props.news.map( n => {
            return (
              <div key={n.id} className={classes.news}>
                <div className={classes.news_image_container}>
                  <img className={classes.news_image} src={n.image}/>
                </div>
                <div className={classes.news_title}>{n.title}</div>
              </div>
            )
          })}
      </div>


      <div className={classes.posts}>
        {props.posts.map( p => {
          return (
            <div key={classes.id} className={classes.post}>
              <div className={classes.post_avatar_container}>
                <img className={classes.post_avatar} src={p.avatar}/>
              </div>
              <div className={classes.post_author}>{p.author}</div>
              <div className={classes.post_date}>{p.date}</div>
              <div className={classes.post_image_container}>
                <img className={classes.post_image} src={p.image}/>
              </div>
              <div className={classes.post_text}>{p.text}</div>
            </div>
          )
        })}
      </div>


      <div className={classes.gallery}>
        <div className={classes.gallery_title}></div>
        {props.gallery.map( img => {
          return (
            <div key={img.id} className={classes.gallery_image_container}>
              <img className={classes.gallery_image} src={img.image}/>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Group;