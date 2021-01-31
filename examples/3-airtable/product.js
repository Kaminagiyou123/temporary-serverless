const result=document.querySelector('.result')
const fetchProduct= async()=>{
    result.innerHTML=`<h2>Loading</h2>`
    try {
        const id=window.location.search; 
        // const {data:{fields}}= await axios.get(`/api/3-product${id}`)
        const {data:{fields}}= await axios.get(`/api/3-z-complete${id}`)
        const {name,description,price,image}=fields
        console.log(fields)
result.innerHTML=`
<article class="product">
    <img class="product-img"
    src=${image[0].url}
    alt="utopia sofa"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${description}</p>
    </div>
  </article>
`

    } catch(error){
        result.innerHTML=`<h3>${error.response.data}`

    }


}
fetchProduct()