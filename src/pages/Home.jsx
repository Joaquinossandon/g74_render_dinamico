import { Container, Row, Col } from "react-bootstrap"
import { productos } from "../assets/productos"
import ProductCard from "../components/ProductCard"
import { useState } from "react"

export const Home = () => {
    const [cart, setCart] = useState([])

    const addToCart = (producto) => {
        setCart((prev) => [...prev, producto])
    }

    const mapeoProductos = productos.map((producto) => {
        return (
            <Col key={producto.id}>
                <ProductCard productInfo={producto} add={addToCart} />
            </Col>
        )
    })

    console.log(mapeoProductos)
    return (
        <Container >
            <Row className="g-4" xs={1} md={2} lg={4}>
                {mapeoProductos}
            </Row>
            {cart.map(prodCart => <li key={prodCart.id}>{prodCart.nombre}</li>)}
        </Container>
    )
}
