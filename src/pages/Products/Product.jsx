import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contextapi/Appcontext'
import './Product.css'
import GridView from './GridView';
import ListView from './ListView';
import { BsFillGridFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa'
import FilterSelect from './FilterSelect';
import { FilterContext } from '../../contextapi/FilterContext';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';


const Product = () => {
    const { filterProduct, sortByCategory, clearFilter } = useContext(FilterContext);
    const [gridView, setGridView] = useState(true);
    const { product } = useContext(AppContext);
    const [data, setdata] = useState(product)

    useEffect(() => {
        (filterProduct.length != 0) ? setdata(filterProduct) : setdata(product);
    }, [filterProduct]);

    const categories = ["mobile", "laptop", "computer", "accessories", "watch"];
    return (
        <>
            <div className='row product-content'>
                <div className="col-4">
                    <div className='my-5 mx-2 bg-white w-100 d-flex flex-column align-items-center ' >
                        <h5 className='p-2 '>Shop By Categories</h5>
                        <div className='d-flex flex-column mx-3 py-2'>
                            {
                                categories.map((ele) => {
                                    return (<Link className="text-dark " onClick={() => { sortByCategory(ele) }}>
                                        {ele}
                                    </Link>)
                                })
                            }
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-dark' onClick={() => {
                            clearFilter()
                        }}>Clear Filter</button>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row d-flex  my-4  w-100">
                        <div className='product-upper-content bg-white d-flex align-items-center m-3 justify-content-between' style={{ borderRadius: "0.4rem" }}>
                            <FilterSelect />
                            <p className='m-2'>{data.length} Products</p>
                            <div className='view'>
                                <BsFillGridFill size={"1.5rem"} className='m-3' onClick={() => {
                                    setGridView(true);
                                }} />
                                <FaList size={"1.5rem"} className='mx-2' onClick={() => {
                                    setGridView(false);
                                }} />
                            </div>
                        </div>
                        {
                            (data.length) ? (data.map((ele) => {
                                if (gridView === true) return <GridView
                                    image={ele.image}
                                    id={ele.id}
                                    name={ele.name}
                                    price={ele.price}
                                    description={ele.description} />
                                else return <ListView
                                    image={ele.image}
                                    id={ele.id}
                                    name={ele.name}
                                    price={ele.price}
                                    description={ele.description}
                                />
                            })) : (<Loading />)
                        }

                    </div>
                </div>
            </div >
        </>
    )
}

export default Product
