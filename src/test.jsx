import useFetch from "."




export default function UseFetchHookTest() {

    const { data, pending, error } = useFetch('https://dummyjson.com/products', {})
    console.log(data, pending, error);
    return (
        <>
            <div className="main">
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
        </>
    )
}









