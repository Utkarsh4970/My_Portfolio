import { useState, useRef } from 'react';
import './project.scss';
import Slider from 'infinite-react-carousel';
import { v4 as uuidv4 } from 'uuid';

export default function Project() {
    const data = [
        {
            id: '1',
            icon: 'https://1.bp.blogspot.com/--DyifafczZc/X_mWHgLruoI/AAAAAAAADi4/wrD-MiE9zgcnTkcLeS3d3M3gQlPRJli3gCLcBGAsYHQ/s16000/Discovery%2B%252B%2BPlus%2BAddon%2B2021%2BKodi%2BRepo%2Burl%2B1.png',
            linkSite: 'https://discoveryplusclone-vishal-patil.vercel.app/',
            linkGithub: 'https://github.com/Utkarsh4970/Discoveryplus.in',
            linkBlog:
                'https://medium.com/@dchaurasiya8589/hello-everyone-f7ad89f86f40',
            title: 'Discovery Plus',
            desc: 'This Website Provides different category of Videos. ',
            img: 'https://www.medianama.com/wp-content/uploads/2020/03/Discovery-Plus.jpg.jpg',
        },
        {
            id: '2',
            icon: 'https://img.etimg.com/thumb/msid-71829974,width-300,imgsize-43030,,resizemode-4,quality-100/makemytrip-agencies.jpg',
            linkSite: 'https://mmt-12r.pages.dev/search',
            linkGithub: 'https://github.com/sachanarpit/make-my-trip',
            linkBlog:
                'https://hashnode.com/post/make-a-clone-of-make-my-trip-ckvxyshck047tz2s15fy6adjx',
            title: 'Make-My-Trip',
            desc: 'MakeMyTrip provides online travel services including airline tickets, domestic and international holiday packages.',
            img: 'https://studiousguy.com/wp-content/uploads/2020/06/mmt1.jpg',
        },
        {
            id: '3',
            icon: 'https://yt3.ggpht.com/ytc/AKedOLRFUwGzCCBxXeK_2uTZSK5g7Gn1-Uq6-Ydhlw3T=s900-c-k-c0x00ffffff-no-rj',
            linkSite: 'https://interntheoryclone.netlify.app/',
            linkGithub: 'https://github.com/AbhijitAher/Unit3_InternTheory',
            linkBlog:
                'https://',
            title: 'Intern Theory',
            desc: 'Provide Intern All across India and sell its own products..',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcKivBmkuQSPuH7wb1RTpi07CTJbIDeS5Mw&usqp=CAU',
        },
        {
            id: '4',
            icon: 'https://img.etimg.com/thumb/msid-71829974,width-300,imgsize-43030,,resizemode-4,quality-100/makemytrip-agencies.jpg',
            linkSite: 'https://mmt-12r.pages.dev/search',
            linkGithub: 'https://github.com/sachanarpit/make-my-trip',
            linkBlog:
                'https://hashnode.com/post/make-a-clone-of-make-my-trip-ckvxyshck047tz2s15fy6adjx',
            title: 'Make-My-Trip',
            desc: 'MakeMyTrip provides online travel services including airline tickets, domestic and international holiday packages.',
            img: 'https://studiousguy.com/wp-content/uploads/2020/06/mmt1.jpg',
        },
        {
            id: '1',
            icon: 'https://1.bp.blogspot.com/--DyifafczZc/X_mWHgLruoI/AAAAAAAADi4/wrD-MiE9zgcnTkcLeS3d3M3gQlPRJli3gCLcBGAsYHQ/s16000/Discovery%2B%252B%2BPlus%2BAddon%2B2021%2BKodi%2BRepo%2Burl%2B1.png',
            linkSite: 'https://discoveryplusclone-vishal-patil.vercel.app/',
            linkGithub: 'https://github.com/Utkarsh4970/Discoveryplus.in',
            linkBlog:
                'https://medium.com/@dchaurasiya8589/hello-everyone-f7ad89f86f40',
            title: 'Discovery Plus',
            desc: 'This Website Provides different category of Videos. ',
            img: 'https://www.medianama.com/wp-content/uploads/2020/03/Discovery-Plus.jpg.jpg',
        },
        {
            id: '2',
            icon: 'https://img.etimg.com/thumb/msid-71829974,width-300,imgsize-43030,,resizemode-4,quality-100/makemytrip-agencies.jpg',
            linkSite: 'https://mmt-12r.pages.dev/search',
            linkGithub: 'https://github.com/sachanarpit/make-my-trip',
            linkBlog:
                'https://hashnode.com/post/make-a-clone-of-make-my-trip-ckvxyshck047tz2s15fy6adjx',
            title: 'Make-My-Trip',
            desc: 'MakeMyTrip provides online travel services including airline tickets, domestic and international holiday packages.',
            img: 'https://studiousguy.com/wp-content/uploads/2020/06/mmt1.jpg',
        },
        {
            id: '3',
            icon: 'https://yt3.ggpht.com/ytc/AKedOLRFUwGzCCBxXeK_2uTZSK5g7Gn1-Uq6-Ydhlw3T=s900-c-k-c0x00ffffff-no-rj',
            linkSite: 'https://interntheoryclone.netlify.app/',
            linkGithub: 'https://github.com/AbhijitAher/Unit3_InternTheory',
            linkBlog:
                'https://medium.com/@roushankumar6338/building-the-clone-of-intern-theory-website-90b975b4d922',
            title: 'Intern Theory',
            desc: 'Provide Intern All across India and sell its own products..',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcKivBmkuQSPuH7wb1RTpi07CTJbIDeS5Mw&usqp=CAU',
        },
        {
            id: '4',
            icon: 'https://1.bp.blogspot.com/--DyifafczZc/X_mWHgLruoI/AAAAAAAADi4/wrD-MiE9zgcnTkcLeS3d3M3gQlPRJli3gCLcBGAsYHQ/s16000/Discovery%2B%252B%2BPlus%2BAddon%2B2021%2BKodi%2BRepo%2Burl%2B1.png',
            linkSite: 'https://discoveryplusclone-vishal-patil.vercel.app/',
            linkGithub: 'https://github.com/Utkarsh4970/Discoveryplus.in',
            linkBlog:
                'https://medium.com/@dchaurasiya8589/hello-everyone-f7ad89f86f40',
            title: 'Discovery Plus',
            desc: 'This Website Provides different category of Videos. ',
            img: 'https://www.medianama.com/wp-content/uploads/2020/03/Discovery-Plus.jpg.jpg',
        },
        {
            id: '1',
            icon: 'https://1.bp.blogspot.com/--DyifafczZc/X_mWHgLruoI/AAAAAAAADi4/wrD-MiE9zgcnTkcLeS3d3M3gQlPRJli3gCLcBGAsYHQ/s16000/Discovery%2B%252B%2BPlus%2BAddon%2B2021%2BKodi%2BRepo%2Burl%2B1.png',
            linkSite: 'https://discoveryplusclone-vishal-patil.vercel.app/',
            linkGithub: 'https://github.com/Utkarsh4970/Discoveryplus.in',
            linkBlog:
                'https://medium.com/@dchaurasiya8589/hello-everyone-f7ad89f86f40',
            title: 'Discovery Plus',
            desc: 'This Website Provides different category of Videos. ',
            img: 'https://www.medianama.com/wp-content/uploads/2020/03/Discovery-Plus.jpg.jpg',
        },
        {
            id: '2',
            icon: 'https://img.etimg.com/thumb/msid-71829974,width-300,imgsize-43030,,resizemode-4,quality-100/makemytrip-agencies.jpg',
            linkSite: 'https://mmt-12r.pages.dev/search',
            linkGithub: 'https://github.com/sachanarpit/make-my-trip',
            linkBlog:
                'https://hashnode.com/post/make-a-clone-of-make-my-trip-ckvxyshck047tz2s15fy6adjx',
            title: 'Make-My-Trip',
            desc: 'MakeMyTrip provides online travel services including airline tickets, domestic and international holiday packages.',
            img: 'https://studiousguy.com/wp-content/uploads/2020/06/mmt1.jpg',
        },
        {
            id: '3',
            icon: 'https://yt3.ggpht.com/ytc/AKedOLRFUwGzCCBxXeK_2uTZSK5g7Gn1-Uq6-Ydhlw3T=s900-c-k-c0x00ffffff-no-rj',
            linkSite: 'https://interntheoryclone.netlify.app/',
            linkGithub: 'https://github.com/AbhijitAher/Unit3_InternTheory',
            linkBlog:
                'https://medium.com/@roushankumar6338/building-the-clone-of-intern-theory-website-90b975b4d922',
            title: 'Intern Theory',
            desc: 'Provide Intern All across India and sell its own products..',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcKivBmkuQSPuH7wb1RTpi07CTJbIDeS5Mw&usqp=CAU',
        },
        {
            id: '4',
            icon: 'https://yt3.ggpht.com/ytc/AKedOLRFUwGzCCBxXeK_2uTZSK5g7Gn1-Uq6-Ydhlw3T=s900-c-k-c0x00ffffff-no-rj',
            linkSite: 'https://interntheoryclone.netlify.app/',
            linkGithub: 'https://github.com/AbhijitAher/Unit3_InternTheory',
            linkBlog:
                'https://medium.com/@roushankumar6338/building-the-clone-of-intern-theory-website-90b975b4d922',
            title: 'Intern Theory',
            desc: 'Provide Intern All across India and sell its own products..',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcKivBmkuQSPuH7wb1RTpi07CTJbIDeS5Mw&usqp=CAU',
        },
    ];

    return (
        <div className="Project" id="Project">
            <br />

            <h1>My Projects</h1>
            <hr
                style={{
                    width: 180,
                    marginTop: '-18px',
                    height: 4,
                    backgroundColor: '#18d26e',
                    border: 'none',
                }}
            />
            <br />
            <Slider
                autoplay={true}
                slidesToShow={2}
                centerMode={true}
                autoplayScroll={1}
                centerPadding={-60}
                arrows={true}
            >
                {data.map((d) => (
                    <div key={uuidv4()} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2 style={{ color: 'crimson' }}>
                                        {d.title}
                                    </h2>
                                    <p>{d.desc}</p>
                                    <div className="button">
                                        <a
                                            href={d.linkBlog}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button>Blog</button>
                                        </a>
                                        <a
                                            href={d.linkGithub}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button style={{ marginLeft: 10 }}>
                                                Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <a href={d.linkSite} target="blank">
                                    <div>
                                        <img src={d.img} alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
