export { data }

import axios from "axios"

const data = async () => {
  const response = await axios.get(`https://bochica.armatucompu.co/api/blog/last?limit=3`)
    const { data } = response.data
    let dataBlog = minimize(data)

  return { dataBlog }
}

function minimize(data) {
  let newData = []
  data?.forEach((element)=>{
    const { id, title, img, categoryId, short, createdBy } = element
    element = { id, title, img, categoryId, short, createdBy }
    element.myDate = new Date(element?.createdBy?.createdAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
    newData.push(element)
  })

  return newData
}
