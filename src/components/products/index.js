import React, { useEffect } from 'react'
import "./index.css"
import { useDispatch ,useSelector} from 'react-redux'
import ProductService from '../../service/product-service'
const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        ProductService.getAllProduct().then((response) => {
            dispatch(response.data);
            // console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    }, []);
   
   const products = useSelector(state => state.value);
    return (
        <div className='container container-c'>
            {/* <div className='dis-flex'>
                {
                    products.map(
                        product =>
                            <div className="card product-card  card_div" style={{ width: "15rem", margin: "0.1rem" }}
                                key={product.isbn13}>
                                <img className="card-img-top  card-img-top-img " style={{ width: "15rem", height: "10rem", margin: "0.1rem" }}
                                    src={product.image} alt="Card image cap" />
                                <div className="card-body card-body-title" style={{ width: "15rem", margin: "0.1rem" }}>
                                    <p className="card-title">{product.title}</p>
                                    <p className="card-subtitle mb-2 text-muted">{product.subtitle}</p>
                                </div>
                                <p className="card-text">{product.price}</p>
                                <button type="button" onClick={function () {
                                    let jsonData = { "isbn13": product.isbn13 }
                                    CardService.addToCard(jsonData)

                                    setCardArr(jsonData)
                                }
                                } className="btn btn-success button_add" style={{ marginBottom: "0.5rem" }}>Add to card
                                </button>
                            </div>
                    )
                }
            </div> */}


            {/*<div className='dis-20'>*/}
            {/*    <ul>*/}
            {/*    {  cards.map(*/}
            {/*        card =>*/}
            {/*        <li>*/}
            {/*            <div className="card " key={card.id} style={{ width: "10rem", margin: "",height: "10rem" }}>*/}
            {/*                <div className="card-body"   >*/}
            {/*                    <h5 className="card-title">{card.title}</h5>*/}
            {/*                    <p className="card-text">{card.price}</p>*/}
            {/*                    <p className="card-text">{card.amount}</p>*/}
            {/*                    <a href="#" className="btn btn-primary">Button</a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*    )*/}

            {/*    }*/}

            {/*    </ul>*/}
            {/*</div>*/}


        </div>
    )
}

export default Products;
