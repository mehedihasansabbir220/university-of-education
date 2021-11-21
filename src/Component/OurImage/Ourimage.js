import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
    return (
        <>
            <h1 className='bg-success py-3 my-2'>Our Image Galary </h1>
            <ImageList sx={{ width: "auto", height: 450 }} cols={3} rowHeight={164}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}

const itemData = [
    {
        img: 'https://www.huparis.edu.eu/download/Ceremony_140619/cerimonia_6.jpg',
        title: 'Breakfast',
    },
    {
        img: 'https://ukraine-solutions.com/wp-content/uploads/2019/05/1a.jpg',
        title: 'Burger',
    },
    {
        img: 'https://www.uopeople.edu/wp-content/uploads/2019/08/iStock-476815779-Copy@2x.jpg',
        title: 'Camera',
    },
    {
        img: 'https://assets.weforum.org/article/image/_sNw0oZO6IQV_vLpSbxFnx44SN_obtJrNdbSk0_yFFk.JPG',
        title: 'Coffee',
    },
    {
        img: 'https://www.georgetown.edu/wp-content/uploads/2019/09/20190828_FirstDay_NingLeng-_McCourt-45110optimized-2000x1500-c-default.jpg',
        title: 'Hats',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6u4gsmGsPdXSuODs9Q4mp1Uo_iPICbZsCg&usqp=CAU',
        title: 'Honey',
    },
    {
        img: 'https://i.guim.co.uk/img/media/847bbf1956a53bed4c77595cdf0ce6583ee602d8/0_346_5184_3110/master/5184.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=0210b2564afa2ab7c256ef5a76edcd97',
        title: 'Basketball',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQma9Zb3FQ1lPoe2NTVfPt8tRdN9AvmhENxzEpJgONAKVxskWvFSgFOqRsfp6lNdmCXx7c&usqp=CAU',
        title: 'Fern',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJa1Z1_mXKT5p3xdIFpZ6iOcr_w5TsxzCRo8MTS9T4eM3s_7wZuzNf1kMNhI4FpUjd54&usqp=CAU',
        title: 'Mushrooms',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_y1BPNjCnwzcKKoHEepwu9yhgJlegZQGTCQ&usqp=CAU',
    },
    {
        img: 'https://media.istockphoto.com/videos/students-and-av-screen-in-atrium-at-a-university-tilt-shot-video-id614948386?s=640x640',
        title: 'Sea star',
    },
    {
        img: 'https://www.huparis.edu.eu/download/Ceremony_140619/cerimonia_3.jpg',
        title: 'Bike',
    },
];
