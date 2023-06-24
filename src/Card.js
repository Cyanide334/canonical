import moment from "moment";

const Card = ({data}) => {
    console.log(data);

    // extract the author data
    const authors = data._embedded.author.map((author) => {
        return {
            id : author.id,
            name: author.name,
            link: author.link
        }
    });
    
    // extract the date
    const date = moment(data.date).format('D MMMM YYYY');


    return (
        <div className="p-card">
            <div className="p-card__content">
                <p className="u-no-margin--bottom">CLOUD AND SERVER</p>
                <hr className="u-sv1"/>
                <img className="p-card__image" alt="" height="185" width="330" src={data.featured_media} />
                <h4 style={{fontWeight: 400}}>
                    <a href={data.link}>{data.title.rendered}</a>
                </h4>
                <p className="u-no-padding--bottom" >
                    <i>By {authors.map((author, index) => (
                        <span key={author.id}>
                            <a href={author.link}>{author.name}</a>
                            {index !== authors.length - 1 && ', '}
                        </span>
                    ))} on {date}</i>
                </p>
                <hr />
                <p className="p-text--small">Article</p>
            </div>
        </div>
    );
}

export default Card;