import { useState, useRef } from 'react';
import './project.scss';
import Slider from 'infinite-react-carousel';
import { v4 as uuidv4 } from 'uuid';

export default function Project() {
    const data = [
        {
            id: '1',
            icon: 'hoteL',
            linkSite: 'httify.app',
            linkGithub: '',
            linkBlog:
                '',
            title: 'Project Name',
            desc: 'Hotels.cg services through localized websites.',
            img: 'hotel',
        },
        {
            id: '2',
            icon: 'angelL',
            linkSite: 'https',
            linkGithub: 'https:',
            linkBlog:
                'https://',
            title: 'Project Name',
            desc: 'Ange job-seekers looking to work at startups.',
            img: 'angel',
        },
        {
            id: '3',
            icon: 'myglamm',
            linkSite: 'https:/',
            linkGithub: 'https:',
            linkBlog:
                'https://',
            title: 'VProject Name ',
            desc: 'nd  marketplace.',
            img: 'glamm',
        },
        {
            id: '4',
            icon: 'https://',
            linkSite: 'https:',
            linkGithub: 'https://',
            linkBlog:
                'https://',
            title: 'Project Name',
            desc: 'T.',
            img: 'tumblr',
        },
        {
            id: '1',
            icon: 'hpng',
            linkSite: 'httpsfy.app',
            linkGithub: 'httels.com',
            linkBlog:
                'https://rsion-5165d6eef3f',
            title: 'Project Name',
            desc: 'Hs through localized websites.',
            img: 'hotel.ng',
        },
        {
            id: '2',
            icon: 'angelL.png',
            linkSite: 'https://etlify.app',
            linkGithub: 'httpsect-angel',
            linkBlog:
                'httpsgel-co-d7718733313c',
            title: 'Project Name',
            desc: 'ijob-seekers looking to work at startups.',
            img: 'angelpng',
        },
        {
            id: '3',
            icon: 'myglapng',
            linkSite: 'https:/nelify.app',
            linkGithub: 'https://gick/myGlamm',
            linkBlog:
                'https://medm-com-a-drsion-703f06e7e9cf',
            title: 'Project Name ',
            desc: 'ffers an onliney products marketplace.',
            img: 'gla.png',
        },
        {
            id: '4',
            icon: 'httpTXaDIA&usqp=CAU',
            linkSite: 'https://.app/',
            linkGithub: 'https://-Project',
            linkBlog:
                'https://medom/ion-49e9d2391dca',
            title: 'Project Name',
            desc: 'Tu founded in 2007.',
            img: 'tumbpng',
        },
        {
            id: '1',
            icon: 'hotg',
            linkSite: 'httpslify.app',
            linkGithub: 'https:t-Hotels.com',
            linkBlog:
                'https://m6eef3f',
            title: 'Project Name.com',
            desc: 'Hoized websites.',
            img: 'hotpng',
        },
        {
            id: '2',
            icon: 'angeg',
            linkSite: 'httpsify.app',
            linkGithub: 'htt:t-angel',
            linkBlog:
                'https://m-d7718733313c',
            title: 'Project Name',
            desc: '  marketplace.',
            img: 'angg',
        },
        {
            id: '3',
            icon: 'mogo.png',
            linkSite: 'https:ify.app',
            linkGithub: 'https:/yGlamm',
            linkBlog:
                'https:n-703f06e7e9cf',
            title: 'Project Name ',
            desc: '  marketplace.',
            img: 'glam.g',
        },
        {
            id: '4',
            icon: 'https://encrwUTXaDIA&usqp=CAU',
            linkSite: 'https:/etlify.app/',
            linkGithub: 'https:oject',
            linkBlog:
                'https:a',
            title: 'Project Name',
            desc: 'Tu.',
            img: 'tumblr',
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
