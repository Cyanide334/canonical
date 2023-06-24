import moment from "moment";

const Card = ({data}) => {
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

    // extract categories
    const categories = data._embedded['wp:term'][0].map((cat) => {
        return {
            id: cat.id,
            // name is plural in the API, convert to singular
            name: cat.name.slice(0, -1),
            link: cat.link
        }
    });

    // extract tags
    const tags = data._embedded['wp:term'][1].map((tag) => {
        return {
            id: tag.id,
            name: tag.name,
            link: tag.link
        }
    });

    // extract topics
    const topics = data._embedded['wp:term'][2].map((topic) => {
        return {
            id: topic.id,
            name: topic.name,
            link: topic.link
        }
    });


    // figure out what the title should be
    const title = topics.length > 0 ? topics[0] : tags[0];
    //figure out what the category should be
    const category = categories.length > 0 ? categories[0] : {name: 'Article', link: '#'};

    console.log(data.featured_media)
    
    return (
        <div className="p-card col-4 col-medium-3 l-site" style={{minHeight: 0}}>
            <div className="p-card__content ">
                <p><a href={title.link} className="p-link--soft">{title.name.toUpperCase()}</a></p>
                <hr />
                <img className="p-card__image" alt="" height="185" width="330" src={data.featured_media} />
                <h4 style={{fontWeight: 400}}>
                    <a href={data.link}>{data.title.rendered}</a>
                </h4>
                <p className="" >
                    <i>By {authors.map((author, index) => (
                        <span key={author.id}>
                            <a href={author.link}>{author.name}</a>
                            {index !== authors.length - 1 && ', '}
                        </span>
                    ))} on {date}</i>
                </p>
            </div>
            <footer className="l-footer--sticky">
                <hr />
                <p className="p-text--small u-no-margin" style={{padding: "0.4rem 0rem"}}><a href={category.link} className="p-link--soft">{category.name}</a></p>
            </footer>
        </div>
    );
}

export default Card;