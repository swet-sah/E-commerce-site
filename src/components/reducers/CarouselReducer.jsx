const CarouselReducer = (state, action) => {
    switch (action.type) {
        case "IS_LOADING":

            return (
                {
                    ...state,
                    isLoading: true,
                }
            )
        case "ERROR_IN_DATA":

            return (
                {
                    ...state,
                    isLoading: false,
                    isError: true
                }
            )
        case "API_ALL_DATA":
            const featured = action.payload.filter((element) => {
                return element.featured === true;
            })
            return (
                {

                    ...state,
                    isLoading: false,
                    isError: false,
                    product: action.payload,
                    featuredProduct: featured
                }
            )
        case "IS_SINGLE_LOADING":
            return (
                {
                    ...state,
                    isSingleLoading: true
                }
            )

        case "SINGLE_PRODUCT_DATA":
            return (
                {
                    ...state,
                    isSingleLoading: false,
                    singleProduct: action.payload
                }
            )


        default:
            return state;   
    }
}

export default CarouselReducer
