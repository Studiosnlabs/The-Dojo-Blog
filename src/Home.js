
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// filter a list from a prop
//<BlogList blogs={blogs.filter((blog)=>blog.author==='Mario Asempa')} title="Mario's Blogs"/>
//npx json-server --watch data/db.json --port 8000


 
const Home = () => {
    const {data:blogs,isPending,error}= useFetch('http://localhost:8000/blogs');

    return ( 
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All blogs!"/>}
        
        
           
        </div>
        
     );
}
 
export default Home;