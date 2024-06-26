import data from "../../data/index.json";

export default function MySkills(){
    return(
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h3 className="skills--section--heading">My Expertise</h3>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item,index)=>(
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt="img" />
                        </div>
                        <div className="skills--section--card--content">
                            <h4 className="skills--section--title">
                                {item.title}
                            </h4>
                            <p className="skills--section--description">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}