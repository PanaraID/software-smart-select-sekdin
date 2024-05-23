function Header(props) {
    return (
        <div className="alert alert-primary" role="alert">
            {props.text}
        </div>
    )
}

export default Header