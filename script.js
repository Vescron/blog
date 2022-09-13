function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("menu").style.visibility="hidden";
  }
  
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("menu").style.visibility="visible";
  }

function setActive(id){
  element = document.getElementById(id)
  element.classList.add('active');

}
function sidebarSetup(list){
  pages=document.getElementById("sidebar")
  ul=document.createElement('ul')
  ul.style='list-style-type:none ;'
  navigate=document.createElement('a')
  navigate.id='other-shit'
  navigate.innerHTML='&#x27A4; Navigate'
  closebtn=document.createElement('a')
  closebtn.innerHTML = '&times;'
  closebtn.classList.add('closebtn')
  closebtn.href='javascript:void(0)'
  for(var i=0;i<list.length;i++){
    const element = list[i]
    li = document.createElement('li')
    link = document.createElement('a')
    link.id = element[2]
    link.innerHTML = element[0]
    link.href = element[1]
    li.appendChild(link)
    ul.appendChild(li)
  }
  closebtn.addEventListener("click",function(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("menu").style.visibility="visible";
  })
  pages.appendChild(closebtn)
  pages.appendChild(navigate)
  pages.appendChild(ul)
}
sidebar=[
  ['About','vescron.social/','about'],
  ['Random Poems','vescron.social/pages/poem.html','poem'],
  ['Scribbles','vescron.social/pages/drawings.html','drawings'],
  ['About (but emo)','vescron.social/pages/about(but emo).html','about(but emo)'],
  ['Blog','/','blog']
]

sidebarSetup(sidebar)