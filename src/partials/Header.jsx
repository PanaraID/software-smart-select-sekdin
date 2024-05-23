function Header(props) {
    return (
        <div className="alert alert-primary text-center" role="alert">
            {props.text}
        </div>
    )
}

export default Header