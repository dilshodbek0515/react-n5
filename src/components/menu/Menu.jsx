import { useEffect, useState } from "react"
import "./Menu.scss"
import axios from "axios"
const BASE_URL = "https://dummyjson.com"
const Menu = () => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        axios
            .get(`${BASE_URL}/products`)
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
            .finally()
    }, [])

    const productsItems = products?.map((pro) => (
        <div className="pro_card" key={pro.id}>
            <img className="pro_img" src={pro.images[0]} alt="pro_img" />
            <div className="name_wrap">
                <h3>{pro.title}</h3>
                <strong>{pro.price}$</strong>
            </div>
            <p className="pro_desc">{pro.description}</p>
        </div>
    ))
    return (
        <div className="menu">
            <p className="menu_name">Menu</p>
            <h2 className="menu_title">Food Full of treaty Love</h2>
            <p className="menu_desc">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            <div className="menu_wrapper">
                {productsItems}
            </div>
            <button className="more">Learn More</button>
        </div>
    )
}

export default Menu