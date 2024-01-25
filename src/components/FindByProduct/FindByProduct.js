import "./FindByProduct.scss"
import { useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import mascot from "../../assets/images/proxy-rabbit-mascot.png"
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function FindByProduct(){

    const [searchInput, setSearchInput] = useState('')

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
                    <h1 className="findbyproduct-find-head__title">Find a Product</h1>
                    <form className="findbyproduct-find-head-search" onSubmit={onSubmit}>
                        <input className="findbyproduct-find-head-search__input" name="search" placeholder="Search" onChange={onSearchChange} value={searchInput}></input>
                        <button className="findbyproduct-find-head-search__button" type="submit" >Go!</button>
                    </form>
                </div>
                <hr className="findbyproduct-find-head__line--bottom" />
            </div>
            <div className="findbyproduct-find-body">
                <Slide className="findbyproduct-find-body-slide"> 
                    <div className="findbyproduct-find-body-slide-batch">
                    <ProductCard product={{image: mascot, name:"Proxy Rabbit", description: "The website mascot"}} />   
                    <ProductCard product={{image: mascot, name:"Proxy Rabbit", description: "The website mascot"}} />
                    <ProductCard product={{image: mascot, name:"Proxy Rabbit", description: "The website mascot"}} />
                    </div>
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
                <ProductCard product={{image: mascot, name:"Proxy Rabbit", description: "The website mascot"}} />
            </div>
        </section>
        <section className="findbyproduct-discovery">
            <div className="findbyproduct-discovery-head">
                <hr className="findbyproduct-discovery-head__line--top" />
                <div className="findbyproduct-discovery-head-content">
                    <h2 className="findbyproduct-discovery-head__title">Discover These Products</h2>
                </div>
                <hr className="findbyproduct-discovery-head__line--bottom" />
            </div>
            <div className="findbyproduct-discovery-body">
                <ProductCard product={{image: mascot, name:"Proxy Rabbit", description: "The website mascot"}} />
            </div>
        </section>
    </main>)
}

export default FindByProduct;