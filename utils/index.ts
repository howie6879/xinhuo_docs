export const generatePath = (data) => {
  if (data['/post/'][0] && data['/post/'][0]?.items) {
    const resultList = data['/post/'][0]?.items?.reduce((acc, nowItem) => {
      const path = `/post/${nowItem.text}/`
      const itemsList = handleItems(nowItem)
      acc[path] = {
        ...nowItem,
        items: itemsList,
      }

      return acc
    }, {})
    return resultList
  } else return data
}

const handleItems = (contents) => {
  //去掉序号
  const itemsList = contents?.items.map((nowItem) => {
    let newText = nowItem.text
    if (nowItem.text.includes('.')) {
      const textList = nowItem.text?.split('.')
      textList.shift()
      newText = textList.join('.')
    }

    let category = nowItem
    if (nowItem?.items) {
      category = handleItems(nowItem)
      return { ...nowItem, items: category, text: newText }
    } else return { ...nowItem, text: newText }
  })

  return itemsList
}
