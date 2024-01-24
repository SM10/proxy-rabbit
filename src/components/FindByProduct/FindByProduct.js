import "./FindByProduct.scss"
import { useState } from "react"

function FindByProduct(){

    const [searchInput, setSearchInput] = useState('')

    const onSearchChange = (e) => {
        setSearchInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (<main className="findbyproduct main">
        <section className="findbyproduct-find">
            <div className="findbyproduct-find-head">
                <hr className="findbyproduct-find-head__line--top" />
                <div className="findbyproduct-find-head-content">
                    <h1 className="findbyproduct-find-head__title">Find a Product</h1>
                    <form className="findbyproduct-find-head-search" onSubmit={onSubmit}>
                        <input className="findbyproduct-find-head-search__input" name="search" placeholder="Search" onChange={onSearchChange} value={searchInput}></input>
                        <button className="findbylocation-find-head-search__button" type="submit" >Go!</button>
                    </form>
                </div>
                <hr className="findbyproduct-find-head__line--bottom" />
            </div>
            <div className="findbyproduct-find-body">

            </div>
        </section>
        <section className="findbyproduct-popular">
            <div className="findbyproduct-popular-head">
                <hr className="findbyproduct-popular-head__line--top" />
                <h2 className="findbyproduct-popular-head__title">Most Popular</h2>
                <hr className="findbyproduct-popular-head__line--bottom" />
            </div>
            <div className="findbyproduct-popular-body">

            </div>
        </section>
        <section className="findbyproduct-discovery">
            <div className="findbyproduct-discovery-head">
                <hr className="findbyproduct-discovery-head__line--top" />
                <h2 className="findbyproduct-discovery-head__title">Discover These Products</h2>
                <hr className="findbyproduct-discovery-head__line--bottom" />
            </div>
            <div className="findbyproduct-discovery-body">

            </div>
        </section>
    </main>)
}

export default FindByProduct;