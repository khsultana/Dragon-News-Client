import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaShare } from 'react-icons/fa';
const NewsSummaryCard = ({ news }) => {
    console.log(news)

    const { _id, title, details, image_url, author } = news;


    return (

        <Card className="">
            <Card.Header className="d-flex justify-content-between">
                <div>
                    <Image roundedCircle
                        src={author.img}
                        style={{ height: '60px' }}>
                    </Image>
                </div>
                <div>
                    <FaBookmark></FaBookmark>
                    <FaShare></FaShare>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Card.Img variant="top" src={image_url} />

                <Card.Text>
                    {details.length >
                        250 ?
                        <p>{details.slice(0, 250) + ' .... '}<Link to={`/news/${_id}`}>Read More</Link></p>
                        : <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>

    );
};

export default NewsSummaryCard;