

const FilterReducer = (state, action) => {
    switch (action.type) {
        case "SET_FILTERS":
            return ({
                ...state,
                filters: action.payload
            })
        case "SEARCH_FILTERS":
            const { product, input } = action.payload
            const requiredpr = [...product].filter((elem) => {
                return elem.name.toLowerCase().includes(input)
            })
            return ({
                ...state,
                filterProduct: requiredpr
            })
        case "CLEAR_FILTER":
            return ({
                ...state,
                filterProduct: [...action.payload]
            })
        case "GET_CATEGORY":
            return ({
                ...state,
                catetype: action.payload
            })
        case "LOADING_FILTER_PRODUCT":
            return (
                {
                    ...state, typetosort: "allproduct"
                }
            )
        case "GET_SORT_VALUE":

            return ({
                ...state,
                typetosort: action.payload
            })
        case "SORTING":

            let sortedpr = [...action.payload];

            switch (state.typetosort) {
                case "allproduct":
                    sortedpr = [...action.payload].sort((a, b) => {
                        return a.id > b.id ? 1 : -1;
                    })
                    return (
                        {
                            ...state,
                            filterProduct: sortedpr
                        }
                    )
                case "a-z":
                    sortedpr = [...action.payload].sort((a, b) => {
                        return a.name > b.name ? 1 : -1;
                    })
                    return ({
                        ...state,
                        filterProduct: sortedpr
                    })

                case "z-a":
                    sortedpr = [...action.payload].sort((a, b) => {
                        return a.name < b.name ? 1 : -1;
                    })
                    return ({
                        ...state,
                        filterProduct: sortedpr
                    })
                case "lowest":
                    sortedpr = [...action.payload].sort((a, b) => {
                        return a.price > b.price ? 1 : -1;
                    })
                    return ({
                        ...state,
                        filterProduct: sortedpr
                    })
                case "highest":
                    sortedpr = [...action.payload].sort((a, b) => {
                        return a.price < b.price ? 1 : -1;
                    })
                    return ({
                        ...state,
                        filterProduct: sortedpr
                    })

                default:
                    return (
                        {
                            ...state,
                            filterProduct: [action.payload]
                        }
                    )
            }
        case "CATEGORY_SORT":
            let categrypr = [];
            switch (state.catetype) {
                case "mobile":
                    categrypr = [...action.payload.filter((element) => {
                        return element.category === "mobile";
                    })]
                    break;
                case "laptop":
                    categrypr = [...action.payload.filter((element) => {
                        return element.category === "laptop";
                    })]
                    break;
                case "computer":
                    categrypr = [...action.payload.filter((element) => {
                        return element.category === "computer";
                    })]
                    break;
                case "accessories":
                    categrypr = [...action.payload.filter((element) => {
                        return element.category === "accessories";
                    })]
                    break;
                case "watch":
                    categrypr = [...action.payload.filter((element) => {
                        return element.category === "watch";
                    })]
                    break;
                default:
                    break;
            }
            return ({
                ...state,
                filterProduct: categrypr
            })
        default:
            return state;
    }
}


export default FilterReducer
