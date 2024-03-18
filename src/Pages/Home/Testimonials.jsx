import data from "../../data/index.json";

export default function Testimonial(){
    return (
        <section className="testimonial--section" id="testimonial">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">
                        Clients Feedback
                    </p>
                    <h3 className="section--heading">
                        Feedback
                    </h3>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.testimonials?.map((item,index)=>(
                    <div key={index} className="testimonial--section--card">
                        <div className="testimonial--section--card--review">
                            {Array.from({length:5},(reviews,index)=>(
                               <img src="./img/star.png" alt="" />
                            ))}
                        </div>
                        <p className="text-md">{item.description}</p>
                        <div className="testimonial--section--card--author--detail">
                            <img src={item.src} alt="" />
                            <div>
                                <p className="text-md testimonial--author--name">{item.author_name}</p>
                                <p className="text-md testimonial--author--designation">
                                    {item.author_designation}
                                </p>
                            </div>
                    
                        </div>
                    </div>
                ))}</div>        </section>
    );
}