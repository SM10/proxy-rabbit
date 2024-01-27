import "./FindByProduct.scss"
import { useState, useEffect } from "react"
import ProductCard from "../ProductCard/ProductCard"
import mascot from "../../assets/images/proxy-rabbit-mascot.png"
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import axios from "axios";

function FindByProduct(){

    const [searchInput, setSearchInput] = useState('')
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [searchedProductsHtml, setSearchedProductsHtml] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [popularProductsHtml, setPopularProductsHtml] = useState([]);
    const [discoverProducts, setDiscoverProducts] = useState([]);
    const [discoverProductsHtml, setDiscoverProductsHtml] = useState([]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(()=>{
        let productCardBatches = [];
        let counter = 0;
        while(counter < discoverProducts.length){
            productCardBatches.push((<div className="findbyproduct-find-body-slide-batch">
                {(()=>{
                    const productArray = []
                    let innerCounter = 0
                    while(counter < discoverProducts.length && innerCounter < 3){
                        productArray.push(<ProductCard product={{image: discoverProducts[counter].image_url, name:discoverProducts[counter].name, description: discoverProducts[counter].country_name}} />   )
                        innerCounter++
                        counter++
                    }
                    return productArray
                })()}
            </div>))
        }
        setDiscoverProductsHtml(productCardBatches)
    }, [discoverProducts])

    useEffect(()=>{
        let productCardBatches = [];
        let counter = 0;
        while(counter < popularProducts.length){
            productCardBatches.push((<div className="findbyproduct-find-body-slide-batch">
                {(()=>{
                    const productArray = []
                    let innerCounter = 0
                    while(counter < popularProducts.length && innerCounter < 3){
                        productArray.push(<ProductCard product={{image: popularProducts[counter].image_url, name:popularProducts[counter].name, description: popularProducts[counter].country_name}} />   )
                        innerCounter++
                        counter++
                    }
                    return productArray
                })()}
            </div>))
        }
        setPopularProductsHtml(productCardBatches)
    }, [popularProducts])

    useEffect(()=>{
            let productCardBatches = [];
            let counter = 0;
            while(counter < searchedProducts.length){
                productCardBatches.push((<div className="findbyproduct-find-body-slide-batch">
                    {(()=>{
                        const productArray = []
                        let innerCounter = 0
                        while(counter < searchedProducts.length && innerCounter < 3){
                            productArray.push(<ProductCard product={{image: searchedProducts[counter].image_url, name:searchedProducts[counter].name, description: searchedProducts[counter].country_name}} />   )
                            innerCounter++
                            counter++
                        }
                        return productArray
                    })()}
                </div>))
            }
            setSearchedProductsHtml(productCardBatches)
    }, [searchedProducts])

    useEffect(()=>{
        (async ()=>{
            try{
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`)
                setSearchedProducts(response.data);
            }catch(error){
                console.log(error)
            }
        })();
        (async ()=>{
            try{
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/popular`)
                setPopularProducts(response.data);
            }catch(error){
                console.log(error)
            }
        })();
        (async ()=>{
            try{
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/discover`)
                setDiscoverProducts(response.data);
            }catch(error){
                console.log(error)
            }
        })();
        

        function onWindowResize(){
            setScreenWidth(window.innerWidth);
        }

        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", onWindowResize)
        return () => window.removeEventListener("resize", onWindowResize)
    }, [])

    const onSearchChange = (e) => {
        setSearchInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    //2 cards on mobile, 3 on tablet
    return (<main className="findbyproduct main">
        <section className="findbyproduct-find">
            <div className="findbyproduct-find-head">
                <hr className="findbyproduct-find-head__line--top" />
                <div className="findbyproduct-find-head-content">
                    <h1 className="findbyproduct-find-head__title">Find a Specialty</h1>
                    <form className="findbyproduct-find-head-search" onSubmit={onSubmit}>
                        <input className="findbyproduct-find-head-search__input" name="search" placeholder="Search" onChange={onSearchChange} value={searchInput}></input>
                        <button className="findbyproduct-find-head-search__button" type="submit" >Go!</button>
                    </form>
                </div>
                <hr className="findbyproduct-find-head__line--bottom" />
            </div>
            <div className="findbyproduct-find-body">
                <Slide className="findbyproduct-find-body-slide" duration={360000}> 
                    {searchedProductsHtml}
                                     
                </Slide>
            </div>
        </section>
        <section className="findbyproduct-popular">
            <div className="findbyproduct-popular-head">
                <hr className="findbyproduct-popular-head__line--top" />
                <div className="findbyproduct-popular-head-content">
                    <h2 className="findbyproduct-popular-head__title">Most Popular</h2>
                </div>
                <hr className="findbyproduct-popular-head__line--bottom" />
            </div>
            <div className="findbyproduct-popular-body">
            <Slide className="findbyproduct-popular-body-slide" duration={360000}>
                {popularProductsHtml}
            </Slide>
            </div>
        </section>
        <section className="findbyproduct-discovery">
            <div className="findbyproduct-discovery-head">
                <hr className="findbyproduct-discovery-head__line--top" />
                <div className="findbyproduct-discovery-head-content">
                    <h2 className="findbyproduct-discovery-head__title">Discover These Specialties</h2>
                </div>
                <hr className="findbyproduct-discovery-head__line--bottom" />
            </div>
            <div className="findbyproduct-discovery-body">
            <Slide className="findbyproduct-discovery-body-slide" duration={360000}>
                {discoverProductsHtml}
            </Slide>
            </div>
        </section>
    </main>)
}

export default FindByProduct;