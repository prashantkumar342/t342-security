const navMenuUl = document.querySelector('.nav-bar').querySelector('.nav-menu-ul')//nav-menu-ul

function navMenuAppear() {
  navMenuUl.classList.toggle('active') //nav-menu-ul active class toggle
  document.querySelector('.content-list').querySelector('.topic-list').classList.remove('active')
}

//window.onscroll
window.addEventListener('scroll', () => {
  if (pageYOffset >= 2) {
    navMenuUl.classList.remove('active')
  }
})

//topic list button
courseTopicListAppear = () => {
  document.querySelector('.content-list').querySelector('.topic-list').classList.toggle('active')
  navMenuUl.classList.remove('active')
}
courseTopicListClose = () => {
  document.querySelector('.content-list').querySelector('.topic-list').classList.remove('active')
}

//for each at nav-menu-list
navMenuUl.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    navMenuUl.classList.remove('active')
  })
})

//for each loop at topic list
document.querySelector('.content-list').querySelector('.topic-list').querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.content-list').querySelector('.topic-list').classList.remove('active')
  })
})

//topic list button
const topicListBtn = document.querySelector('.content-list').querySelector('.topic-list').querySelectorAll('li')
const content = document.querySelectorAll('.course-content')
topicListBtn.forEach(topic => {
  topic.addEventListener('click', () => {
    content.forEach(item => {
      item.style.display = 'none'
    })
    const contentId = document.getElementById(topic.dataset.course)
    contentId.style.display = 'block'
    topicListBtn.forEach(background => {
      background.style.background = 'none'
    })
    topic.style.background = 'rgba(255, 81, 0, 0.61)'
  })
})