import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductCard = ({ productInfo, add }) => {

    const disponible = productInfo.disponibilidad === 'En stock'
    const classes = disponible ? 'bg-primary' : 'bg-danger'

    const categoriasMap = productInfo.categorias.map(categoria => <li key={categoria}>{categoria}</li>)

    return (
        <Card className={`${classes} text-light`}>
            <Card.Body>
                <Card.Title>{productInfo.nombre}</Card.Title>
                <Card.Text>
                    {new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(
                        productInfo.precio,
                    )}
                </Card.Text>
                <Card.Text>
                    {productInfo.stock}
                </Card.Text>
                <ul>
                    {categoriasMap}
                </ul>
                <a className="btn btn-primary" href={`/producto/${productInfo.id}`}>ver más</a>
                <Button onClick={() => add(productInfo)}>Agregar</Button>
            </Card.Body>
        </Card>
    )
}

ProductCard.propTypes = {
    productInfo: PropTypes.shape({
        id: PropTypes.string,
        nombre: PropTypes.string,
        precio: PropTypes.number,
        sku: PropTypes.string,
        stock: PropTypes.number,
        disponibilidad: PropTypes.string,
        categorias: PropTypes.array,
    }),
    add: PropTypes.func
}

export default ProductCard