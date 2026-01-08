import useFetch from "./hooks"




export default function UseFetchHookTest() {

    const { data, pending, error } = useFetch('https://dummyjson.com/products', {})
    return (
        <>
            <div className="main">
                <button>Scroll To Bottom</button>

                <div className="main-box">

                    <h1>Use Fetch Hook</h1>

                    {
                        error
                            ? <p>{error}</p>
                            : pending
                                ? <h2>Loading, Please Wait....</h2>
                                : <div className="main-products">
                                    {
                                        (data && data?.products)
                                        && data.products.map(el => <p key={el.id}>{el.title}</p>)

                                    }
                                </div>


                    }

                </div>
                
                

            </div>
        </>
    )
}









