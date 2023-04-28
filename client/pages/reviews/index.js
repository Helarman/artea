import Error from "@/components/Error/Error";
import Link from "next/link";

const Reviews = () => {
    return (
        <div>
           <Link href="/">Главная</Link><br></br>
           <Link href="/reviews/new">+</Link>
        </div>
        
    )
}

export default Reviews;