/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"VBw73p4gJQBjmDXO","label":"workflow","bookmarks":[{"id":"tjYdlVWo0dsM1bE1","label":"yandex/mail","url":"https://mail.yandex.com/"},{"id":"hlRhO9IhSTQ2QBYq","label":"yandex/disc","url":"https://disk.yandex.com/client/disk"},{"id":"K5MsbqXKSKpwVdNb","label":"fineBI","url":"http://10.11.32.51:8080/webroot/decision/"},{"id":"YbgHPhbTErr7FwhZ","label":"slackRB","url":"https://flant.slack.com/"}]},{"id":"iwFz30iMuAf6J2pT","label":"social","bookmarks":[{"id":"YXgeijjpeXY5XtYp","label":"vk","url":"https://vk.com/dessssai"},{"id":"i6hW2NInnGdwIuD3","label":"telegram","url":"https://web.telegram.org/"},{"id":"nHfo1eqCH0iYgBz9","label":"rocket21","url":"https://rocketchat-student.21-school.ru/home"}]},{"id":"faoOi3vgoPWK4zMl","label":"design","bookmarks":[{"id":"IoFnwB9jee2kNdME","label":"happy hues","url":"https://www.happyhues.co/"},{"id":"QEuQCt9UHQwJkfrS","label":"figma","url":"https://www.figma.com/"},{"id":"vPxHGqI3v5bBri4C","label":"canva","url":"https://www.canva.com"},{"id":"Quvauv2mfQMSYazW","label":"feather icons","url":"https://feathericons.com/"}]},{"id":"OtrQvF2YT0STIi2g","label":"development","bookmarks":[{"id":"H4i1D528Mk8xwEB5","label":"school21","url":"http://edu.21-school.ru/"},{"id":"xZtMSwwFeb6IFA6D","label":"ecole42","url":"https://projects.intra.42.fr"},{"id":"Yi2ILjchzK4ZdeZD","label":"github","url":"https://github.com/desssai"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
