import React from 'react'
import classes from './Group.module.css'
import { eye, news1, news2, news3, news4, news5, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7 } from './../../theme/images'


let group = {
  id: 1,
  start: false,
  header: {
    image: eye,
    name: 'Star wars community',
    moto: 'Nothing is obstacle, everything is new experience.',
    description: 'The Galactic Empire, declared as the First Galactic Empire, commonly referred to as simply the Empire, and remembered as the Old Empire, was the fascist galactic government that replaced the Galactic Republic in the aftermath of the Clone Wars and ushered galactic civilization into a new age.',
    subscribersNumber: 114,
    subscribed: true,
  },
  news: [
    { id: 1, image: news1, title: 'Россия впервые в своей истории вывела на «слоновью прогулку» сразу шесть Ан-124-100 «Руслан».' },
    { id: 2, image: news2, title: '«Убить» Windows иконкой: обнаружен баг, повреждающий данные на диске при открытии любого типа файлов.' },
    { id: 3, image: news3, title: 'Первые космические туристы полетят на ракете New Shepard в этом году. Возможно, уже весной.' },
    { id: 4, image: news4, title: 'Астрофизики придумали способ красть энергию у черных дыр. Аналогичный механизм может быть причиной формирования джетов.' },
    { id: 5, image: news5, title: 'Споры с собеседником заставили некоторые области мозга работать активнее.' },
  ],
  posts: [
    { id: 1, avatar: eye, author: 'Star wars community', date: '15 october 2020', image: news1, text: 'Россия подняла в небо группу из шести военно-транспортных самолетов Ан-124-100. Такие тренировки позволяют отработать переброску на большие расстояния личного состава воинских подразделений.' },
    { id: 2, avatar: eye, author: 'Star wars community', date: '15 october 2020', image: news2, text: 'Специалисты по информационной безопасности нашли пренеприятнейшую особенность ОС Windows 10. Ее штатный драйвер файловой системы NTFS при определенных условиях реагирует крайне деструктивным образом — критически повреждает главную файловую таблицу MFT. Вызвать такое его поведение можно огромным количеством способов: от создания подготовленной веб-страницы до отправки картинок, файлов и документов жертве.' },
    { id: 3, avatar: eye, author: 'Star wars community', date: '15 october 2020', image: news3, text: 'Несмотря на атмосферу таинственности вокруг частной космической компании Джеффа Безоса, некоторая информация все же становится известна. Недавно прояснились планы Blue Origin на ближайшие запуски суборбитальной ракеты с пассажирской капсулой New Shepard: еще одно испытание финальной конфигурации в феврале и первый полет с туристами весной.' },
    { id: 4, avatar: eye, author: 'Star wars community', date: '15 october 2020', image: news4, text: 'Один из выводов Общей теории относительности: черные дыры обладают колоссальными запасами энергии, которые можно извлечь. Физики потратили немало времени, придумывая подходящие для этого способы. И здесь вопрос не только обеспечения сверхразвитой цивилизации наших далеких потомков электричеством. Если понять, как черные дыры теряют энергию, можно объяснить сразу множество парадоксов и загадочных космических явлений.' },
    { id: 5, avatar: eye, author: 'Star wars community', date: '15 october 2020', image: news5, text: 'Коллектив ученых из Йельской школы медицины (США) и Университетского колледжа Лондона (Великобритания) провели собственный эксперимент. Результаты они представили в журнале Frontiers of Human Neuroscience. Целью работы стало исследовать нейронные корреляты при разговоре двух людей, используя функциональную ближне-инфракрасную спектроскопию (технология нейровизуализации) и акустический анализ одновременных аудиозаписей. ' },
  ],
  gallery: [
    { id: 1, image: gallery1 },
    { id: 2, image: gallery2 },
    { id: 3, image: gallery3 },
    { id: 4, image: gallery4 },
    { id: 5, image: gallery5 },
    { id: 6, image: gallery6 },
    { id: 7, image: gallery7 },
  ]
}


const Group = (props) => {
  if (props.start) {
    props.setGroup(group);
  }
  return (
    <div className={classes.group}>

      <div className={classes.header}>
        <div className={classes.header_image_container}>
          <img className={classes.header_image} src={props.header.image} />
        </div>
        <div className={classes.content}>
          <div className={classes.leftSide}>
            <div className={classes.group_name}>{props.header.name}</div>
            <div className={classes.group_moto}>{props.header.moto}</div>
            <div className={classes.group_description}>{props.header.description}</div>
          </div>
          <div className={classes.rightSide}>
            <div className={classes.group_subscribers}>{props.header.subscribersNumber} subscribers</div>
            {(props.header.subscribed)
              ? <button className={classes.subscribe_button} onClick={() => props.unsubscribe()}>unsubscribe</button>
              : <button className={classes.subscribe_button} onClick={() => props.subscribe()}>subscribe</button>
            }
          </div>
        </div>
      </div>


      <div className={classes.newsList}>
        <div className={classes.newsList_title}>News of group</div>
        {props.news.map(n => {
          return (
            <div key={n.id} className={classes.news}>
              <div className={classes.news_image_container}>
                <img className={classes.news_image} src={n.image} />
              </div>
              <div className={classes.news_title}>{n.title}</div>
            </div>
          )
        })}
      </div>


      <div className={classes.posts}>
        {props.posts.map(p => {
          return (
            <div key={p.id} className={classes.post}>
              <div className={classes.post_header}>
                <div className={classes.post_avatar_container}>
                  <img className={classes.post_avatar} src={p.avatar} />
                </div>
                <div className={classes.post_author}>{p.author}</div>
                <div className={classes.post_date}>{p.date}</div>
              </div>
              <div className={classes.post_image_container}>
                <img className={classes.post_image} src={p.image} />
              </div>
              <div className={classes.post_text}>{p.text}</div>
            </div>
          )
        })}
      </div>


      <div className={classes.gallery}>
        <div className={classes.gallery_title}>{props.gallery.title}</div>
        {props.gallery.map(img => {
          return (
            <div key={img.id} className={classes.gallery_image_container}>
              <img className={classes.gallery_image} src={img.image} />
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Group;