const Nav = ({ items }) => {
    return items.map((item) => (
        <a key={`menu-item-${item.label}`} href={`/${item.href}`}>
            {item.label}
        </a>
    ));
};

export default Nav;
