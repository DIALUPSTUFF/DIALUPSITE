import React from 'react';
import SVG from 'react-inlinesvg';
import classNames from 'classnames/bind';
import { VelocityComponent } from 'velocity-react';
import styles from './styles/Link.css';
let cx = classNames.bind(styles);
const linkItems = [
    {
        text: "MUSIC",
        path: "/home",
    },
    {
        text: "VIDEO",
        path: "https://www.youtube.com/dialupstuff"
    },
    {
        text: "CODE",
        path: "https://dialup.digital/"
    },
    {
        text: "RADIO",
        path: "/radio"
    },
    {
        text: "PHOTO",
        path: "https://instagram.com/dialupstuff"
    },
    {
        text: "MAGAZINES",
        path: "/magazines"
    },
    {
        text: "BLOG",
        path: "https://dialupstuff.tumblr.com"
    },
    {
        text: "STORE",
        path: "/store"
    },
    {
        text: "CONTACT",
        path: "mailto:dialupstuff@gmail.com"
    }
];

const musicLinks = [
    {
        text: "APPLE MUSIC",
        path: "https://itunes.apple.com/us/artist/dial-up/1251004642"
    },
    {
        text: "SPOTIFY",
        path: "https://open.spotify.com/artist/0AamY2JGf1XDgB2B0ac3FX"
    }
];

class LinkItem extends React.Component {
    render() {
        const isContactLink = this.props.text === "CONTACT";
        const target = isContactLink ? null : this.props.text.toLowerCase().replace(/\s/g,'');
        return (
            <div className={cx('linkItem')}>
                <a style={{"color": this.props.color}} onClick={this.props.onClick} target={target} href={this.props.path}>
                    <p>{this.props.text}</p>
                </a>
            </div>
        )
    }
}
class LinksSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            musicLinks: false,
        };
        this.toggleMusicLinks = this.toggleMusicLinks.bind(this);
    }

    toggleMusicLinks(e) {
        e.preventDefault();
        this.setState({
            musicLinks: !this.state.musicLinks,
        });
    }

    generateLinkItems(items, color) {
        let links = [];
        for (let item of items) {
            const isMusicLink = item.text === "MUSIC";
            const onClick = isMusicLink ? this.toggleMusicLinks : null;
            links.push(<LinkItem key={item.text} onClick={onClick} text={item.text} path={item.path} color={color}/>);
        }
        links.push(this.state.musicLinks && (
            <h6 className={cx('back-mobile')} onClick={this.toggleMusicLinks}> &#8249; BACK </h6>
        ));
        return links;
    }

    render() {
        const linksToRender = this.state.musicLinks ? musicLinks : linkItems;
        const backbtn = "img/misc/back-" + this.props.color.substr(1).toLowerCase() + ".png";
        return (
            <div className={cx('linkSection')}>
                {this.state.musicLinks && (
                    <img className={cx('back')} onClick={this.toggleMusicLinks} src={backbtn} />
                )}
                {this.generateLinkItems(linksToRender, this.props.color)}
            </div>
        );
    }
}
export default LinksSection;
