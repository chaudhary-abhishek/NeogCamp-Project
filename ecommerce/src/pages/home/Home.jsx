import {categories} from "../../backend/db/categories"
export const Home = ()=>{
    return(
        <div>
            Hi This is Home/category page
            <ul>
                {
                    categories.map(({categoryName})=><li>{categoryName}</li>)
                }
            </ul>
        </div>
    )
}


