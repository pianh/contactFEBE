import Image from 'next/image';

function HeaderBottom(props) {
    return (
        <section className="header__bottom container-fluid">
            <div className="_img">
                <Image
                    src={props.src}
                    alt="header bottom img"
                    width={props.width}
                    height={props.height}
                    objectFit="cover"
                />
            </div>
            <h1 className="-text">{props.text}</h1>
        </section>
    );
}

export default HeaderBottom;
